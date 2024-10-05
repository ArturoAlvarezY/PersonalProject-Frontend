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

    function loadUserFromStorage() {
        const storedUser = localStorage.getItem('authUser');
        if (storedUser) {
            user.value = JSON.parse(storedUser);
        }
    }

    async function login(username, password) {
        loading.value = true;
        errorMessage.value = ''; 

        if (!username || !password) {
            errorMessage.value = 'Please enter both username and password.';
            loading.value = false; 
            return;
        }

        try {
            const credentials = new Credentials(username, password);
            const service = new AuthService(credentials);
            const response = await service.login();

            if (response.success && response.isAuthenticated) {
                user.value.username = username;
                user.value.isAuthenticated = true;
                localStorage.setItem('authUser', JSON.stringify({ username })); 
            } else {
                errorMessage.value = response.message || 'Usuario o contraseña incorrecta';
                user.value.isAuthenticated = false;
            }

            return response;
        } catch (error) {
            console.error("Login Error:", error);
            errorMessage.value = error.message || 'An error occurred. Please try again.';
            user.value.isAuthenticated = false;
            throw error;
        } finally {
            loading.value = false;
        }
    }

    loadUserFromStorage();

    return { user, login, loading, errorMessage };
});