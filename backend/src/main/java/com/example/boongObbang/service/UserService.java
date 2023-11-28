package com.example.boongObbang.service;

import com.example.boongObbang.dto.GoogleDto;
import com.example.boongObbang.dto.GoogleProfileDto;
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
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import lombok.extern.slf4j.Slf4j;
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
@Slf4j
public class UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private JwtProvider jwtProvider;
	
	@Value("kakao.client.key")
	private String kakao_client_key;

	@Value("kakao.redirect.url")
	private String kakao_redirect_url;

	@Value("kakao.secret.key")
	private String kakao_secret_key;

	@Value("google.client.key")
	private String google_client_key;

	@Value("google.redirect.url")
	private String google_redirect_url;

	@Value("google.secret.key")
	private String google_secret_key;

	public LoginServiceDto loginKakao(LoginRequestDto loginRequestDto) {

		log.info("kakao token : " + loginRequestDto.getCode());

		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		MultiValueMap<String, String> map = new LinkedMultiValueMap<>();

		map.add("grant_type", "authorization_code");
		map.add("client_id", kakao_client_key);
		map.add("redirect_uri", kakao_redirect_url);
		map.add("code", loginRequestDto.getCode());
		map.add("client_secret", kakao_secret_key);

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
			log.info("kakao get token error");
			e.printStackTrace();
		}

		return saveKakaoUser(kakaoDto);
	}

	public LoginServiceDto saveKakaoUser(KakaoDto kakaoDto) {
		KakaoProfileDto kakaoProfile = findKakaoProfile(kakaoDto.getAccess_token());
		
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

	public KakaoProfileDto findKakaoProfile(String token) {
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
			log.info("kakao find user error");
			e.printStackTrace();
		}

		return kakaoProfileDto;
	}

	public LoginServiceDto loginGoogle(LoginRequestDto loginRequestDto) {
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		MultiValueMap<String, String> map = new LinkedMultiValueMap<>();

		map.add("grant_type", "authorization_code");
		map.add("client_id", google_client_key);
		map.add("redirect_uri", google_redirect_url);
		map.add("code", loginRequestDto.getCode());
		map.add("client_secret", google_secret_key);

		headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

		HttpEntity<MultiValueMap<String, String>> googleTokenRequest = new HttpEntity<>(map, headers);

		ResponseEntity<String> googleResponse = restTemplate.postForEntity("https://oauth2.googleapis.com/token", googleTokenRequest, String.class);


		ObjectMapper objectMapper = new ObjectMapper();

		GoogleDto googleDto = null;

		try {
			googleDto = objectMapper.readValue(googleResponse.getBody(), GoogleDto.class);
		} catch (JsonProcessingException e) {
			log.info("google get token error");
			e.printStackTrace();
		}

		return saveGoogleUser(googleDto);
	}

	public LoginServiceDto saveGoogleUser(GoogleDto googleDto) {
		GoogleProfileDto googleProfileDto = findGoogleProfile(googleDto.getAccess_token());

		String email = googleProfileDto.getEmail();
		String provider = "google";

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

	public GoogleProfileDto findGoogleProfile(String token) {
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();

		headers.add("Authorization", "Bearer " + token);
		headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

		HttpEntity<MultiValueMap<String, String>> googleProfileRequest = new HttpEntity<>(headers);

		ResponseEntity<String> googleProfileResponse = restTemplate.exchange("https://www.googleapis.com/userinfo/v2/me", HttpMethod.GET, googleProfileRequest, String.class);

		ObjectMapper objectMapper = new ObjectMapper();

		GoogleProfileDto googleProfileDto = null;

		try {
			googleProfileDto = objectMapper.readValue(googleProfileResponse.getBody(), GoogleProfileDto.class);
		} catch (JsonProcessingException e) {
			log.info("google find user error");
			e.printStackTrace();
		}

		return googleProfileDto;
	}
}

