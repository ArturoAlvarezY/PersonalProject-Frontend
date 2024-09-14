package com.personal.petcare_backend.exceptions.user;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "User not found...")

public class UserNameNotFoundException extends UserExceptions{

    public UserNameNotFoundException(String message) {
        super(message);
    }
    
    public UserNameNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
