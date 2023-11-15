package com.example.boongObbang.exception;

import com.example.boongObbang.exception.exceptions.DeletedMessageException;
import com.example.boongObbang.exception.exceptions.ExpireAccessTokenException;
import com.example.boongObbang.exception.exceptions.InvalidAccessTokenException;
import com.example.boongObbang.exception.exceptions.NoExistEmailException;
import com.example.boongObbang.exception.exceptions.NoExistMessageException;
import com.example.boongObbang.exception.exceptions.NoExistSettingException;
import com.example.boongObbang.exception.exceptions.NoExistValueException;
import com.example.boongObbang.response.CustomResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CustomExceptionHandler {

	@ExceptionHandler
	public ResponseEntity DeletedMessageExceptionHandler(DeletedMessageException e) {
		return new ResponseEntity(
			CustomResponse.response(HttpStatus.BAD_REQUEST.value(), e.getMessage()),
			HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler
	public ResponseEntity ExpiredAccessTokenExceptionHandler(ExpireAccessTokenException e) {
		return new ResponseEntity(
			CustomResponse.response(HttpStatus.UNAUTHORIZED.value(), e.getMessage()),
			HttpStatus.UNAUTHORIZED);
	}

	@ExceptionHandler
	public ResponseEntity InvalidAccessTokenExceptionHandler(InvalidAccessTokenException e) {
		return new ResponseEntity(
			CustomResponse.response(HttpStatus.UNAUTHORIZED.value(), e.getMessage()),
			HttpStatus.UNAUTHORIZED);
	}

	@ExceptionHandler
	public ResponseEntity NoExistMessageExceptionHandler(NoExistMessageException e) {
		return new ResponseEntity(
			CustomResponse.response(HttpStatus.BAD_REQUEST.value(), e.getMessage()),
			HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler
	public ResponseEntity NoExistValueExceptionHandler(NoExistValueException e) {
		return new ResponseEntity(
			CustomResponse.response(HttpStatus.BAD_REQUEST.value(), e.getMessage()),
			HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler
	public ResponseEntity NoExistEmailExceptionHandler(NoExistEmailException e) {
		return new ResponseEntity(
			CustomResponse.response(HttpStatus.BAD_REQUEST.value(), e.getMessage()),
			HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler
	public ResponseEntity NoExistSettingExceptionHandler(NoExistSettingException e) {
		return new ResponseEntity(
			CustomResponse.response(HttpStatus.BAD_REQUEST.value(), e.getMessage()),
			HttpStatus.BAD_REQUEST);
	}
}
