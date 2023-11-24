package com.example.boongObbang.config;

import com.example.boongObbang.jwt.JwtAuthorizationFilter;
import com.example.boongObbang.jwt.JwtProvider;
import com.example.boongObbang.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import java.util.Collections;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

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
			.cors((cors)->cors.configurationSource(new CorsConfigurationSource() {
				@Override
				public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
					CorsConfiguration config = new CorsConfiguration();
					config.setAllowedOriginPatterns(Collections.singletonList("*"));
					config.setAllowedMethods(Collections.singletonList("*"));
					config.setAllowedHeaders(Collections.singletonList("*"));
					config.setExposedHeaders(Collections.singletonList("*"));
					config.setMaxAge(3600L);
					return config;
				}
			}))
			.csrf(AbstractHttpConfigurer::disable)
			.authorizeHttpRequests((request) -> request.requestMatchers("/login/**").permitAll()
				.requestMatchers("/main/**").permitAll()
				.requestMatchers("/mainpage/**").permitAll()
				.requestMatchers("/").permitAll()
				.requestMatchers("/settings/**").permitAll());


		httpSecurity.sessionManagement((session) -> session.sessionCreationPolicy(
			SessionCreationPolicy.STATELESS));

		httpSecurity.addFilterBefore(new JwtAuthorizationFilter(provider, userRepository), UsernamePasswordAuthenticationFilter.class);

		httpSecurity.formLogin(AbstractHttpConfigurer::disable);

		return httpSecurity.build();
	}

	@Bean
	public CorsConfigurationSource corsFilterFilterRegistrationBean() {
		CorsConfiguration config = new CorsConfiguration();

		config.setAllowCredentials(false);
		config.addAllowedOrigin("*");
		config.addAllowedHeader("*");
		config.addAllowedMethod("*");
		config.setMaxAge(6000L);
		config.addExposedHeader("Authorization");

		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

		source.registerCorsConfiguration("/**", config);

		return source;
	}

}
