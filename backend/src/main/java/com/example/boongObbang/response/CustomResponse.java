package com.example.boongObbang.response;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import lombok.AllArgsConstructor;
import lombok.Builder;

@AllArgsConstructor
@Builder
@JsonAutoDetect(fieldVisibility = Visibility.ANY)
public class CustomResponse<T> {
	private int status;
	private String message;
	@JsonInclude(Include.NON_NULL)
	private T data;

	public CustomResponse(final int status, final String message) {
		this.status = status;
		this.message = message;
	}

	public static<T> CustomResponse<T> response(final int status, final String message) {
		return response(status, message, null);
	}

	public static<T> CustomResponse<T> response(final int status, final String message, final T data) {
		return CustomResponse.<T>builder()
			.status(status)
			.message(message)
			.data(data).build();
	}
}
