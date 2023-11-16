package com.example.boongObbang.controller;

import com.example.boongObbang.dto.CreateSettingRequestDto;
import com.example.boongObbang.dto.PatchSettingRequestDto;
import com.example.boongObbang.jwt.JwtProvider;
import com.example.boongObbang.response.CustomResponse;
import com.example.boongObbang.response.ResponseMessage;
import com.example.boongObbang.service.SettingService;
import jakarta.validation.Valid;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/settings")
public class SettingController {

	@Autowired
	SettingService settingService;

	@Autowired
	JwtProvider jwtProvider;

	@PostMapping("")
	public ResponseEntity create(@RequestBody @Valid CreateSettingRequestDto createSettingRequestDto,
		BindingResult bindingResult, @RequestHeader("Authorization") String token) {

		//valid check
		if (bindingResult.hasErrors()) {
			return new ResponseEntity(CustomResponse.response(HttpStatus.BAD_REQUEST.value(),
				Objects.requireNonNull(bindingResult.getFieldError()).getDefaultMessage()),
				HttpStatus.BAD_REQUEST);
		}

		String email = jwtProvider.getEmail(token);
		String provider = jwtProvider.getProvider(token);

		settingService.createSetting(createSettingRequestDto, email, provider);

		return new ResponseEntity(CustomResponse.response(HttpStatus.CREATED.value(), ResponseMessage.SUCCESS),
			HttpStatus.CREATED);
	}

	@PatchMapping("")
	public ResponseEntity patch(@RequestBody PatchSettingRequestDto patchSettingRequestDto, @RequestHeader("Authorization") String token) {
		String email = jwtProvider.getEmail(token);
		String provider = jwtProvider.getProvider(token);

		settingService.patchSetting(patchSettingRequestDto, email, provider);

		return new ResponseEntity(CustomResponse.response(HttpStatus.OK.value(), ResponseMessage.SUCCESS),
			HttpStatus.OK);
	}

	@DeleteMapping("")
	public ResponseEntity delete(@RequestHeader("Authorization") String token) {
		String email = jwtProvider.getEmail(token);
		String provider = jwtProvider.getProvider(token);

		settingService.deleteSetting(email, provider);

		return new ResponseEntity(CustomResponse.response(HttpStatus.OK.value(), ResponseMessage.SUCCESS),
			HttpStatus.OK);
	}

	@PostMapping("/logout")
	public ResponseEntity logout(@RequestHeader("Authorization") String token) {
		settingService.logout(token);

		return new ResponseEntity(CustomResponse.response(HttpStatus.OK.value(), ResponseMessage.SUCCESS),
			HttpStatus.OK);
	}
}
