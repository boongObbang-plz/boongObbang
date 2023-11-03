package com.example.boongObbang.oauth2;

import java.util.HashMap;
import java.util.Map;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;

@Builder(access = AccessLevel.PRIVATE)
@Getter
public class OAuth2Attribute {
	private String attributeKey;
	private String email;
	private String provider;
	private Map<String, Object> attributes;

	public static OAuth2Attribute of(String provider, String attributeKey, Map<String, Object> attributes) {
		switch(provider) {
			case "google":
				return ofGoogle(provider, attributeKey, attributes);
			case "kakao":
				return ofKakao(provider, "email", attributes);
			default:
				throw new RuntimeException();
		}
	}

	private static OAuth2Attribute ofGoogle(String provider, String attributeKey, Map<String, Object>attributes) {
		return OAuth2Attribute.builder()
			.email(attributes.get("email").toString())
			.provider(provider)
			.attributes(attributes)
			.attributeKey(attributeKey).build();
	}

	private static OAuth2Attribute ofKakao(String provider, String attributeKey, Map<String, Object>attributes) {
		Map<String, Object> kakaoAccount = (Map<String, Object>) attributes.get("kakao_account");

		return OAuth2Attribute.builder()
			.email(kakaoAccount.get("email").toString())
			.provider(provider)
			.attributes(kakaoAccount)
			.attributeKey(attributeKey).build();
	}

	public Map<String, Object> convertToMap() {
		Map<String, Object> map = new HashMap<>();
		map.put("id", attributeKey);
		map.put("key", attributeKey);
		map.put("email", email);
		map.put("provider", provider);

		return map;
	}
}
