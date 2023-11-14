package com.example.boongObbang.repository;

import com.example.boongObbang.entity.Setting;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SettingRepository extends JpaRepository<Setting, Long> {
	Optional<Setting> findByUserId(Long user_id);
}
