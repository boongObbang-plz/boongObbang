package com.example.boongObbang.repository;

import static org.assertj.core.api.Assertions.assertThat;

import com.example.boongObbang.entity.User;
import java.util.UUID;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
public class SettingRepositoryTest {

	@Autowired
	UserRepository userRepository;

	@Autowired
	SettingRepository settingRepository;

	@Test
	@DisplayName("저장 성공 테스트")
	public void save() {
		//given
		User user = User.builder()
			.email("setting@test.com")
			.uuid(UUID.randomUUID().toString())
			.provider("google").build();

		userRepository.save(user);

		//when
		Setting setting = Setting.builder()
			.user(user)
			.name("주은이네 붕어빵")
			.color(0)
			.light(1).build();

		settingRepository.save(setting);

		//then
		Setting result = settingRepository.findById(setting.getId()).get();
		assertThat(result).isEqualTo(setting);
	}

	@Test
	@DisplayName("유저 id로 값 찾기 테스트")
	public void save() {
		//given
		User user = User.builder()
			.email("setting2@test.com")
			.uuid(UUID.randomUUID().toString())
			.provider("google").build();

		userRepository.save(user);

		//when
		Setting setting = Setting.builder()
			.user(user)
			.name("주은이네 붕어빵")
			.color(0)
			.light(1).build();

		settingRepository.save(setting);

		//then
		Setting result = settingRepository.findByUserId(user.getId()).get();
		assertThat(result).isEqualTo(setting);
	}
}
