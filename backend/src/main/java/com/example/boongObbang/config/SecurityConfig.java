package com.example.boongObbang.config;

import com.example.boongObbang.jwt.JwtAuthorizationFilter;
import com.example.boongObbang.jwt.JwtProvider;
import com.example.boongObbang.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@AllArgsConstructor
@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private JwtProvider provider;

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {

		JwtAuthorizationFilter jwtAuthorizationFilter;
		
		httpSecurity
			.cors(AbstractHttpConfigurer::disable)
			.csrf(AbstractHttpConfigurer::disable)
			.authorizeHttpRequests((request) -> request.requestMatchers("/login/**").permitAll()
				.requestMatchers("/main/").permitAll()
				.requestMatchers("/mainpage/**").permitAll()
				.requestMatchers("/").permitAll()
				.requestMatchers("/settings/**").permitAll());


		httpSecurity.sessionManagement((session) -> session.sessionCreationPolicy(
			SessionCreationPolicy.STATELESS));

		httpSecurity.addFilterBefore(new JwtAuthorizationFilter(provider, userRepository), UsernamePasswordAuthenticationFilter.class);

		httpSecurity.formLogin(AbstractHttpConfigurer::disable);

		return httpSecurity.build();
	}

}
