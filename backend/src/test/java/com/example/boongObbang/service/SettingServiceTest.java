package com.example.boongObbang.service;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import com.example.boongObbang.entity.User;
import com.example.boongObbang.repository.SettingRepository;
import com.example.boongObbang.repository.UserRepository;
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
		CreateSettingRequestDto createSettingRequestDto = CreateSettingRequestDto.builder()
			.name("주은이네 붕어빵")
			.color(1)
			.light(1).build();

		//then

		assertDoesNotThrow(() -> {
			settingService.createSetting(createSettingRequestDto, email);
		});
	}
}
