import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import axios from "axios";

export default class RegisterRepository{
async register(user) {
    try {
      const localResponse = await axios.post('http://localhost:8080/api/v1/register', {
        username: user.username,
        email: user.email,
        password: user.password,
      });

      if (localResponse.data.success) {
        await createUserWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );

        return {
          success: true,
          message: "User registered successfully.",
        };
      } else {
        return {
          success: false,
          message: localResponse.data.message || "Local registration failed.",
        };
      }
    } catch (error) {
      console.error("Registration Error:", error);
      return {
        success: false,
        message: error.message || "An error occurred during registration.",
      };
    }
  }
}
