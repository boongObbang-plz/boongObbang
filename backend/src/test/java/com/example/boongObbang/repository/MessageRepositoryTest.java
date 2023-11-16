package com.example.boongObbang.repository;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import com.example.boongObbang.entity.Message;
import com.example.boongObbang.entity.User;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
public class MessageRepositoryTest {

	@Autowired
	UserRepository userRepository;

	@Autowired
	MessageRepository messageRepository;

	@Test
	@DisplayName("저장 성공 테스트")
	public void save() {
		//given
		User user = User.builder()
			.email("message@test.com")
			.uuid(UUID.randomUUID().toString())
			.provider("google").build();

		userRepository.save(user);

		//when
		Message message = Message.builder()
			.recipient("받는사람")
			.message("메시지~~~~~")
			.madeBy("글쓴사람")
			.color(1)
			.ip("ip주소~~~~~~")
			.user(user).build();

		messageRepository.save(message);

		//then
		Optional<Message> result = messageRepository.findById(message.getId());
		assertEquals(result.get(), message);
	}

	@Test
	@DisplayName("유저 아이디로 찾기 성공 테스트")
	public void findByUserId() {
		//given
		User user = User.builder()
			.email("messageuserid@test.com")
			.uuid(UUID.randomUUID().toString())
			.provider("google").build();

		userRepository.save(user);

		//when
		Message message1 = Message.builder()
			.recipient("받는사람")
			.message("메시지~~~~~")
			.madeBy("글쓴사람")
			.color(1)
			.ip("ip주소~~~~~~")
			.user(user).build();

		Message message2 = Message.builder()
			.recipient("받는사람2")
			.message("메시지~~~~~2")
			.madeBy("글쓴사람2")
			.color(2)
			.ip("ip주소~~~~~~2")
			.user(user).build();

		Message message3 = Message.builder()
			.recipient("받는사람3")
			.message("메시지~~~~~3")
			.madeBy("글쓴사람3")
			.color(3)
			.ip("ip주소~~~~~~3")
			.user(user).build();

		messageRepository.save(message1);
		messageRepository.save(message2);
		messageRepository.save(message3);

		//then
		List<Message> result = messageRepository.findByUserId(user.getId());
		assertThat(result.size()).isEqualTo(3);
	}
}
