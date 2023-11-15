package com.example.boongObbang.service;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import com.example.boongObbang.dto.CreateSettingRequestDto;
import com.example.boongObbang.dto.PatchSettingRequestDto;
import com.example.boongObbang.entity.Setting;
import com.example.boongObbang.entity.User;
import com.example.boongObbang.repository.SettingRepository;
import com.example.boongObbang.repository.UserRepository;
import com.example.boongObbang.response.ResponseMessage;
import java.util.Optional;
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
		String provider = "google";

		User user = User.builder()
			.email(email)
			.uuid(UUID.randomUUID().toString())
			.provider(provider).build();

		userRepository.save(user);

		//when
		CreateSettingRequestDto createSettingRequestDto = new CreateSettingRequestDto();

		createSettingRequestDto.setName("주은이네 붕어빵");
		createSettingRequestDto.setColor(1);
		createSettingRequestDto.setLight(1);

		//then
		assertDoesNotThrow(() -> {
			settingService.createSetting(createSettingRequestDto, email, provider);
		});
	}

	@Test
	@DisplayName("마차 만들기 실패 테스트(이메일 존재x)")
	public void fail_email() {
		//given
		String email = "settingserviceNouser@test.com";
		String provider = "google";

		//when
		CreateSettingRequestDto createSettingRequestDto = new CreateSettingRequestDto();

		createSettingRequestDto.setName("주은이네 붕어빵");
		createSettingRequestDto.setColor(1);
		createSettingRequestDto.setLight(1);

		Throwable throwable = assertThrows(RuntimeException.class, () -> {
			settingService.createSetting(createSettingRequestDto, email, provider);
		});
		//then
		assertEquals(throwable.getMessage(), ResponseMessage.NO_EXIST_EMAIL);
	}

	@Test
	@DisplayName("마차 수정하기 성공 테스트(name, color, light 각각 수정)")
	public void patchSuccess() {
		//given
		String email = "settingservice2@test.com";
		String provider = "google";

		User user = User.builder()
			.email(email)
			.uuid(UUID.randomUUID().toString())
			.provider(provider).build();

		userRepository.save(user);

		//when
		CreateSettingRequestDto createSettingRequestDto = new CreateSettingRequestDto();

		createSettingRequestDto.setName("주은이네 붕어빵");
		createSettingRequestDto.setColor(1);
		createSettingRequestDto.setLight(1);

		settingService.createSetting(createSettingRequestDto, email, provider);

		//then
		String name = "테스트 붕어빵";
		int color = 0;
		int light = 2;

		PatchSettingRequestDto patchSettingRequestDto1 = new PatchSettingRequestDto();
		patchSettingRequestDto1.setName(name);

		PatchSettingRequestDto patchSettingRequestDto2 = new PatchSettingRequestDto();
		patchSettingRequestDto2.setColor(color);

		PatchSettingRequestDto patchSettingRequestDto3 = new PatchSettingRequestDto();
		patchSettingRequestDto3.setLight(light);


		assertDoesNotThrow(() -> {
			settingService.patchSetting(patchSettingRequestDto1, email, provider);
		});

		assertDoesNotThrow(() -> {
			settingService.patchSetting(patchSettingRequestDto2, email, provider);
		});

		assertDoesNotThrow(() -> {
			settingService.patchSetting(patchSettingRequestDto3, email, provider);
		});

		Optional<User> user1 = userRepository.findByEmailAndProvider(email, provider);

		Optional<Setting> result = settingRepository.findByUserId(user1.get().getId());

		assertEquals(result.get().getName(), name);
		assertEquals(result.get().getColor(), color);
		assertEquals(result.get().getLight(), light);
	}
}
