package com.example.boongObbang.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class KakaoDto {
	private String access_token;
	private String refresh_token;
	private String token_type;
	private int expires_in;
	private String scope;
	private int refresh_token_expires_in;
}
