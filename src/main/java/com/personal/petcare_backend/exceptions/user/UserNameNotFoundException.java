package com.personal.petcare_backend.exceptions.user;

public class UserNameNotFoundException extends UserExceptions{

    public UserNameNotFoundException(String message) {
        super(message);
    }
    
    public UserNameNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
