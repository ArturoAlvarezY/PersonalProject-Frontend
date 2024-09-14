package com.personal.petcare_backend.repositories.roles;

import org.springframework.data.jpa.repository.JpaRepository;

import com.personal.petcare_backend.models.user.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    
}
