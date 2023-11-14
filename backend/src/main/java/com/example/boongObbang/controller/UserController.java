package com.example.boongObbang.controller;

import com.example.boongObbang.dto.LoginRequestDto;
import com.example.boongObbang.dto.LoginResponseDto;
import com.example.boongObbang.dto.LoginServiceDto;
import com.example.boongObbang.response.CustomResponse;
import com.example.boongObbang.response.ResponseMessage;
import com.example.boongObbang.service.UserService;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login/oauth2/code")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/kakao")
	public ResponseEntity loginKakao(@RequestBody LoginRequestDto loginRequestDto, BindingResult bindingResult) {
		//valid check
		if (bindingResult.hasErrors()) {
			return new ResponseEntity(CustomResponse.response(HttpStatus.BAD_REQUEST.value(),
				Objects.requireNonNull(bindingResult.getFieldError()).getDefaultMessage()),
				HttpStatus.BAD_REQUEST);
		}

		LoginServiceDto loginServiceDto = userService.loginKakao(loginRequestDto);

		LoginResponseDto loginResponseDto = new LoginResponseDto();
		loginResponseDto.setToken(loginServiceDto.getToken());

		//최초 로그인일 걍우
		if (loginServiceDto.isNew())
			return new ResponseEntity(CustomResponse.response(HttpStatus.CREATED.value(), ResponseMessage.SUCCESS,loginResponseDto),
				HttpStatus.CREATED);

		//기존 회원의 로그인일 경우
		return new ResponseEntity(CustomResponse.response(HttpStatus.OK.value(), ResponseMessage.SUCCESS, loginResponseDto),
			HttpStatus.OK);
	}

	@PostMapping("/google")
	public ResponseEntity loginGoogle(@RequestBody LoginRequestDto loginRequestDto, BindingResult bindingResult) {
		//valid check
		if (bindingResult.hasErrors()) {
			return new ResponseEntity(CustomResponse.response(HttpStatus.BAD_REQUEST.value(),
				Objects.requireNonNull(bindingResult.getFieldError()).getDefaultMessage()),
				HttpStatus.BAD_REQUEST);
		}

		LoginServiceDto loginServiceDto = userService.loginGoogle(loginRequestDto);

		LoginResponseDto loginResponseDto = new LoginResponseDto();
		loginResponseDto.setToken(loginServiceDto.getToken());

		//최초 로그인일 걍우
		if (loginServiceDto.isNew())
			return new ResponseEntity(CustomResponse.response(HttpStatus.CREATED.value(), ResponseMessage.SUCCESS,loginResponseDto),
				HttpStatus.CREATED);

		//기존 회원의 로그인일 경우
		return new ResponseEntity(CustomResponse.response(HttpStatus.OK.value(), ResponseMessage.SUCCESS, loginResponseDto),
			HttpStatus.OK);
	}
}