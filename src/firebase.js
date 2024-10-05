import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyBaSYTDZJMI5d6UWpq1dK5zP_xwV_IUMqM",
  authDomain: "petcares-b1b58.firebaseapp.com",
  projectId: "petcares-b1b58",
  storageBucket: "petcares-b1b58.appspot.com",
  messagingSenderId: "889397027347",
  appId: "1:889397027347:web:1ce91ec0371e62486dd5e6",
  measurementId: "G-695M4RFKZ0" 
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 

 