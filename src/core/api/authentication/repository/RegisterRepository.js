import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import axios from "axios";

export default class RegisterRepository {
  async registerToFirebase(username, password) {
    return await createUserWithEmailAndPassword(auth, username, password);
  }

  async registerToLocalDB(username, password) {
    return await axios.post(`http://localhost:8080/api/v1/register`, {}, {
      headers: {
        'username': username,
        'password': password,
      },
    });
  }
}