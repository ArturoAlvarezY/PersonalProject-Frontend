package com.personal.petcare_backend.services.user;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.personal.petcare_backend.models.user.SecurityUser;
import com.personal.petcare_backend.repositories.user.UserRepository;

public class UserService implements UserDetailsService {

    UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("-----------------------" + username);
        return repository
                .findByUsername(username)
                .map(SecurityUser::new)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
    }

}
