// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM9TmhAK3aa4JAIGpOse23LHJ4_nvwUjw",
  authDomain: "ship-3271b.firebaseapp.com",
  projectId: "ship-3271b",
  storageBucket: "ship-3271b.firebasestorage.app",
  messagingSenderId: "63662921766",
  appId: "1:63662921766:web:737d9ac367cc5e8be7aee7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };