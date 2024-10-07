import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import axios from "axios";

export default class RegisterRepository {
  async register(username, password) {
    try {
      await createUserWithEmailAndPassword(auth, username, password);
      return await this.registerToLocalDB(username, password);
    } 
    catch (error) {
      console.error("Error durante el registro:", error);
      throw error;
    }
  }

  async registerToLocalDB(username, password) {
    return await axios.post(
      `http://localhost:8080/api/v1/register`,
      {},
      {
        headers: {
          username: username,
          password: password,
        },
      }
    );
  }
}
