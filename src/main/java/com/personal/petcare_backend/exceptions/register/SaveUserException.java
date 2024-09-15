package com.personal.petcare_backend.exceptions.register;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "can not save the user!")

public class SaveUserException extends RegisterException{

    public SaveUserException(String message) {
        super(message);
    }
    public SaveUserException(String message, Throwable cause) {
        super(message, cause);
    }
}
