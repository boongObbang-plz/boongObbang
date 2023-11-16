package com.example.boongObbang.repository;

import com.example.boongObbang.entity.Message;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {
	List<Message> findByUserId(Long user_id);
}
