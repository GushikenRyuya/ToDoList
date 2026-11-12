// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9oXPNgjRSBfPIsTrmVeBardYMaZhZGQQ",
  authDomain: "todoproject-c3bbd.firebaseapp.com",
  projectId: "todoproject-c3bbd",
  storageBucket: "todoproject-c3bbd.firebasestorage.app",
  messagingSenderId: "820444120588",
  appId: "1:820444120588:web:aee5e23b308922f1b71029",
  measurementId: "G-Q1T5ERCZXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
