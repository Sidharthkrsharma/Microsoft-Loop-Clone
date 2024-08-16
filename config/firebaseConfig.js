// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "loop-clone-e1270.firebaseapp.com",
  projectId: "loop-clone-e1270",
  storageBucket: "loop-clone-e1270.appspot.com",
  messagingSenderId: "286554305079",
  appId: "1:286554305079:web:48da550df41264704905b2",
  measurementId: "G-FPGFYWGRQQ"
};

// Initialize Firebase
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
