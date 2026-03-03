import { 
  GoogleAuthProvider, 
  signInWithPopup,
  signOut 
} from "firebase/auth";
import { auth } from "./firebase";

export const googleProvider = new GoogleAuthProvider();
export const signInWithProvider = (provider) => {
  return signInWithPopup(auth, provider);
};

export const logout = () => signOut(auth);
