package com.example.boongObbang.repository;

import java.util.UUID;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
public class UserRepositoryTest {

	@Autowired
	UserRepository userRepository;

	@Test
	@DisplayName("저장 성공 테스트")
	public void save() {
		//given
		User user = User.builder()
			.email("test@test.com")
			.uuid(UUID.randomUUID().toString())
			.social(Social.Google).build();

		//when
		userRepository.save(user);

		//then
		User result = userRepository.findById(user.getUserId()).get();
		assertThat(user).isEqaulTo(result);
	}

	@Test
	@DisplayName("uuid로 찾기 성공 테스트")
	public void findByUuid() {
		//given
		String uuid = UUID.randomUUID().toString();

		User user = User.builder()
			.email("uuid@test.com")
			.uuid(uuid)
			.social(Social.Google).build();

		//when
		userRepository.save(user);

		//then
		User result = userRepository.findByUuid(uuid).get();
		assertThat(user).isEqaulTo(result);
	}
}
