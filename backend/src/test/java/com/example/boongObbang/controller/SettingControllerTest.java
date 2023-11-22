package com.example.boongObbang.controller;

import com.example.boongObbang.dto.CreateSettingRequestDto;
import com.example.boongObbang.dto.PatchSettingRequestDto;
import com.example.boongObbang.entity.User;
import com.example.boongObbang.jwt.JwtProvider;
import com.example.boongObbang.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.UUID;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
@AutoConfigureMockMvc
public class SettingControllerTest {
	@Autowired
	MockMvc mockMvc;

	@Autowired
	ObjectMapper objectMapper;

	@MockBean
	UserRepository userRepository;

	@MockBean
	JwtProvider jwtProvider;

	@Test
	@DisplayName("마차 만들기 성공 테스트")
	public void successCreate() throws Exception {
		//given
		String email = "settingcontroller@test.com";
		User user = User.builder()
			.email(email)
			.uuid(UUID.randomUUID().toString())
			.provider("google").build();

		userRepository.save(user);

		String token = jwtProvider.createToken(email, "google");

		CreateSettingRequestDto createSettingRequestDto = new CreateSettingRequestDto();

		createSettingRequestDto.setName("주은이네 붕어빵");
		createSettingRequestDto.setColor(0);
		createSettingRequestDto.setLight(1);

		String data = objectMapper.writeValueAsString(createSettingRequestDto);

		//when
		ResultActions result = mockMvc.perform(MockMvcRequestBuilders.post("/settings")
				.with(csrf())
				.contentType(MediaType.APPLICATION_JSON)
				.accept(MediaType.APPLICATION_JSON)
				.content(data)
				.header(HttpHeaders.AUTHORIZATION, token));

		//then
		assertEquals(HttpStatus.CREATED.value(), result.andReturn().getResponse().getStatus());
	}

	@Test
	@DisplayName("마차 만들기 실패 테스트(빈 값)")
	public void failCreateEmpty() throws Exception {
		//given
		String email = "settingcontroller2@test.com";
		User user = User.builder()
			.email(email)
			.uuid(UUID.randomUUID().toString())
			.provider("google").build();

		userRepository.save(user);

		String token = jwtProvider.createToken(email, "google");

		CreateSettingRequestDto createSettingRequestDto = new CreateSettingRequestDto();

		createSettingRequestDto.setColor(0);
		createSettingRequestDto.setLight(1);

		String data = objectMapper.writeValueAsString(createSettingRequestDto);

		//when
		ResultActions result = mockMvc.perform(MockMvcRequestBuilders.post("/settings")
			.with(csrf())
			.contentType(MediaType.APPLICATION_JSON)
			.accept(MediaType.APPLICATION_JSON)
			.content(data)
			.header(HttpHeaders.AUTHORIZATION, token));

		//then
		assertEquals(HttpStatus.BAD_REQUEST.value(), result.andReturn().getResponse().getStatus());
	}

	@Test
	@DisplayName("마차 만들기 실패 테스트(유효하지 않은 토큰)")
	public void failCreateToken() throws Exception {
		//given
		String email = "settingcontroller3@test.com";
		User user = User.builder()
			.email(email)
			.uuid(UUID.randomUUID().toString())
			.provider("google").build();

		userRepository.save(user);

		String token = jwtProvider.createToken("failEmail@test.com", "google");

		CreateSettingRequestDto createSettingRequestDto = new CreateSettingRequestDto();

		createSettingRequestDto.setName("주은이네 붕어빵");
		createSettingRequestDto.setColor(0);
		createSettingRequestDto.setLight(1);

		String data = objectMapper.writeValueAsString(createSettingRequestDto);

		//when
		ResultActions result = mockMvc.perform(MockMvcRequestBuilders.post("/settings")
			.with(csrf())
			.contentType(MediaType.APPLICATION_JSON)
			.accept(MediaType.APPLICATION_JSON)
			.content(data)
			.header(HttpHeaders.AUTHORIZATION, token));

		//then
		assertEquals(HttpStatus.UNAUTHORIZED.value(), result.andReturn().getResponse().getStatus());
	}

	@Test
	@DisplayName("마차 수정하기 성공 테스트")
	public void successPatch() throws Exception {
		//given
		String email = "settingcontroller@test.com";
		User user = User.builder()
			.email(email)
			.uuid(UUID.randomUUID().toString())
			.provider("google").build();

		userRepository.save(user);

		String token = jwtProvider.createToken(email, "google");

		CreateSettingRequestDto createSettingRequestDto = new CreateSettingRequestDto();

		createSettingRequestDto.setName("주은이네 붕어빵");
		createSettingRequestDto.setColor(0);
		createSettingRequestDto.setLight(1);

		String data = objectMapper.writeValueAsString(createSettingRequestDto);

		mockMvc.perform(MockMvcRequestBuilders.post("/settings")
			.with(csrf())
			.contentType(MediaType.APPLICATION_JSON)
			.accept(MediaType.APPLICATION_JSON)
			.content(data)
			.header(HttpHeaders.AUTHORIZATION, token));

		//when
		PatchSettingRequestDto patchSettingRequestDto = new PatchSettingRequestDto();

		int light = 3;
		String name = "00붕어빵";

		patchSettingRequestDto.setLight(3);
		patchSettingRequestDto.setName(name);

		String settingData = objectMapper.writeValueAsString(patchSettingRequestDto);

		ResultActions result = mockMvc.perform(MockMvcRequestBuilders.patch("/settings")
									.contentType(MediaType.APPLICATION_JSON)
									.accept(MediaType.APPLICATION_JSON)
									.content(settingData)
									.header(HttpHeaders.AUTHORIZATION, token));
		//then
		assertEquals(HttpStatus.OK.value(), result.andReturn().getResponse().getStatus());
	}

	@Test
	@DisplayName("마차 삭제하기 성공 테스트")
	public void successDelete() throws Exception {
		//given
		String email = "settingcontroller@test.com";
		User user = User.builder()
			.email(email)
			.uuid(UUID.randomUUID().toString())
			.provider("google").build();

		userRepository.save(user);

		String token = jwtProvider.createToken(email, "google");

		CreateSettingRequestDto createSettingRequestDto = new CreateSettingRequestDto();

		createSettingRequestDto.setName("주은이네 붕어빵");
		createSettingRequestDto.setColor(0);
		createSettingRequestDto.setLight(1);

		String data = objectMapper.writeValueAsString(createSettingRequestDto);

		mockMvc.perform(MockMvcRequestBuilders.post("/settings")
			.with(csrf())
			.contentType(MediaType.APPLICATION_JSON)
			.accept(MediaType.APPLICATION_JSON)
			.content(data)
			.header(HttpHeaders.AUTHORIZATION, token));

		//when
		ResultActions result = mockMvc.perform(MockMvcRequestBuilders.delete("/settings")
			.contentType(MediaType.APPLICATION_JSON)
			.accept(MediaType.APPLICATION_JSON)
			.header(HttpHeaders.AUTHORIZATION, token));

		//then
		assertEquals(HttpStatus.OK.value(), result.andReturn().getResponse().getStatus());
	}
}
