package com.example.boongObbang.repository;

import com.example.boongObbang.entity.Token;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;

public interface TokenRedisRepository extends CrudRepository<Token, String> {
	Optional<Token> findByJwt(String jwt);
	Optional<Token> findByEmail(String email);
}
