// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAecy9JWnaq-pdbm92Uy4qOKVLMMl-Zp40",
  authDomain: "hello-world-390903.firebaseapp.com",
  projectId: "hello-world-390903",
  storageBucket: "hello-world-390903.appspot.com",
  messagingSenderId: "401460341269",
  appId: "1:401460341269:web:1738b87bf6015358f6fc1c",
  measurementId: "G-6D4GX2KZM8"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP)