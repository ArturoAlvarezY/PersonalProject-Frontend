package com.personal.petcare_backend.facades;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.personal.petcare_backend.facades.encryptations.Base64Encoder;
import com.personal.petcare_backend.implementatios.IEncryptFacade;

@Component
public class EncoderFacade implements IEncryptFacade {

    private final PasswordEncoder bCryptPasswordEncoder;
    private final Base64Encoder base64Encoder;

    @Autowired
    public EncoderFacade(PasswordEncoder bCryptPasswordEncoder, Base64Encoder base64Encoder) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.base64Encoder = base64Encoder;
    }

    @Override
    public String encode(String type, String data) {
        String dataEncrypted = "";

        if ("bcrypt".equals(type)) {
            dataEncrypted = bCryptPasswordEncoder.encode(data);
        } else if ("base64".equals(type)) {
            dataEncrypted = base64Encoder.encode(data);
        } else {
            throw new IllegalArgumentException("Unsupported encoding type: " + type);
        }

        return dataEncrypted;
    }

    @Override
    public String decode(String type, String data) {
        if ("base64".equals(type)) {
            return base64Encoder.decode(data);
        } else {
            throw new IllegalArgumentException("Unsupported decoding type or operation not allowed for: " + type);
        }
    }
}