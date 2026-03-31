import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  FacebookAuthProvider 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATpD53USMcO3stCxuUIV4Ok_2M69SWUF4",
  authDomain: "my-tools-771ac.firebaseapp.com",
  projectId: "my-tools-771ac",
  storageBucket: "my-tools-771ac.firebasestorage.app",
  messagingSenderId: "863115709035",
  appId: "1:863115709035:web:b5f7486edbf5a5cdedbf2e",
  measurementId: "G-QGFXLWZ8L9"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

