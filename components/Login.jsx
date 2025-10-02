import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaTwitter, FaApple } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email.trim()) {
      alert("Please enter your email or mobile number.");
      return;
    }
    // perform login logic here
    navigate("/"); // redirect to homepage if valid
  };

  return (
    <div className="flex items-center justify-center min-h-140 bg-black">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-100 text-center border border-gray-200">
        <h2 className="text-2xl font-semibold mb-2">
          Login to <span className="text-xl font-bold text-red-600 pr-2">Movie</span>
          <span className="text-xl font-bold text-black">Wale</span>
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Login to continue enjoying uninterrupted video and personalised experience.
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200">
            <FaGoogle className="text-xl" />
          </button>
          <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200">
            <FaFacebookF className="text-xl text-blue-600" />
          </button>
          <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200">
            <FaTwitter className="text-xl text-sky-500" />
          </button>
          <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200">
            <FaApple className="text-xl" />
          </button>
        </div>

        <div className="flex items-center mb-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="mx-2 text-gray-500 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <input
          type="text"
          placeholder="Enter email or mobile number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-black-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-800"
        />

        <button
          onClick={handleLogin}
          disabled={!email.trim()}
          className={`w-full text-white font-medium py-2 rounded-lg transition ${
            email.trim() ? "bg-purple-800 hover:bg-purple-900" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Login
        </button>

        <p className="mt-6 text-black text-sm">
          New to <span className="text-sm font-bold text-red-600 pr-1">Movie</span>
          <span className="text-sm font-bold text-black">Wale</span> ?{" "}
          <a href="/register" className="text-green-800 font-medium hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
