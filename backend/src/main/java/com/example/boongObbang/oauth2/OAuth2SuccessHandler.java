package com.example.boongObbang.oauth2;

import com.example.boongObbang.dto.TokenDto;
import com.example.boongObbang.entity.Token;
import com.example.boongObbang.entity.User;
import com.example.boongObbang.jwt.JwtProvider;
import com.example.boongObbang.repository.TokenRedisRepository;
import com.example.boongObbang.repository.UserRepository;
import com.example.boongObbang.response.CustomResponse;
import com.example.boongObbang.response.ResponseMessage;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class OAuth2SuccessHandler implements AuthenticationSuccessHandler {

	private final JwtProvider jwtProvider;
	private final TokenRedisRepository redisRepository;
	private final UserRepository userRepository;

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {

		OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();

		String email = oAuth2User.getAttribute("email");
		String provider = oAuth2User.getAttribute("provider");

		String accessToken = jwtProvider.createToken(email, provider);

		TokenDto tokenDto = new TokenDto();
		tokenDto.setToken(accessToken);

		Token token = Token.builder()
			.email(provider + "-" + email)
			.jwt(accessToken).build();

		redisRepository.save(token);

		User user = User.builder()
			.email(email)
			.provider(provider)
			.uuid(UUID.randomUUID().toString()).build();

		userRepository.save(user);

		ObjectMapper mapper = new ObjectMapper();

		//이미 회원가입이 된 유저인 경우
		//TODO: 해당 이메일과 프로바이더로 마차가 있는지 확인 한 후에 마차가 없으면 201, 있으면 200 반환
//		if (//마차 여부 확인) {
//			try {
//				mapper.writeValue(response.getWriter(),
//					CustomResponse.response(HttpStatus.OK.value(), ResponseMessage.SUCCESS, tokenDto));
//				response.setStatus(HttpServletResponse.SC_OK);
//				response.setCharacterEncoding("utf-8");
//			} catch (IOException e) {
//				throw new RuntimeException(e);
//			}
//		}


		//처음 회원 가입을 한 경우
		try {
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json");
			mapper.writeValue(response.getWriter(), CustomResponse.response(HttpStatus.CREATED.value(), ResponseMessage.SUCCESS, tokenDto));
			response.setStatus(HttpServletResponse.SC_CREATED);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

}
