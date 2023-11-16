package com.example.boongObbang.controller;

import com.example.boongObbang.dto.MainPageResponseDto;
import com.example.boongObbang.jwt.JwtProvider;
import com.example.boongObbang.response.CustomResponse;
import com.example.boongObbang.response.ResponseMessage;
import com.example.boongObbang.service.MainPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mainpage")
public class MainPageController {

	@Autowired
	JwtProvider jwtProvider;

	@Autowired
	MainPageService mainPageService;

	@GetMapping("")
	public ResponseEntity getMainPage(@RequestHeader("Authorization") String token) {
		String email = jwtProvider.getEmail(token);
		String provider = jwtProvider.getProvider(token);

		MainPageResponseDto mainPageResponseDto = mainPageService.getMainPage(email, provider);

		return new ResponseEntity(CustomResponse.response(HttpStatus.OK.value(), ResponseMessage.SUCCESS, mainPageResponseDto),
			HttpStatus.OK);
	}
}