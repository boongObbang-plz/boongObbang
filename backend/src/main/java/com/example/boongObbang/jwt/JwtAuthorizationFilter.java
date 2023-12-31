package com.example.boongObbang.jwt;

import com.example.boongObbang.entity.Setting;
import com.example.boongObbang.entity.User;
import com.example.boongObbang.exception.exceptions.ExpireAccessTokenException;
import com.example.boongObbang.exception.exceptions.InvalidAccessTokenException;
import com.example.boongObbang.exception.exceptions.NoExistSettingException;
import com.example.boongObbang.repository.SettingRepository;
import com.example.boongObbang.repository.UserRepository;
import com.example.boongObbang.response.CustomResponse;
import com.example.boongObbang.response.ResponseMessage;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.filter.OncePerRequestFilter;

@Slf4j
public class JwtAuthorizationFilter extends OncePerRequestFilter {

	private final JwtProvider jwtProvider;
	private final UserRepository userRepository;
	private final SettingRepository settingRepository;

	public JwtAuthorizationFilter(JwtProvider jwtProvider, UserRepository userRepository, SettingRepository settingRepository) {
		this.jwtProvider = jwtProvider;
		this.userRepository = userRepository;
		this.settingRepository = settingRepository;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
		FilterChain filterChain) throws ServletException, IOException {

		List<String> url = Arrays.asList(
			"/",
			"/main/**",
			"/login/**",
			"/login/oauth2/code/kakao",
			"/login/oauth2/code/google",
			"/login/oauth2/code/test",
			"/error"
		);

		//인증, 인가가 필요없는 uri
		AntPathMatcher pathMatcher = new AntPathMatcher();

		if (url.stream().anyMatch(pattern -> pathMatcher.match(pattern, request.getRequestURI()))) {
			filterChain.doFilter(request, response);
			return;
		}

		String token = request.getHeader("Authorization");

		try {
			if (token != null && !token.equalsIgnoreCase("")) {

				log.info("token : " + token);
				//토큰 유효성 검사
				if (!jwtProvider.isTokenValid(token)) {
					log.info("token is not valid");
					throw new InvalidAccessTokenException(ResponseMessage.INVALID_ACCESS_TOKEN);
				}
				//토큰 만료 검사
				if (jwtProvider.isTokenExpired(token)) {
					throw new ExpireAccessTokenException(ResponseMessage.EXPIRE_ACCESS_TOKEN);
				}

				String email = jwtProvider.getEmail(token);
				String provider = jwtProvider.getProvider(token);

				if (email != null && !email.equalsIgnoreCase("") && provider != null
					&& !provider.equalsIgnoreCase("")) {
					Optional<User> user = userRepository.findByEmailAndProvider(email, provider);

					//db에 있는 사용자인지 검사
					if (user.isEmpty()) {
						log.info("token user no exist in db");
						throw new InvalidAccessTokenException(ResponseMessage.INVALID_ACCESS_TOKEN);
					}

					//setting이 되어있지 않은 사용자인지 검사
					Optional<Setting> setting = settingRepository.findByUserId(user.get().getId());
					if (!request.getRequestURI().equals("/settings") && setting.isEmpty()) {
						throw new NoExistSettingException(ResponseMessage.NO_EXIST_SETTING);
					}

					filterChain.doFilter(request, response);
				} else {
					log.info("token email, provider is null");
					throw new InvalidAccessTokenException(ResponseMessage.INVALID_ACCESS_TOKEN);
				}
			} else {
				log.info("token is null");
				throw new InvalidAccessTokenException(ResponseMessage.INVALID_ACCESS_TOKEN);
			}
		} catch (InvalidAccessTokenException e) {
			try {
				ObjectMapper mapper = new ObjectMapper();
				response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
				response.setCharacterEncoding("UTF-8");
				response.setContentType("application/json");
				mapper.writeValue(response.getWriter(), CustomResponse.response(HttpStatus.UNAUTHORIZED.value(), ResponseMessage.INVALID_ACCESS_TOKEN));
			} catch (IOException ee) {
				throw new RuntimeException(ee);
			}
		} catch (ExpireAccessTokenException e) {
			try {
				ObjectMapper mapper = new ObjectMapper();
				response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
				response.setCharacterEncoding("UTF-8");
				response.setContentType("application/json");
				mapper.writeValue(response.getWriter(), CustomResponse.response(HttpStatus.UNAUTHORIZED.value(), ResponseMessage.EXPIRE_ACCESS_TOKEN));
			} catch (IOException ee) {
				throw new RuntimeException(ee);
			}
		} catch (NoExistSettingException e) {
			try {
				ObjectMapper mapper = new ObjectMapper();
				response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
				response.setCharacterEncoding("UTF-8");
				response.setContentType("application/json");
				mapper.writeValue(response.getWriter(), CustomResponse.response(HttpStatus.BAD_REQUEST.value(), ResponseMessage.NO_EXIST_SETTING));
			} catch (IOException ee) {
				throw new RuntimeException(ee);
			}
		}
	}
}

