package com.example.boongObbang.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class KakaoProfileDto {

	private Long id;
	private String connected_at;
	private Properties properties;
	public KakaoAccount kakao_account;

	@Getter
	@Setter
	public class Properties {
		private String nickname;
		private String profile_image;
		private String thumbnail_image;
	}

	@Getter
	@Setter
	public class KakaoAccount {
		private Boolean profile_nickname_needs_agreement;
		private Boolean profile_image_needs_agreement;
		public Profile profile;
		private Boolean has_email;
		private Boolean email_needs_agreement;
		private Boolean is_email_valid;
		private Boolean is_email_verified;
		private String email;

		@Getter
		@Setter
		public class Profile {
			private String nickname;
			private String thumbnail_image_url;
			private String profile_image_url;
			private Boolean is_default_image;
			private Boolean is_default_nickname;
		}
	}
}
