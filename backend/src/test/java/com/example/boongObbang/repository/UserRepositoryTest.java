package com.example.boongObbang.repository;

import com.example.boongObbang.entity.User;
import java.util.UUID;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.transaction.annotation.Transactional;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
public class UserRepositoryTest {

	@MockBean
	UserRepository userRepository;

	@Test
	@DisplayName("저장 성공 테스트")
	public void save() {
		//given
		User user = User.builder()
			.email("test@test.com")
			.uuid(UUID.randomUUID().toString())
			.provider("google").build();

		//when
		userRepository.save(user);

		//then
		User result = userRepository.findById(user.getId()).get();
		assertThat(user).isEqualTo(result);
	}

	@Test
	@DisplayName("uuid로 찾기 성공 테스트")
	public void findByUuid() {
		//given
		String uuid = UUID.randomUUID().toString();

		User user = User.builder()
			.email("uuid@test.com")
			.uuid(uuid)
			.provider("google").build();

		//when
		userRepository.save(user);

		//then
		User result = userRepository.findByUuid(uuid).get();
		assertThat(user).isEqualTo(result);
	}

	@Test
	@DisplayName("이메일로 찾기 성공 테스트")
	public void findByEmail() {
		//given
		String email = "email@test.com";

		User user = User.builder()
			.email(email)
			.uuid(UUID.randomUUID().toString())
			.provider("google").build();

		//when
		userRepository.save(user);

		//then
		User result = userRepository.findByEmail(email).get();
		assertThat(user).isEqualTo(result);
	}
	@Test
	@DisplayName("이메일과 social로 찾기 성공 테스트")
	public void findByEmailAndSocial() {
		//given
		String email = "email@test.com";

		User user = User.builder()
			.email(email)
			.uuid(UUID.randomUUID().toString())
			.provider("google").build();

		User user2 = User.builder()
			.email(email)
			.uuid(UUID.randomUUID().toString())
			.provider("kakao").build();

		//when
		userRepository.save(user);
		userRepository.save(user2);

		//then
		User result = userRepository.findByEmailAndProvider(email, "google").get();
		assertThat(user).isEqualTo(result);
	}
}
