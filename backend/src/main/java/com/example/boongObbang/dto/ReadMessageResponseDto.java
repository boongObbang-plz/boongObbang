package com.example.boongObbang.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReadMessageResponseDto {
	private String to;
	private String message;
	private String made_by;
}
