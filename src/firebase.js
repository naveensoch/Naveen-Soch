import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJfoXQ1akP_xs5QyHZhPOVnoQwl9Zsd-w",
  authDomain: "naveen-soch.firebaseapp.com",
  projectId: "naveen-soch",
  storageBucket: "naveen-soch.firebasestorage.app",
  messagingSenderId: "714381217525",
  appId: "1:714381217525:web:28f7a25f1d13b6ba097fbc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
