// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxnQt3Z8TL7RD2ONNHfdy8jMjQ6VUFxyc",
  authDomain: "share-serve-a3cfe.firebaseapp.com",
  projectId: "share-serve-a3cfe",
  storageBucket: "share-serve-a3cfe.firebasestorage.app",
  messagingSenderId: "480270364794",
  appId: "1:480270364794:web:09528970af465752680bc3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
