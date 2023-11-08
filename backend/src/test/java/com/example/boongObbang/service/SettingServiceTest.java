package com.example.boongObbang.service;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import com.example.boongObbang.dto.CreateSettingRequestDto;
import com.example.boongObbang.entity.User;
import com.example.boongObbang.repository.SettingRepository;
import com.example.boongObbang.repository.UserRepository;
import com.example.boongObbang.response.ResponseMessage;
import java.util.UUID;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
public class SettingServiceTest {

	@Autowired
	UserRepository userRepository;

	@Autowired
	SettingRepository settingRepository;

	@Autowired
	SettingService settingService;

	@Test
	@DisplayName("마차 만들기 성공 테스트")
	public void save() {
		//given
		String email = "settingservice@test.com";
		User user = User.builder()
			.email(email)
			.uuid(UUID.randomUUID().toString())
			.provider("google").build();

		userRepository.save(user);

		//when
		CreateSettingRequestDto createSettingRequestDto = new CreateSettingRequestDto();

		createSettingRequestDto.setName("주은이네 붕어빵");
		createSettingRequestDto.setColor(1);
		createSettingRequestDto.setLight(1);

		//then
		assertDoesNotThrow(() -> {
			settingService.createSetting(createSettingRequestDto, email);
		});
	}

	@Test
	@DisplayName("마차 만들기 실패 테스트(이메일 존재x)")
	public void fail_email() {
		//given
		String email = "settingserviceNouser@test.com";

		//when
		CreateSettingRequestDto createSettingRequestDto = new CreateSettingRequestDto();

		createSettingRequestDto.setName("주은이네 붕어빵");
		createSettingRequestDto.setColor(1);
		createSettingRequestDto.setLight(1);

		Throwable throwable = assertThrows(RuntimeException.class, () -> {
			settingService.createSetting(createSettingRequestDto, email);
		});
		//then
		assertEquals(throwable.getMessage(), ResponseMessage.NO_EXIST_EMAIL);
	}
}
