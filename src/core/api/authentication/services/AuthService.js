import AuthRepository from "../repository/AuthRepository";

export default class AuthService {
  #repo;
  #credentials;

  constructor(credentials) {
    this.#repo = new AuthRepository();
    this.#credentials = credentials;
  }

  async login() {
    if (
      !this.#credentials ||
      typeof this.#credentials.getUsername !== "function" ||
      typeof this.#credentials.getPassword !== "function"
    ) {
      return { isAuthenticated: false, message: "Invalid credentials format" };
    }

    try {
      const response = await this.#repo.login(this.#credentials);

      if (!response || response.success === false) {
        return {
          isAuthenticated: false,
          message: response?.message || "Login failed",
        };
      }

      return { isAuthenticated: true, ...response };
    } catch (error) {
      console.error("AuthService Error:", error);
      return {
        isAuthenticated: false,
        message:
          error.message ||
          "An error occurred during authentication. Please try again.",
      };
    }
  }
}
