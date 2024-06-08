// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC9mgkmPx_RhY9M4fZjxK2lwS1yj0J_IE",
  authDomain: "react-auth-d0b97.firebaseapp.com",
  projectId: "react-auth-d0b97",
  storageBucket: "react-auth-d0b97.appspot.com",
  messagingSenderId: "832165657200",
  appId: "1:832165657200:web:8da4d7c14785283fd892b5",
  measurementId: "G-D0GFR90WTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;