import { ref } from "vue";
import { defineStore } from "pinia";
import Credentials from "@/models/Credentials";
import AuthService from "@/core/api/authentication/services/AuthService";

export const useAuthStore = defineStore("auth", () => {
  const user = ref({
    username: "",
    role: "",
    isAuthenticated: false,
  });
  const token = ref(null);
  const loading = ref(false);
  const errorMessage = ref("");

  function loadUserFromStorage() {
    const storedUser = localStorage.getItem("authUser");
    const storedToken = localStorage.getItem("authToken");
    
    if (storedUser && storedToken) {
      user.value = { ...JSON.parse(storedUser), isAuthenticated: true };
      token.value = storedToken;
    }
  }

  async function login(username, password) {
    loading.value = true;
    errorMessage.value = "";

    if (!username || !password) {
      errorMessage.value = "Please enter both username and password.";
      loading.value = false;
      return;
    }

    try {
      const credentials = new Credentials(username, password);
      const service = new AuthService(credentials);
      const response = await service.login();

      console.log("Login Response:", response);

      if (response.success && response.isAuthenticated) {
        user.value = {
          id: response.user.id,
          username: response.user.username,
          role: response.user.role,
          isAuthenticated: true,
        };
        token.value = response.token;

        localStorage.setItem("authUser", JSON.stringify(user.value));
        localStorage.setItem("authToken", token.value);
        console.log("Usuario después del login:", user.value);
      } 
      else {
        errorMessage.value =
          response.message || "Usuario o contraseña incorrecta";
        user.value.isAuthenticated = false;
      }

      return response;
    } 
    catch (error) {
      console.error("Login Error:", error);
      errorMessage.value =
        error.message || "An error occurred. Please try again.";
      user.value.isAuthenticated = false;
      throw error;
    }
     finally {
      loading.value = false;
    }
  }

  function logout() {
    user.value = {
      username: "",
      role: "",
      isAuthenticated: false,
    };
    token.value = null;
    localStorage.removeItem("authUser");
    localStorage.removeItem("authToken");
  }

  loadUserFromStorage();

  return { user, token, login, logout, loading, errorMessage };
});
