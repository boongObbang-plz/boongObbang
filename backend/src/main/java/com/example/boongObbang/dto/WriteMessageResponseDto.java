package com.example.boongObbang.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WriteMessageResponseDto {
	private String to;
	private String message;
	private String made_by;
	private int color;
}
