package com.personal.petcare_backend.implementatios;

public interface IEncryptFacade {

    String encode(String type, String data);

    String decode(String type, String data);

}
