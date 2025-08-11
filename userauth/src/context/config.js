// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCybUG5nRmhVxOCRd8dWZ226BukAady3fc",
  authDomain: "userauthentication-53b25.firebaseapp.com",
  projectId: "userauthentication-53b25",
  storageBucket: "userauthentication-53b25.firebasestorage.app",
  messagingSenderId: "771062696168",
  appId: "1:771062696168:web:a1b822897ea8ae0b1ca15d",
  measurementId: "G-W8ZFYDY525"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();
