package com.personal.petcare_backend.token;


import org.springframework.security.web.authentication.preauth.AbstractPreAuthenticatedProcessingFilter;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;

import jakarta.servlet.http.HttpServletRequest;


public class FirebaseAuthenticationFilter extends AbstractPreAuthenticatedProcessingFilter {

    @Override
    protected Object getPreAuthenticatedPrincipal(HttpServletRequest request) {
        String header = request.getHeader("Authorization");
        if (header != null && header.startsWith("Bearer ")) {
            String idToken = header.substring(7);
            try {
                FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(idToken);
                return decodedToken.getUid(); // Devuelve el UID del usuario autenticado
            } catch (FirebaseAuthException e) {
                // Maneja la excepción si la verificación del token falla
                logger.warn("FirebaseToken verification failed: " + e.getMessage(), e);
                return null;
            }
        }
        return null; // Retorna null si no hay un token válido
    }

    @Override
    protected Object getPreAuthenticatedCredentials(HttpServletRequest request) {
        return "N/A"; // No se utilizan credenciales específicas en este flujo

    }


}
