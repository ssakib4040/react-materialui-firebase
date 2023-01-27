// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG3O6jLPf8GtVuTZbz6XWv5roYONcZHv0",
  authDomain: "temp-practise.firebaseapp.com",
  projectId: "temp-practise",
  storageBucket: "temp-practise.appspot.com",
  messagingSenderId: "953566743934",
  appId: "1:953566743934:web:c859027210348c9929372f",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;

export {
  //   getAuth,
  //   createUserWithEmailAndPassword,
  //   signInWithEmailAndPassword,
  //   onAuthStateChanged,
  firebase,
};
