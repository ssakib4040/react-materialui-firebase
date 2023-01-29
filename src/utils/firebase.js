// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile 
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS2WxX6AUiDi07oqC1EYwmeup_NtPpybw",
  authDomain: "react-materialui-firebas-16f7e.firebaseapp.com",
  projectId: "react-materialui-firebas-16f7e",
  storageBucket: "react-materialui-firebas-16f7e.appspot.com",
  messagingSenderId: "1029574992483",
  appId: "1:1029574992483:web:7839687b54991bfc580e56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

export {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile
};
