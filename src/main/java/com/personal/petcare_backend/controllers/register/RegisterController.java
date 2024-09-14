package com.personal.petcare_backend.controllers.register;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.personal.petcare_backend.dtos.UserDto;
import com.personal.petcare_backend.services.register.RegisterServices;

@RestController
@RequestMapping(path = "/api/v1/register")

public class RegisterController {

    RegisterServices service;

    public RegisterController(RegisterServices service) {
        this.service = service;
    }

    @PostMapping
    public String register(@RequestHeader String username, @RequestHeader String password) {
        UserDto newUser = new UserDto();
        newUser.setUsername(username);
        newUser.setPassword(password);
        return service.save(newUser);
    }
}