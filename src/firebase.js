import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  FacebookAuthProvider 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_bVXntDzkID7cF5ySM35mNrR3vcVCPoM",
  authDomain: "pocket-tools-62d40.firebaseapp.com",
  projectId: "pocket-tools-62d40",
  storageBucket: "pocket-tools-62d40.firebasestorage.app",
  messagingSenderId: "944075691872",
  appId: "1:944075691872:web:5fb35fb136a95324a2b005",
  measurementId: "G-BYLCBMMB5E"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
