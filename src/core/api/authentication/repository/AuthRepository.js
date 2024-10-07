import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import axios from "axios";

export default class AuthRepository {
  async login(credentials) {
    try {
      const basicAuth = 'Basic ' + btoa(`${credentials.getUsername()}:${credentials.getPassword()}`);

      const localResponse = await axios.get('http://localhost:8080/api/v1/login', {
        headers: {
          'Authorization': basicAuth,
          'Content-Type': 'application/json',  
        },
      });

      console.log("Local Response:", localResponse);

      if (localResponse.data.Message === "Logged") {
        return {
          success: true,
          isAuthenticated: true,
          user: {
            id: localResponse.data.id,            
            role: localResponse.data.role,
            username: localResponse.data.Username,
          },
          message: "Login successful with local database",
        };
      } else {
        return {
          success: false,
          message: localResponse.data.message || "Local login failed",
        };
      }
    } catch (localError) {
      console.error("Local Auth Error:", localError);

      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          credentials.getUsername(),
          credentials.getPassword()
        );
        const user = userCredential.user;

        return {
          success: true,
          isAuthenticated: true,
          user,
          message: "Login successful with Firebase",
        };
      } catch (firebaseError) {
        console.error("Firebase Auth Error:", firebaseError);
        return {
          success: false,
          message: firebaseError.message || "An error occurred during Firebase authentication.",
        };
      }
    }
  }
}
