package com.personal.petcare_backend.roles.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.personal.petcare_backend.roles.exceptions.RoleNotFoundException;
import com.personal.petcare_backend.roles.models.Role;
import com.personal.petcare_backend.roles.repository.RoleRepository;

@Service
public class RoleService {

    RoleRepository repository;

    @Autowired
    public RoleService(RoleRepository repository) {
        this.repository = repository;
    }

    public Role getById(Long id) {
        Role role = repository.findById(id)
                .orElseThrow(() -> new RoleNotFoundException("Role not found"));
        return role;
    }

}
