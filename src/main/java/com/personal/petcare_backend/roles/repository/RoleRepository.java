package com.personal.petcare_backend.roles.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.personal.petcare_backend.roles.models.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    
}
