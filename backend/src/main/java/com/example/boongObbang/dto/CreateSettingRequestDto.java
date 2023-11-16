package com.example.boongObbang.dto;

import com.example.boongObbang.response.ResponseMessage;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateSettingRequestDto {
	@NotBlank(message = ResponseMessage.NO_EXIST_VALUE)
	private String name;

	@NotNull(message = ResponseMessage.NO_EXIST_VALUE)
	private int color;

	@NotNull(message = ResponseMessage.NO_EXIST_VALUE)
	private int light;
}
