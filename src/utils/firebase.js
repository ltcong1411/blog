// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-92703.firebaseapp.com",
  projectId: "blog-92703",
  storageBucket: "blog-92703.appspot.com",
  messagingSenderId: "955534439497",
  appId: "1:955534439497:web:8581a66773136ba5953b98"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);