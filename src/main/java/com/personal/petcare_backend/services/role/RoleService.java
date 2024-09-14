package com.personal.petcare_backend.services.role;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.personal.petcare_backend.exceptions.role.RoleNotFoundException;
import com.personal.petcare_backend.models.user.Role;
import com.personal.petcare_backend.repositories.roles.RoleRepository;

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
