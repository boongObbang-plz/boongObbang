package com.example.boongObbang.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.TimeToLive;
import org.springframework.data.redis.core.index.Indexed;

@RedisHash("")
@Getter
@Builder
@AllArgsConstructor
public class Token {

	@Id
	private String email;

	@Indexed
	private String jwt;

	@TimeToLive
	private long ttl = 3600;
}
