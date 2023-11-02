package com.example.boongObbang.repository;

import com.example.boongObbang.entity.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByEmail(String email);
	Optional<User> findByUuid(String uuid);
	Optional<User> findByEmailAndProvider(String email, String provider);
}
