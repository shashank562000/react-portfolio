
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-T2Es2To4A8ZCzdWq423jOdEtJRXzUio",
  authDomain: "react-portfolio-shashank-e3d18.firebaseapp.com",
  projectId: "react-portfolio-shashank-e3d18",
  storageBucket: "react-portfolio-shashank-e3d18.appspot.com",
  messagingSenderId: "1030566155510",
  appId: "1:1030566155510:web:0bd35e75dff773bc0488d7"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();