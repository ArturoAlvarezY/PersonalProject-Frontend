package com.personal.petcare_backend.uploads.exceptions;

public class ImageException extends RuntimeException {

    public ImageException(String message) {
        super(message);
    }

    public ImageException(String message, Throwable cause) {
        super(message, cause);
    }
}
