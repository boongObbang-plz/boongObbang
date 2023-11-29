package com.example.boongObbang.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GoogleProfileDto {
	private String id;
	private String email;
	private Boolean verified_email;
	private String name;
	private String given_name;
	private String family_name;
	private String picture;
	private String locale;
}
