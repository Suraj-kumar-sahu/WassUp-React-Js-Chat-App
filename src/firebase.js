import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBoL1F8t6i-ChF9OtL5_nc4RW66PNLAWbQ",
  authDomain: "react-chat-app-9670d.firebaseapp.com",
  projectId: "react-chat-app-9670d",
  storageBucket: "react-chat-app-9670d.appspot.com",
  messagingSenderId: "1077554362081",
  appId: "1:1077554362081:web:3b7e77470552c96d6969a0",
  measurementId: "G-SNW2P5PKPK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage() ;
export const db = getFirestore() ;
