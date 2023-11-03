package com.example.boongObbang.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.annotation.PostConstruct;
import java.util.Base64;
import java.util.Date;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JwtProvider {

	@Value("$jwt.secret")
	private String secretEnv;
	private String secretKey;

	@PostConstruct
	protected void init() {
		secretKey = Base64.getEncoder().encodeToString(secretEnv.getBytes());
	}
	public String createToken(String email, String provider) {
		long tokenPeriod = 1000L * 60L * 60L; //1시간

		Claims claims = Jwts.claims().setSubject(email);
		claims.put("role", "user");
		claims.put("provider", provider);

		Date now = new Date();

		return Jwts.builder()
			.setClaims(claims)
			.setIssuedAt(now)
			.setExpiration(new Date(now.getTime() + tokenPeriod))
			.signWith(SignatureAlgorithm.HS256, secretKey).compact();

	}

	public boolean isTokenValid(String token) {
		try {
			Jws<Claims> claims = Jwts.parser()
				.setSigningKey(secretKey)
				.parseClaimsJws(token);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	public boolean isTokenExpired(String token) {
		try {
			Claims claims = Jwts.parser()
				.setSigningKey(secretKey)
				.parseClaimsJws(token)
				.getBody();
			Date expirationDate = claims.getExpiration();
			return expirationDate.before(new Date());
		} catch (Exception e) {
			return false;
		}
	}


	public String getEmail(String token) {
		return Jwts.parser()
			.setSigningKey(secretKey)
			.parseClaimsJws(token)
			.getBody()
			.getSubject();
	}

	public String getProvider(String token) {
		return Jwts.parser()
			.setSigningKey(secretKey)
			.parseClaimsJws(token)
			.getBody()
			.get("provider", String.class);
	}
}
