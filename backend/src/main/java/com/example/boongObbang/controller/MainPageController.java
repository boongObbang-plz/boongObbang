package com.example.boongObbang.controller;

import com.example.boongObbang.dto.LinkResponseDto;
import com.example.boongObbang.dto.MainPageResponseDto;
import com.example.boongObbang.jwt.JwtProvider;
import com.example.boongObbang.response.CustomResponse;
import com.example.boongObbang.response.ResponseMessage;
import com.example.boongObbang.service.MainPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

	@GetMapping("/link")
	public ResponseEntity getLink(@RequestHeader("Authorization") String token) {
		String email = jwtProvider.getEmail(token);
		String provider = jwtProvider.getProvider(token);

		LinkResponseDto linkResponseDto = mainPageService.getLink(email, provider);

		return new ResponseEntity(CustomResponse.response(HttpStatus.OK.value(), ResponseMessage.SUCCESS, linkResponseDto),
			HttpStatus.OK);
	}

	@PatchMapping("/message/{idx}")
	public ResponseEntity deleteMessage(@PathVariable("idx") Long idx, @RequestHeader("Authorization") String token) {
		String email = jwtProvider.getEmail(token);
		String provider = jwtProvider.getProvider(token);

		mainPageService.deleteMessage(email, provider, idx);

		return new ResponseEntity(CustomResponse.response(HttpStatus.OK.value(), ResponseMessage.SUCCESS),
			HttpStatus.OK);
	}


	//TODO: 편지 읽기 기능에서 d_day체크 controller에서 하기
}
