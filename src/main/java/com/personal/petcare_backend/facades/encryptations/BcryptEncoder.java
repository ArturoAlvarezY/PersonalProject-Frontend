package com.personal.petcare_backend.facades.encryptations;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.personal.petcare_backend.implementatios.IEncoder;

public class BcryptEncoder implements IEncoder {

    BCryptPasswordEncoder encoder;

    public BcryptEncoder(BCryptPasswordEncoder encoder) {
        this.encoder = encoder;
    }

    @Override
    public String encode(String data) {
        String dataEncoded = encoder.encode(data);
        return dataEncoded;
    }

}
