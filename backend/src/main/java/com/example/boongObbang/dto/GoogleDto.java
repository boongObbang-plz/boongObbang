package com.example.boongObbang.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GoogleDto {
	private String access_token;
	private Integer expires_in;
	private String scope;
	private String token_type;
	private String id_token;
}
