package com.example.boongObbang.service;

import com.example.boongObbang.dto.LinkResponseDto;
import com.example.boongObbang.dto.MainPageResponseDto;
import com.example.boongObbang.dto.MessageDto;
import com.example.boongObbang.entity.Message;
import com.example.boongObbang.entity.Setting;
import com.example.boongObbang.entity.User;
import com.example.boongObbang.exception.exceptions.NoExistEmailException;
import com.example.boongObbang.exception.exceptions.NoExistSettingException;
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
}
