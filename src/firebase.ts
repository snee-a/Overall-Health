// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyABD-DQR-STmoSHJjFiJXkrAEmGK82gTYM",
  authDomain: "overall-health-30cfb.firebaseapp.com",
  projectId: "overall-health-30cfb",
  storageBucket: "overall-health-30cfb.appspot.com",
  messagingSenderId: "217942967552",
  appId: "1:217942967552:web:e4bd5616277a941e4e1fe5",
};


// ✅ Initialize App First
const app = initializeApp(firebaseConfig);

// ✅ Now use it
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
