package com.personal.petcare_backend.facades;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.personal.petcare_backend.facades.encryptations.Base64Encoder;
import com.personal.petcare_backend.implementatios.IEncryptFacade;

@Component
public class EncoderFacade implements IEncryptFacade {

    PasswordEncoder bCryptPasswordEncoder;
    Base64Encoder base64Encoder;


    @Autowired
    public EncoderFacade(PasswordEncoder bCryptPasswordEncoder, Base64Encoder base64Encoder) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.base64Encoder = base64Encoder;
    }

    @Override
    public String encode(String type, String data) {
        String dataEncrypted = "";

        if (type == "bcrypt")
            dataEncrypted = bCryptPasswordEncoder.encode(data);
        if (type == "base64")
            dataEncrypted = base64Encoder.encode(data);

        return dataEncrypted;
    }

    @Override
    public String decode(String type, String data) {
        String dataDecoded = "";

        if (type == "base64")
            dataDecoded = base64Encoder.decode(data);

        return dataDecoded;
    }

}