package com.example.boongObbang.service;

import com.example.boongObbang.dto.CreateSettingRequestDto;
import com.example.boongObbang.dto.PatchSettingRequestDto;
import com.example.boongObbang.entity.Setting;
import com.example.boongObbang.entity.User;
import com.example.boongObbang.exception.exceptions.NoExistEmailException;
import com.example.boongObbang.repository.SettingRepository;
import com.example.boongObbang.repository.UserRepository;
import com.example.boongObbang.response.ResponseMessage;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SettingService {

	@Autowired
	SettingRepository settingRepository;

	@Autowired
	UserRepository userRepository;

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

	}
}
