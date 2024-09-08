package com.personal.petcare_backend.exceptions.user;

public class UserExceptions extends RuntimeException {

    public UserExceptions(String message) {
        super(message);
    }

    public UserExceptions(String message, Throwable cause) {
        super(message, cause);
    }

}
