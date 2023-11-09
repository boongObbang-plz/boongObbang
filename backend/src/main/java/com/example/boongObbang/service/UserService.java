package com.example.boongObbang.service;

import com.example.boongObbang.dto.KakaoDto;
import com.example.boongObbang.dto.KakaoProfileDto;
import com.example.boongObbang.dto.LoginRequestDto;
import com.example.boongObbang.dto.LoginResponseDto;
import com.example.boongObbang.dto.LoginServiceDto;
import com.example.boongObbang.entity.User;
import com.example.boongObbang.jwt.JwtProvider;
import com.example.boongObbang.repository.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Optional;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private JwtProvider jwtProvider;
	
	@Value("kakao.client.key")
	private String client_key;

	@Value("kakao.redirect.url")
	private String redirect_url;

	@Value("kakao.secret.key")
	private String secret_key;

	public LoginServiceDto loginKakao(LoginRequestDto loginRequestDto) {

		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		MultiValueMap<String, String> map = new LinkedMultiValueMap<>();

		map.add("grant_type", "authorization_code");
		map.add("client_id", client_key);
		map.add("redirect_uri", redirect_url);
		map.add("code", loginRequestDto.getCode());
		map.add("client_secret", secret_key);

		headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

		HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest = new HttpEntity<>(map, headers);


		ResponseEntity<String> kakaoResponse = restTemplate.exchange(
			"https://kauth.kakao.com/oauth/token",
			HttpMethod.POST,
			kakaoTokenRequest,
			String.class
		);

		ObjectMapper objectMapper = new ObjectMapper();

		KakaoDto kakaoDto = null;

		try {
			kakaoDto = objectMapper.readValue(kakaoResponse.getBody(), KakaoDto.class);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}

		return saveUser(kakaoDto);
	}

	public LoginServiceDto saveUser(KakaoDto kakaoDto) {
		KakaoProfileDto kakaoProfile = findProfile(kakaoDto.getAccess_token());
		
		String email = kakaoProfile.getKakaoAccount().getEmail();
		String provider = "kakao";

		Optional<User> user = userRepository.findByEmailAndProvider(email, provider);
		
		LoginServiceDto loginServiceDto = new LoginServiceDto();
		
		//첫 로그인인 경우
		if (user.isEmpty()) {
			loginServiceDto.setNew(true);
			
			User signUp = User.builder()
				.email(email)
				.uuid(UUID.randomUUID().toString())
				.provider(provider).build();
			
			userRepository.save(signUp);
		}
		else 
			loginServiceDto.setNew(false);
		
		loginServiceDto.setToken(jwtProvider.createToken(email, provider));
		
		return loginServiceDto;
	}

	public KakaoProfileDto findProfile(String token) {
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();

		headers.add("Authorization", "Bearer " + token);
		headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

		HttpEntity<MultiValueMap<String, String>> kakaoProfileRequest = new HttpEntity<>(headers);

		ResponseEntity<String> kakaoProfileResponse = restTemplate.exchange(
			"https://kapi.kakao.com/v2/user/me",
			HttpMethod.POST,
			kakaoProfileRequest,
			String.class
		);

		ObjectMapper objectMapper = new ObjectMapper();

		KakaoProfileDto kakaoProfileDto = null;

		try {
			kakaoProfileDto = objectMapper.readValue(kakaoProfileResponse.getBody(), KakaoProfileDto.class);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}

		return kakaoProfileDto;
	}
}
