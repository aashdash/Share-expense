import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJX-mzxc_FLOoH0G9wCgFG3lckqSSP1qQ",
  authDomain: "scorce-350a5.firebaseapp.com",
  projectId: "scorce-350a5",
  storageBucket: "scorce-350a5.appspot.com",
  messagingSenderId: "307902396079",
  appId: "1:307902396079:web:d8aec867529bff57d9c65a"
};

const app = initializeApp(firebaseConfig);

export const database = getAuth(app);  
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
