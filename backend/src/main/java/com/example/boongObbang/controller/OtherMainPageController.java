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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/main")
public class OtherMainPageController {

	@Autowired
	JwtProvider jwtProvider;

	@Autowired
	MainPageService mainPageService;

	@GetMapping("/{uuid}")
	public ResponseEntity getMainPage(@PathVariable("uuid") String uuid) {
		MainPageResponseDto mainPageResponseDto = mainPageService.getOtherMainPage(uuid);

		return new ResponseEntity(CustomResponse.response(HttpStatus.OK.value(), ResponseMessage.SUCCESS, mainPageResponseDto),
			HttpStatus.OK);
	}
}
