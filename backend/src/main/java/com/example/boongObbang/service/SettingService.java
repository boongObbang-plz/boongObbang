package com.example.boongObbang.service;

import com.example.boongObbang.dto.CreateSettingRequestDto;
import com.example.boongObbang.dto.DeleteResponseDto;
import com.example.boongObbang.dto.PatchSettingRequestDto;
import com.example.boongObbang.entity.Message;
import com.example.boongObbang.entity.Setting;
import com.example.boongObbang.entity.Token;
import com.example.boongObbang.entity.User;
import com.example.boongObbang.exception.exceptions.InvalidAccessTokenException;
import com.example.boongObbang.exception.exceptions.NoExistEmailException;
import com.example.boongObbang.exception.exceptions.NoExistSettingException;
import com.example.boongObbang.repository.MessageRepository;
import com.example.boongObbang.repository.SettingRepository;
import com.example.boongObbang.repository.TokenRedisRepository;
import com.example.boongObbang.repository.UserRepository;
import com.example.boongObbang.response.ResponseMessage;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SettingService {

	@Autowired
	SettingRepository settingRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	private TokenRedisRepository redisRepository;

	@Autowired
	private MessageRepository messageRepository;

	public void createSetting(CreateSettingRequestDto createSettingRequestDto, String email, String provider) {
		Optional<User> user = userRepository.findByEmailAndProvider(email, provider);

		if (user.isEmpty()) {
			throw new NoExistEmailException(ResponseMessage.NO_EXIST_EMAIL);
		}

		Setting setting = Setting.builder()
			.user(user.get())
			.name(createSettingRequestDto.getName())
			.color(createSettingRequestDto.getColor())
			.light(createSettingRequestDto.getLight()).build();

		settingRepository.save(setting);
	}

	public void patchSetting(PatchSettingRequestDto patchSettingRequestDto, String email, String provider) {
		Optional<User> user = userRepository.findByEmailAndProvider(email, provider);

		if (user.isEmpty()) {
			throw new NoExistEmailException(ResponseMessage.NO_EXIST_EMAIL);
		}

		Optional<Setting> setting = settingRepository.findByUserId(user.get().getId());

		if (setting.isEmpty()) {
			throw new NoExistSettingException(ResponseMessage.NO_EXIST_SETTING);
		}

		String name;
		int color;
		int light;

		if (patchSettingRequestDto.getName() != null)
			name = patchSettingRequestDto.getName();
		else
			name = setting.get().getName();

		if (patchSettingRequestDto.getColor() != null)
			color = patchSettingRequestDto.getColor();
		else
			color = setting.get().getColor();

		if (patchSettingRequestDto.getLight() != null)
			light = patchSettingRequestDto.getLight();
		else
			light = setting.get().getLight();


		Setting new_setting = Setting.builder()
			.id(setting.get().getId())
			.user(user.get())
			.name(name)
			.color(color)
			.light(light).build();

		settingRepository.save(new_setting);
	}

	public DeleteResponseDto deleteSetting(String email, String provider) {
		Optional<User> user = userRepository.findByEmailAndProvider(email, provider);

		if (user.isEmpty()) {
			throw new NoExistEmailException(ResponseMessage.NO_EXIST_EMAIL);
		}

		Optional<Setting> setting = settingRepository.findByUserId(user.get().getId());

		setting.ifPresent(value -> settingRepository.delete(value));

		List<Message> messageList = messageRepository.findByUserId(user.get().getId());

		messageRepository.deleteAll(messageList);

		userRepository.delete(user.get());

		DeleteResponseDto deleteResponseDto = new DeleteResponseDto();

		deleteResponseDto.setProvider(provider);
		deleteResponseDto.setId(user.get().getProvider_id().toString());

		return deleteResponseDto;
	}

	public void logout(String token) {

		Optional<Token> redisToken = redisRepository.findByJwt(token);

		if (redisToken.isPresent()) {
			redisRepository.delete(redisToken.get());
		}
		else {
			throw new InvalidAccessTokenException(ResponseMessage.INVALID_ACCESS_TOKEN);
		}
	}
}
