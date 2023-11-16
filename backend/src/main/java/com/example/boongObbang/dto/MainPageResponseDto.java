package com.example.boongObbang.dto;

import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MainPageResponseDto {
	private String name;
	private long d_day;
	private int color;
	private int light;
	private List<MessageDto> messages;
}
