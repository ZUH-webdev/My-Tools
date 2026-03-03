import  { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaLock, FaUnlock } from "react-icons/fa";

import bg from "../assets/bg.png";
import icon from "../assets/icon.svg";

import google from "../assets/google.png";
import twitter from "../assets/twitter.svg";
import github from "../assets/github.svg";
import facebook from "../assets/facebook.svg";
import reddit from "../assets/reddit.svg";
import twitch from "../assets/twitch.svg";
import discord from "../assets/discord.svg";

import { signInWithProvider, googleProvider } from "../authProviders"

import { setUser, clearUser } from "../redux/slices/authSlice";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { isLogged } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(true);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setUnlocked(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            provider: "google",
          })
        );
        // Redirect to landing page and scroll to top
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        dispatch(clearUser());
      }
    });
    return () => unsub();
  }, [dispatch, navigate]);

  const handleGoogleLogin = async () => {
    try {
      await signInWithProvider(googleProvider);
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white">
      <div
        className="hidden md:flex relative items-center justify-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-indigo-600/90" />
        <div className="relative flex items-center gap-3 text-white text-4xl font-bold">
          <img src={icon} className="w-10 h-10" />
          Welcome!
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md text-center">
          {/* Lock */}
          <div className="flex justify-center mb-4 text-indigo-600 text-3xl gap-5">
            {unlocked ? <FaUnlock /> : <FaLock />}
          </div>

          <h2 className="text-xl font-semibold mb-6">
            Choose a method to sign in.
          </h2>

          <div className="space-y-3 flex flex-col gap-3 items-center justify-center ">
            <AuthButton
              img={google}
              text="Continue with Google"
              onClick={handleGoogleLogin}
            />
            <AuthButton img={twitter} text="Continue with Twitter" />
            <AuthButton img={github} text="Continue with GitHub" />
            <AuthButton img={facebook} text="Continue with Facebook" />
            <AuthButton img={reddit} text="Continue with Reddit" />
            <AuthButton img={twitch} text="Continue with Twitch" />
            <AuthButton img={discord} text="Continue with Discord" />
          </div>

          <p className="text-xs text-gray-500 mt-6 leading-relaxed">
            By signing in or creating an account, {" "}
            <br /><span></span>
            <span className="text-indigo-600 cursor-pointer">
              terms & conditions
            </span>{" "}
            and{" "}
            <span className="text-indigo-600 cursor-pointer">
              privacy statement
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

function AuthButton({ img, text, onClick }) {
  return (
    <button
      onClick={onClick}
      className={` flex items-center gap-3 px-4 py-3 border rounded-lg text-sm font-medium transition h-10 w-65
        ${
          onClick
            ? "hover:bg-gray-50 cursor-pointer"
            : "opacity-70 cursor-not-allowed"
        }`}
      disabled={!onClick}
    >
      <img src={img} className="w-7 h-7" />
      {text}
    </button>
  );
}

export default SignIn;
