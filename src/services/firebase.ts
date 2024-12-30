import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYzFy3ZlI3YrHLVIcC-lSeuKRWsfrCCpE",
  authDomain: "portifolio-17f1f.firebaseapp.com",
  projectId: "portifolio-17f1f",
  storageBucket: "portifolio-17f1f.firebasestorage.app",
  messagingSenderId: "207593034361",
  appId: "1:207593034361:web:d0d1208ba45ad5ac2afaa8",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
