// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2LtPLKLuQpxbybDnJTzOyFXCuRCRQidc",
  authDomain: "ai-flashcard-d370c.firebaseapp.com",
  projectId: "ai-flashcard-d370c",
  storageBucket: "ai-flashcard-d370c.appspot.com",
  messagingSenderId: "253772746551",
  appId: "1:253772746551:web:daf2ab2f6d1eceef8214b2",
  measurementId: "G-JE15W8RVN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}