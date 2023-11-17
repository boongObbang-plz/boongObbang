package com.example.boongObbang.service;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import com.example.boongObbang.dto.CreateSettingRequestDto;
import com.example.boongObbang.dto.MainPageResponseDto;
import com.example.boongObbang.dto.ReadMessageResponseDto;
import com.example.boongObbang.entity.Message;
import com.example.boongObbang.entity.User;
import com.example.boongObbang.repository.MessageRepository;
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
public class MainPageServiceTest {

	@Autowired
	MainPageService mainPageService;

	@Autowired
	SettingService settingService;

	@Autowired
	UserRepository userRepository;

	@Autowired
	MessageRepository messageRepository;

	@Test
	@DisplayName("나의 메인페이지 조회 성공 테스트")
	public void getMyMainPage() {
		//given
		String email = "messageservice@test.com";
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
		assertDoesNotThrow(() -> {
			mainPageService.getMainPage(email, provider);
		});
	}

	@Test
	@DisplayName("나의 메인페이지 조회 실패 테스트(존재하지 않는 유저)")
	public void getMyMainPageFail() {
		//given
		String email = "messageservice@test.com";
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

		var ref = new Object() {
			MainPageResponseDto mainPageResponseDto;
		};

		//then
		Throwable throwable = assertThrows(RuntimeException.class, () -> {
			mainPageService.getMainPage(email, "kakao");
		});

		assertEquals(throwable.getMessage(), ResponseMessage.NO_EXIST_EMAIL);
	}

	@Test
	@DisplayName("나의 메인페이지 조회 실패 테스트(존재하지 않는 셋팅)")
	public void getMyMainPageFailSetting() {
		//given
		String email = "messageservice@test.com";
		String provider = "google";

		User user = User.builder()
			.email(email)
			.uuid(UUID.randomUUID().toString())
			.provider(provider).build();

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

		var ref = new Object() {
			MainPageResponseDto mainPageResponseDto;
		};

		//then
		Throwable throwable = assertThrows(RuntimeException.class, () -> {
			mainPageService.getMainPage(email, provider);
		});

		assertEquals(throwable.getMessage(), ResponseMessage.NO_EXIST_SETTING);
	}

	@Test
	@DisplayName("링크 조회 성공 테스트")
	public void getLink() {
		//given
		String email = "messageserviclinke@test.com";
		String provider = "google";

		User user = User.builder()
			.email(email)
			.uuid(UUID.randomUUID().toString())
			.provider(provider).build();

		userRepository.save(user);

		//when
		//then
		assertDoesNotThrow(() -> {
			mainPageService.getLink(email, provider);
		});
	}

	@Test
	@DisplayName("링크 조회 실패 테스트(존재하지 않는 유저)")
	public void getLinkFail() {
		//given
		String email = "messageserviclinkfail@test.com";
		String provider = "google";

		User user = User.builder()
			.email(email)
			.uuid(UUID.randomUUID().toString())
			.provider(provider).build();

		userRepository.save(user);

		//when
		Throwable throwable = assertThrows(RuntimeException.class, () -> {
			mainPageService.getLink(email, "kakao");
		});

		//then
		assertEquals(throwable.getMessage(), ResponseMessage.NO_EXIST_EMAIL);
	}

	@Test
	@DisplayName("편지 삭제 성공 테스트")
	public void deleteMessage() {
		//given
		String email = "deleteMessage@test.com";
		String provider = "google";

		User user = User.builder()
			.email(email)
			.uuid(UUID.randomUUID().toString())
			.provider(provider).build();

		userRepository.save(user);

		CreateSettingRequestDto createSettingRequestDto = new CreateSettingRequestDto();

		createSettingRequestDto.setName("주은이네 붕어빵");
		createSettingRequestDto.setColor(1);
		createSettingRequestDto.setLight(1);

		settingService.createSetting(createSettingRequestDto, email, provider);

		Message message = Message.builder()
			.recipient("받는사람")
			.message("메시지~~~~~")
			.madeBy("글쓴사람")
			.color(1)
			.ip("ip주소~~~~~~")
			.user(user).build();


		messageRepository.save(message);

		//when
		assertDoesNotThrow(() -> {
			mainPageService.deleteMessage(email, provider, 1);
		});

		//then
		Optional<Message> result = messageRepository.findById(1L);

		assertEquals(result.get().isDeleted(), true);
	}


//TODO: 편지 삭제하기 구현 이후 수정하여 다시 구현 예정

//	@Test
//	@DisplayName("편지 읽기 성공 테스트")
//	public void successReadMessage() {
//		//given
//		String email = "readservice@test.com";
//		String provider = "google";
//
//		User user = User.builder()
//			.email(email)
//			.uuid(UUID.randomUUID().toString())
//			.provider(provider).build();
//
//		userRepository.save(user);
//
//		CreateSettingRequestDto createSettingRequestDto = new CreateSettingRequestDto();
//
//		createSettingRequestDto.setName("주은이네 붕어빵");
//		createSettingRequestDto.setColor(1);
//		createSettingRequestDto.setLight(1);
//
//		settingService.createSetting(createSettingRequestDto, email, provider);
//
//		Message message1 = Message.builder()
//			.recipient("받는사람")
//			.message("메시지~~~~~")
//			.madeBy("글쓴사람")
//			.color(1)
//			.ip("ip주소~~~~~~")
//			.user(user).build();
//
//		Message message2 = Message.builder()
//			.recipient("받는사람2")
//			.message("메시지~~~~~2")
//			.madeBy("글쓴사람2")
//			.color(2)
//			.ip("ip주소~~~~~~2")
//			.user(user).build();
//
//		Message message3 = Message.builder()
//			.recipient("받는사람3")
//			.message("메시지~~~~~3")
//			.madeBy("글쓴사람3")
//			.color(3)
//			.ip("ip주소~~~~~~3")
//			.user(user).build();
//
//		messageRepository.save(message1);
//		messageRepository.save(message2);
//		messageRepository.save(message3);
//
//		//when
//		var ref = new Object() {
//			ReadMessageResponseDto readMessageResponseDto;
//		};
//
//		assertDoesNotThrow(() -> {
//			ref.readMessageResponseDto = mainPageService.readMessage(email, provider, 1);
//		});
//
//		//then
//		assertEquals(ref.readMessageResponseDto.getTo(), message1.getRecipient());
//	}
//
//	@Test
//	@DisplayName("편지 읽기 성공 테스트(이전 메세지가 지워져도 불러오는 경우)")
//	public void successReadMessageDelete() {
//		//given
//		String email = "readservicedelete@test.com";
//		String provider = "google";
//
//		User user = User.builder()
//			.email(email)
//			.uuid(UUID.randomUUID().toString())
//			.provider(provider).build();
//
//		userRepository.save(user);
//
//		CreateSettingRequestDto createSettingRequestDto = new CreateSettingRequestDto();
//
//		createSettingRequestDto.setName("주은이네 붕어빵");
//		createSettingRequestDto.setColor(1);
//		createSettingRequestDto.setLight(1);
//
//		settingService.createSetting(createSettingRequestDto, email, provider);
//
//		Message message1 = Message.builder()
//			.recipient("받는사람")
//			.message("메시지~~~~~")
//			.madeBy("글쓴사람")
//			.color(1)
//			.ip("ip주소~~~~~~")
//			.user(user).build();
//
//		Message message2 = Message.builder()
//			.recipient("받는사람2")
//			.message("메시지~~~~~2")
//			.madeBy("글쓴사람2")
//			.color(2)
//			.ip("ip주소~~~~~~2")
//			.user(user).build();
//
//		Message message3 = Message.builder()
//			.recipient("받는사람3")
//			.message("메시지~~~~~3")
//			.madeBy("글쓴사람3")
//			.color(3)
//			.ip("ip주소~~~~~~3")
//			.user(user).build();
//
//		messageRepository.save(message1);
//		messageRepository.save(message2);
//		messageRepository.save(message3);
//
//		messageRepository.delete(message2);
//
//		//when
//		var ref = new Object() {
//			ReadMessageResponseDto readMessageResponseDto;
//		};
//
//		assertDoesNotThrow(() -> {
//			mainPageService.readMessage(email, provider, 3);
//		});
//
//		//then
//		assertEquals(ref.readMessageResponseDto.getTo(), message3.getRecipient());
//	}
//
//	@Test
//	@DisplayName("편지 읽기 실패 테스트(존재하지 않는 유저인 경우)")
//	public void failReadMessageUser() {
//		//given
//		String email = "readserviceuser@test.com";
//		String provider = "google";
//
//		User user = User.builder()
//			.email(email)
//			.uuid(UUID.randomUUID().toString())
//			.provider(provider).build();
//
//		userRepository.save(user);
//
//		CreateSettingRequestDto createSettingRequestDto = new CreateSettingRequestDto();
//
//		createSettingRequestDto.setName("주은이네 붕어빵");
//		createSettingRequestDto.setColor(1);
//		createSettingRequestDto.setLight(1);
//
//		settingService.createSetting(createSettingRequestDto, email, provider);
//
//		Message message1 = Message.builder()
//			.recipient("받는사람")
//			.message("메시지~~~~~")
//			.madeBy("글쓴사람")
//			.color(1)
//			.ip("ip주소~~~~~~")
//			.user(user).build();
//
//		messageRepository.save(message1);
//
//		//when
//		Throwable throwable = assertThrows(RuntimeException.class, () -> {
//			mainPageService.readMessage(email, provider, 1);
//		});
//
//		//then
//		assertEquals(throwable.getMessage(), ResponseMessage.NO_EXIST_EMAIL);
//	}
//
//	@Test
//	@DisplayName("편지 읽기 실패 테스트(존재하지 않는 idx인 경우)")
//	public void failReadMessageIdx() {
//		//given
//		String email = "readserviceidx@test.com";
//		String provider = "google";
//
//		User user = User.builder()
//			.email(email)
//			.uuid(UUID.randomUUID().toString())
//			.provider(provider).build();
//
//		userRepository.save(user);
//
//		CreateSettingRequestDto createSettingRequestDto = new CreateSettingRequestDto();
//
//		createSettingRequestDto.setName("주은이네 붕어빵");
//		createSettingRequestDto.setColor(1);
//		createSettingRequestDto.setLight(1);
//
//		settingService.createSetting(createSettingRequestDto, email, provider);
//
//		//when
//		Throwable throwable = assertThrows(RuntimeException.class, () -> {
//			mainPageService.readMessage(email, provider, 25);
//		});
//
//		//then
//		assertEquals(throwable.getMessage(), ResponseMessage.NO_EXIST_MESSAGE);
//	}
//
//	@Test
//	@DisplayName("편지 읽기 실패 테스트(읽고자하는 편지의 주인이 다른 경우)")
//	public void failReadMessageNotUser() {
//		//given
//		String email = "readservicenotuser@test.com";
//		String provider = "google";
//
//		User user = User.builder()
//			.email(email)
//			.uuid(UUID.randomUUID().toString())
//			.provider(provider).build();
//
//		userRepository.save(user);
//
//		String user2_email = "user2@test.com";
//
//		User user2 = User.builder()
//			.email(user2_email)
//			.uuid(UUID.randomUUID().toString())
//			.provider(provider).build();
//
//		userRepository.save(user2);
//
//		CreateSettingRequestDto createSettingRequestDto = new CreateSettingRequestDto();
//
//		createSettingRequestDto.setName("주은이네 붕어빵");
//		createSettingRequestDto.setColor(1);
//		createSettingRequestDto.setLight(1);
//
//		settingService.createSetting(createSettingRequestDto, email, provider);
//
//		Message message = Message.builder()
//			.recipient("받는사람")
//			.message("메시지~~~~~")
//			.madeBy("글쓴사람")
//			.color(1)
//			.ip("ip주소~~~~~~")
//			.user(user).build();
//
//		messageRepository.save(message);
//
//		//when
//		Throwable throwable = assertThrows(RuntimeException.class, () -> {
//			mainPageService.readMessage(user2_email, provider, 1);
//		});
//
//		//then
//		assertEquals(throwable.getMessage(), ResponseMessage.NO_EXIST_MESSAGE);
//	}
//
//	@Test
//	@DisplayName("편지 읽기 실패 테스트(삭제된 편지인 경우)")
//	public void failReadMessageDelete() {
//		//given
//		String email = "readservicedeleter@test.com";
//		String provider = "google";
//
//		User user = User.builder()
//			.email(email)
//			.uuid(UUID.randomUUID().toString())
//			.provider(provider).build();
//
//		userRepository.save(user);
//
//		CreateSettingRequestDto createSettingRequestDto = new CreateSettingRequestDto();
//
//		createSettingRequestDto.setName("주은이네 붕어빵");
//		createSettingRequestDto.setColor(1);
//		createSettingRequestDto.setLight(1);
//
//		settingService.createSetting(createSettingRequestDto, email, provider);
//
//		Message message = Message.builder()
//			.recipient("받는사람")
//			.message("메시지~~~~~")
//			.madeBy("글쓴사람")
//			.color(1)
//			.ip("ip주소~~~~~~")
//			.user(user).build();
//
//		messageRepository.save(message);
//
//		Message message2 = Message.builder()
//			.recipient("받는사람2")
//			.message("메시지~~~~~2")
//			.madeBy("글쓴사람2")
//			.color(1)
//			.ip("ip주소~~~~~~2")
//			.user(user).build();
//
//		messageRepository.save(message2);
//
//		Message message3 = Message.builder()
//			.recipient("받는사람3")
//			.message("메시지~~~~~3")
//			.madeBy("글쓴사람3")
//			.color(1)
//			.ip("ip주소~~~~~~3")
//			.user(user).build();
//
//		messageRepository.save(message3);
//
//		messageRepository.delete(message2);
//
//		//when
//		Throwable throwable = assertThrows(RuntimeException.class, () -> {
//			mainPageService.readMessage(email, provider, 2);
//		});
//
//		//then
//		assertEquals(throwable.getMessage(), ResponseMessage.DELETED_MESSAGE);
//	}
}
