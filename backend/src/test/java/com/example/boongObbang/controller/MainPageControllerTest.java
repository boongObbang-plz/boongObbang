package com.example.boongObbang.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;

import com.example.boongObbang.dto.CreateSettingRequestDto;
import com.example.boongObbang.dto.WriteMessageResponseDto;
import com.example.boongObbang.entity.Message;
import com.example.boongObbang.entity.User;
import com.example.boongObbang.jwt.JwtProvider;
import com.example.boongObbang.repository.MessageRepository;
import com.example.boongObbang.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.UUID;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
@AutoConfigureMockMvc
public class MainPageControllerTest {

	@Autowired
	MockMvc mockMvc;

	@Autowired
	ObjectMapper objectMapper;

	@Autowired
	UserRepository userRepository;

	@Autowired
	JwtProvider jwtProvider;

	@Autowired
	MessageRepository messageRepository;

	@Test
	@DisplayName("나의 메인페이지 불러오기 성공 테스트")
	public void successGetMainPage() throws Exception {
		//given
		String email = "getmainpagecontroller@test.com";
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
		ResultActions result = mockMvc.perform(MockMvcRequestBuilders.get("/mainpage")
			.with(csrf())
			.contentType(MediaType.APPLICATION_JSON)
			.accept(MediaType.APPLICATION_JSON)
			.header(HttpHeaders.AUTHORIZATION, token));

		//then
		assertEquals(HttpStatus.OK.value(), result.andReturn().getResponse().getStatus());
	}

	@Test
	@DisplayName("링크 가져오기 성공 테스트")
	public void successLink() throws Exception {
		//given
		String email = "linkcontroller@test.com";
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
		ResultActions result = mockMvc.perform(MockMvcRequestBuilders.get("/mainpage/link")
			.with(csrf())
			.contentType(MediaType.APPLICATION_JSON)
			.accept(MediaType.APPLICATION_JSON)
			.header(HttpHeaders.AUTHORIZATION, token));

		//then
		assertEquals(HttpStatus.OK.value(), result.andReturn().getResponse().getStatus());
	}

	@Test
	@DisplayName("편지 삭제하기 성공 테스트")
	public void successDelete() throws Exception {
		//given
		String email = "delete@test.com";
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

		Message message1 = Message.builder()
			.recipient("받는사람")
			.message("메시지~~~~~")
			.madeBy("글쓴사람")
			.color(1)
			.ip("ip주소~~~~~~")
			.user(user).build();

		messageRepository.save(message1);

		//when
		ResultActions result = mockMvc.perform(MockMvcRequestBuilders.patch("/mainpage/message/{idx}", message1.getId())
			.with(csrf())
			.contentType(MediaType.APPLICATION_JSON)
			.accept(MediaType.APPLICATION_JSON)
			.header(HttpHeaders.AUTHORIZATION, token));

		//then
		assertEquals(HttpStatus.OK.value(), result.andReturn().getResponse().getStatus());
	}

	@Test
	@DisplayName("편지 삭제하기 실패 테스트(존재하지 않는 편지)")
	public void failDelete() throws Exception {
		//given
		String email = "deletefail@test.com";
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

		Message message1 = Message.builder()
			.recipient("받는사람")
			.message("메시지~~~~~")
			.madeBy("글쓴사람")
			.color(1)
			.ip("ip주소~~~~~~")
			.user(user).build();

		messageRepository.save(message1);

		//when
		ResultActions result = mockMvc.perform(MockMvcRequestBuilders.patch("/mainpage/message/{idx}", 26)
			.with(csrf())
			.contentType(MediaType.APPLICATION_JSON)
			.accept(MediaType.APPLICATION_JSON)
			.header(HttpHeaders.AUTHORIZATION, token));

		//then
		assertEquals(HttpStatus.BAD_REQUEST.value(), result.andReturn().getResponse().getStatus());
	}

	@Test
	@DisplayName("편지 읽기 성공 테스트(크리스마스 이전)")
	public void successRead() throws Exception {
		//given
		String email = "read@test.com";
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

		Message message1 = Message.builder()
			.recipient("받는사람")
			.message("메시지~~~~~")
			.madeBy("글쓴사람")
			.color(1)
			.ip("ip주소~~~~~~")
			.user(user).build();

		messageRepository.save(message1);

		//when
		ResultActions result = mockMvc.perform(MockMvcRequestBuilders.get("/mainpage/message/{idx}", message1.getId())
			.with(csrf())
			.contentType(MediaType.APPLICATION_JSON)
			.accept(MediaType.APPLICATION_JSON)
			.header(HttpHeaders.AUTHORIZATION, token));

		//then
		assertEquals(HttpStatus.ACCEPTED.value(), result.andReturn().getResponse().getStatus());
	}

	@Test
	@DisplayName("남의 메인페이지 불러오기 성공 테스트")
	public void successGetOtherMainPage() throws Exception {
		//given
		String email = "otherpagecontroller@test.com";
		String uuid = UUID.randomUUID().toString();

		User user = User.builder()
			.email(email)
			.uuid(uuid)
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

		Message message1 = Message.builder()
			.recipient("받는사람")
			.message("메시지~~~~~")
			.madeBy("글쓴사람")
			.color(1)
			.ip("ip주소~~~~~~")
			.user(user).build();

		messageRepository.save(message1);

		//when
		ResultActions result = mockMvc.perform(MockMvcRequestBuilders.get("/main/{uuid}", uuid)
			.with(csrf())
			.contentType(MediaType.APPLICATION_JSON)
			.accept(MediaType.APPLICATION_JSON));

		//then
		assertEquals(HttpStatus.OK.value(), result.andReturn().getResponse().getStatus());
	}

	@Test
	@DisplayName("편지쓰기 성공 테스트")
	public void successWrite() throws Exception {
		//given
		String email = "writecontroller@test.com";
		String uuid = UUID.randomUUID().toString();

		User user = User.builder()
			.email(email)
			.uuid(uuid)
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

		WriteMessageResponseDto writeMessageResponseDto = new WriteMessageResponseDto();

		writeMessageResponseDto.setTo("to~~~");
		writeMessageResponseDto.setMessage("message~~~~");
		writeMessageResponseDto.setMade_by("made by~~~~~");
		writeMessageResponseDto.setColor(2);

		String data2 = objectMapper.writeValueAsString(writeMessageResponseDto);

		//when
		ResultActions result = mockMvc.perform(MockMvcRequestBuilders.post("/main/{uuid}", uuid)
			.with(csrf())
			.contentType(MediaType.APPLICATION_JSON)
			.accept(MediaType.APPLICATION_JSON)
			.content(data2));

		//then
		assertEquals(HttpStatus.SEE_OTHER.value(), result.andReturn().getResponse().getStatus());
	}
}
