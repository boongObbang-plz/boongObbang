package com.example.boongObbang.jwt;

import com.example.boongObbang.entity.User;
import com.example.boongObbang.exception.exceptions.ExpireAccessTokenException;
import com.example.boongObbang.exception.exceptions.InvalidAccessTokenException;
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
import org.springframework.http.HttpStatus;
import org.springframework.web.filter.OncePerRequestFilter;


public class JwtAuthorizationFilter extends OncePerRequestFilter {

	private JwtProvider jwtProvider;
	private UserRepository userRepository;

	public JwtAuthorizationFilter(JwtProvider jwtProvider, UserRepository userRepository) {
		this.jwtProvider = jwtProvider;
		this.userRepository = userRepository;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
		FilterChain filterChain) throws ServletException, IOException {

		List<String> url = Arrays.asList(
			"/",
			"/main/**",
			"/login/**",
			"/login"
		);

		//인증, 인가가 필요없는 uri
		if (url.contains(request.getRequestURI())) {
			filterChain.doFilter(request, response);
			return;
		}

		String token = request.getHeader("Authorization");

		try {
			if (token != null && !token.equalsIgnoreCase("")) {

				//토큰 유효성 검사
				if (!jwtProvider.isTokenValid(token))
					throw new InvalidAccessTokenException(ResponseMessage.INVALID_ACCESS_TOKEN);

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
						throw new InvalidAccessTokenException(ResponseMessage.INVALID_ACCESS_TOKEN);
					}

					filterChain.doFilter(request, response);
				} else {
					throw new InvalidAccessTokenException(ResponseMessage.INVALID_ACCESS_TOKEN);
				}
			} else {
				throw new InvalidAccessTokenException(ResponseMessage.INVALID_ACCESS_TOKEN);
			}
		} catch (InvalidAccessTokenException e) {
			try {
				ObjectMapper mapper = new ObjectMapper();
				response.setCharacterEncoding("UTF-8");
				response.setContentType("application/json");
				mapper.writeValue(response.getWriter(), CustomResponse.response(HttpStatus.UNAUTHORIZED.value(), ResponseMessage.INVALID_ACCESS_TOKEN));
				response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
			} catch (IOException ee) {
				throw new RuntimeException(ee);
			}
		} catch (ExpireAccessTokenException e) {
			try {
				ObjectMapper mapper = new ObjectMapper();
				response.setCharacterEncoding("UTF-8");
				response.setContentType("application/json");
				mapper.writeValue(response.getWriter(), CustomResponse.response(HttpStatus.UNAUTHORIZED.value(), ResponseMessage.EXPIRE_ACCESS_TOKEN));
				response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
			} catch (IOException ee) {
				throw new RuntimeException(ee);
			}
		}
	}
}

