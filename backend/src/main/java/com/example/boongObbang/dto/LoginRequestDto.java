package com.example.boongObbang.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;

@Getter
public class LoginRequestDto {
	@NotBlank
	private String code;
}
