import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBgEwwNF8P-EclOuIzbIjON3Tiq1Qe-ivk",
  authDomain: "just-web-10463.firebaseapp.com",
  projectId: "just-web-10463",
  storageBucket: "just-web-10463.appspot.com",
  messagingSenderId: "552284705118",
  appId: "1:552284705118:web:9e49e11a1378f1174ebfcf",
  measurementId: "G-3BXBF2TWG9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();