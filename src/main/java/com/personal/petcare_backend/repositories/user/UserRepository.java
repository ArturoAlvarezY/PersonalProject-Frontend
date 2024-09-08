package com.personal.petcare_backend.repositories.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.personal.petcare_backend.models.user.User;

public interface UserRepository extends JpaRepository<User, Long> {

    public Optional<User> findByUsername(String username);
}
