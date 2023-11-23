package com.example.boongObbang.service;

import com.example.boongObbang.dto.LinkResponseDto;
import com.example.boongObbang.dto.MainPageResponseDto;
import com.example.boongObbang.dto.MessageDto;
import com.example.boongObbang.dto.ReadMessageResponseDto;
import com.example.boongObbang.dto.WriteMessageResponseDto;
import com.example.boongObbang.entity.Message;
import com.example.boongObbang.entity.Setting;
import com.example.boongObbang.entity.User;
import com.example.boongObbang.exception.exceptions.DeletedMessageException;
import com.example.boongObbang.exception.exceptions.NoExistEmailException;
import com.example.boongObbang.exception.exceptions.NoExistMessageException;
import com.example.boongObbang.exception.exceptions.NoExistSettingException;
import com.example.boongObbang.exception.exceptions.UrlErrorException;
import com.example.boongObbang.repository.MessageRepository;
import com.example.boongObbang.repository.SettingRepository;
import com.example.boongObbang.repository.UserRepository;
import com.example.boongObbang.response.ResponseMessage;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MainPageService {

	@Autowired
	UserRepository userRepository;

	@Autowired
	SettingRepository settingRepository;

	@Autowired
	MessageRepository messageRepository;

	public MainPageResponseDto getMainPage(String email, String provider) {

		//TODO: 아래 코드와 같이 중복되는 코드는 하나의 함수로 빼기
		Optional<User> user = userRepository.findByEmailAndProvider(email, provider);

		if (user.isEmpty()) {
			throw new NoExistEmailException(ResponseMessage.NO_EXIST_EMAIL);
		}

		Optional<Setting> setting = settingRepository.findByUserId(user.get().getId());

		if (setting.isEmpty()) {
			throw new NoExistSettingException(ResponseMessage.NO_EXIST_SETTING);
		}

		List<Message> messageList = messageRepository.findByUserId(user.get().getId());

		List<MessageDto> messageDtos = new ArrayList<>();

		for (Message message : messageList) {
			if (message.isDeleted())
				continue;

			MessageDto messageDto = new MessageDto();

			messageDto.setIdx(message.getId());
			messageDto.setColor(message.getColor());
			messageDto.setMade_by(message.getMadeBy());

			messageDtos.add(messageDto);
		}

		LocalDate christmas = LocalDate.of(2023, 12, 25);
		LocalDate currentDate = LocalDate.now();

		long d_day = ChronoUnit.DAYS.between(currentDate, christmas);

		MainPageResponseDto mainPageResponseDto = new MainPageResponseDto();

		mainPageResponseDto.setName(setting.get().getName());
		mainPageResponseDto.setLight(setting.get().getLight());
		mainPageResponseDto.setColor(setting.get().getColor());
		mainPageResponseDto.setD_day(d_day);
		mainPageResponseDto.setMessages(messageDtos);

		return mainPageResponseDto;
	}

	public LinkResponseDto getLink(String email, String provider) {
		Optional<User> user = userRepository.findByEmailAndProvider(email, provider);

		if (user.isEmpty()) {
			throw new NoExistEmailException(ResponseMessage.NO_EXIST_EMAIL);
		}

		//TODO: 추후에 url 변경
		String base_url = "http://localhost:8080/main/";

		LinkResponseDto linkResponseDto = new LinkResponseDto();

		linkResponseDto.setLink(base_url + user.get().getUuid());

		return linkResponseDto;
	}

	public void deleteMessage(String email, String provider, long idx) {
		Optional<User> user = userRepository.findByEmailAndProvider(email, provider);

		if (user.isEmpty()) {
			throw new NoExistEmailException(ResponseMessage.NO_EXIST_EMAIL);
		}

		//idx에 해당하는 message가 있는지 검사
		Optional<Message> findByIdxMessage = messageRepository.findById(idx);

		if (findByIdxMessage.isEmpty()) {
			throw new NoExistMessageException(ResponseMessage.NO_EXIST_MESSAGE);
		}

		//idx에 해당하는 message가 유저에게 쓴 편지인지 검사
		List<Message> userMessageList = messageRepository.findByUserId(user.get().getId());

		boolean flag = false;

		for (Message message : userMessageList) {
			if (message.getId() == idx) {
				flag = true;
				break;
			}
		}

		if (!flag) {
			throw new NoExistMessageException(ResponseMessage.NO_EXIST_MESSAGE);
		}

		Message new_message = Message.builder()
			.id(findByIdxMessage.get().getId())
			.user(findByIdxMessage.get().getUser())
			.recipient(findByIdxMessage.get().getRecipient())
			.message(findByIdxMessage.get().getMessage())
			.madeBy(findByIdxMessage.get().getMadeBy())
			.color(findByIdxMessage.get().getColor())
			.ip(findByIdxMessage.get().getIp())
			.deleted(true).build();

		messageRepository.save(new_message);
	}

	public ReadMessageResponseDto readMessage(String email, String provider, long idx) {
		//유저가 존재하는지 검사
		Optional<User> user = userRepository.findByEmailAndProvider(email, provider);

		if (user.isEmpty()) {
			throw new NoExistEmailException(ResponseMessage.NO_EXIST_EMAIL);
		}

		//idx에 해당하는 message가 있는지 검사
		Optional<Message> findByIdMessage = messageRepository.findById(idx);

		if (findByIdMessage.isEmpty()) {
			throw new NoExistMessageException(ResponseMessage.NO_EXIST_MESSAGE);
		}

		//idx에 해당하는 message가 유저에게 쓴 편지인지 검사
		List<Message> userMessageList = messageRepository.findByUserId(user.get().getId());

		boolean flag = false;

		for (Message message : userMessageList) {
			if (message.getId() == idx) {
				flag = true;
				break;
			}
		}

		if (!flag) {
			throw new NoExistMessageException(ResponseMessage.NO_EXIST_MESSAGE);
		}

		if (findByIdMessage.get().isDeleted()) {
			throw new DeletedMessageException(ResponseMessage.DELETED_MESSAGE);
		}

		ReadMessageResponseDto readMessageResponseDto = new ReadMessageResponseDto();

		readMessageResponseDto.setTo(findByIdMessage.get().getRecipient());
		readMessageResponseDto.setMessage(findByIdMessage.get().getMessage());
		readMessageResponseDto.setMade_by(findByIdMessage.get().getMadeBy());

		return readMessageResponseDto;
	}

	public MainPageResponseDto getOtherMainPage(String uuid) {
		Optional<User> user = userRepository.findByUuid(uuid);

		if (user.isEmpty())
			throw new UrlErrorException(ResponseMessage.URL_ERROR);

		//TODO: 나의 메인페이지와 동일한 로직이므로 함수 파기
		Optional<Setting> setting = settingRepository.findByUserId(user.get().getId());

		if (setting.isEmpty()) {
			throw new NoExistSettingException(ResponseMessage.NO_EXIST_SETTING);
		}

		List<Message> messageList = messageRepository.findByUserId(user.get().getId());

		List<MessageDto> messageDtos = new ArrayList<>();

		for (Message message : messageList) {
			if (message.isDeleted())
				continue;

			MessageDto messageDto = new MessageDto();

			messageDto.setIdx(message.getId());
			messageDto.setColor(message.getColor());
			messageDto.setMade_by(message.getMadeBy());

			messageDtos.add(messageDto);
		}

		LocalDate christmas = LocalDate.of(2023, 12, 25);
		LocalDate currentDate = LocalDate.now();

		long d_day = ChronoUnit.DAYS.between(currentDate, christmas);

		MainPageResponseDto mainPageResponseDto = new MainPageResponseDto();

		mainPageResponseDto.setName(setting.get().getName());
		mainPageResponseDto.setLight(setting.get().getLight());
		mainPageResponseDto.setColor(setting.get().getColor());
		mainPageResponseDto.setD_day(d_day);
		mainPageResponseDto.setMessages(messageDtos);

		return mainPageResponseDto;
	}

	public void writeMessage(WriteMessageResponseDto writeMessageResponseDto, String uuid, String ip) {
		Optional<User> user = userRepository.findByUuid(uuid);

		if (user.isEmpty())
			throw new UrlErrorException(ResponseMessage.URL_ERROR);

		Message message = Message.builder()
			.user(user.get())
			.recipient(writeMessageResponseDto.getTo())
			.message(writeMessageResponseDto.getMessage())
			.madeBy(writeMessageResponseDto.getMade_by())
			.color(writeMessageResponseDto.getColor())
			.ip(ip).build();

		messageRepository.save(message);
	}
}
