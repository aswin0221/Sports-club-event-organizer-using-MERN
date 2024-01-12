// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX_FFPaPOjgfF7o1iyCAMJuaLDT6LWNLk",
  authDomain: "mern-book-invetory.firebaseapp.com",
  projectId: "mern-book-invetory",
  storageBucket: "mern-book-invetory.appspot.com",
  messagingSenderId: "138453059138",
  appId: "1:138453059138:web:3891d640dd930eab770fdb",
  measurementId: "G-CZYB9V4JYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

