import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage"; 
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0E6SV1zXuTDEkaE14j6Ey5Vsg-4gp-H0",
  authDomain: "tlaxcala-inteligente.firebaseapp.com",
  projectId: "tlaxcala-inteligente",
  storageBucket: "tlaxcala-inteligente.firebasestorage.app",
  messagingSenderId: "657629798931",
  appId: "1:657629798931:web:9306eb7f6825d3184a15e6",
  measurementId: "G-8FY7VSPBV2"
};

export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
