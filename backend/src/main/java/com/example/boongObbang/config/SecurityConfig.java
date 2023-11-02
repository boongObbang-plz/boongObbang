package com.example.boongObbang.config;

import com.example.boongObbang.oauth2.CustomOAuth2UserService;
import com.example.boongObbang.oauth2.OAuth2FailureHandler;
import com.example.boongObbang.oauth2.OAuth2SuccessHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration(proxyBeanMethods = false)
@EnableWebSecurity
public class SecurityConfig {

	@Autowired
	private CustomOAuth2UserService customOAuth2UserService;
	@Autowired
	private OAuth2SuccessHandler oAuth2SuccessHandler;

	@Autowired
	private OAuth2FailureHandler oAuth2FailureHandler;

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
		httpSecurity
			.csrf(AbstractHttpConfigurer::disable)
			.authorizeHttpRequests((request) -> request.requestMatchers("/login/**").permitAll()
				.requestMatchers("/main/**").permitAll()
				.requestMatchers("/").permitAll()
				.anyRequest().authenticated());

//		httpSecurity
//			.oauth2Login((login)
//				-> login.redirectionEndpoint((endpoint) -> endpoint.baseUri("/hi"))
//				.userInfoEndpoint((info) -> info.userService(customOAuth2UserService))
//				.successHandler(oAuth2SuccessHandler).permitAll()
//				.failureHandler(oAuth2FailureHandler).permitAll());


		httpSecurity
			.oauth2Login((login)
				-> login.userInfoEndpoint((info) -> info.userService(customOAuth2UserService))
				.successHandler(oAuth2SuccessHandler).permitAll()
				.failureHandler(oAuth2FailureHandler).permitAll());


		httpSecurity.sessionManagement((session) -> session.sessionCreationPolicy(
			SessionCreationPolicy.STATELESS));

		return httpSecurity.build();
	}
}
