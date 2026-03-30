import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 🔥 Agregamos Firestore

const firebaseConfig = {
  apiKey: "AIzaSyD0E6SV1zXuTDEkaE14j6Ey5Vsg-4gp-H0",
  authDomain: "tlaxcala-inteligente.firebaseapp.com",
  projectId: "tlaxcala-inteligente",
  storageBucket: "tlaxcala-inteligente.firebasestorage.app",
  messagingSenderId: "657629798931",
  appId: "1:657629798931:web:9306eb7f6825d3184a15e6",
  measurementId: "G-8FY7VSPBV2"
};

// Inicializamos Firebase y exportamos la base de datos
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);