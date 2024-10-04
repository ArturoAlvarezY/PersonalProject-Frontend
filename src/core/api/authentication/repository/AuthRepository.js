import axios from 'axios';

export default class AuthRepository {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: import.meta.env.VITE_API_ENDPOINT, 
            withCredentials: true,
        });
    }

    async login(credentials) {
        try {
            const response = await this.axiosInstance.get('/login', {
                params: {
                    username: credentials.getUsername(),
                    password: credentials.getPassword(),
                }
            });

            // Verifica explícitamente la respuesta del backend
            if (response.data && response.data.isAuthenticated) {
                return { success: true, ...response.data };
            } else {
                return { success: false, message: response.data.message || 'Invalid credentials' };
            }
        } catch (error) {
            console.error("AuthRepository Error:", error);
            return { success: false, message: 'An error occurred. Please try again.' };
        }
    }
}