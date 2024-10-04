import { ref } from 'vue';
import { defineStore } from 'pinia';
import Credentials from '@/models/Credentials';
import AuthService from '@/core/api/authentication/services/AuthService';

export const useAuthStore = defineStore('auth', () => {
    const user = ref({
        username: '',
        isAuthenticated: false
    });

    const loading = ref(false);
    const errorMessage = ref('');

    async function login(username, password) {
        loading.value = true;
        errorMessage.value = ''; // Resetear el mensaje de error al iniciar el login

        try {
            const credentials = new Credentials(username, password);
            const service = new AuthService(credentials);
            const response = await service.login();

            if (response.success && response.isAuthenticated) {
                user.value.username = username;
                user.value.isAuthenticated = true;
            } else {
                errorMessage.value = response.message || 'Usuario o contraseña incorrecta';
                user.value.isAuthenticated = false;
            }

            return response;
        } catch (error) {
            console.error("Login Error:", error);
            errorMessage.value = 'An error occurred. Please try again.';
            user.value.isAuthenticated = false;
            throw error;
        } finally {
            loading.value = false;
        }
    }

    return { user, login, loading, errorMessage };
});