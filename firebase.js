// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import {getFirestore}  from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3cG7BhgEJgC3_tMFnFmYc43-Qb29266M",
  authDomain: "firestore-db-d08b7.firebaseapp.com",
  projectId: "firestore-db-d08b7",
  storageBucket: "firestore-db-d08b7.firebasestorage.app",
  messagingSenderId: "789293094304",
  appId: "1:789293094304:web:a44ebe0d5e0f4ea66d40c5",
  measurementId: "G-B1QSVLH5QQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);