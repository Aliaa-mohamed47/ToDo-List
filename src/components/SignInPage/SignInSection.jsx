import React, { useState } from "react";
import eyeImage from "../../assets/eye.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SignInSection = ({ type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // هات كل اليوزرز من localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // دور على يوزر مطابق
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      setMessage("✅ Login successful!");
      setSuccess(true);

      // خزّن اليوزر الحالي اللي عمل لوج إن
      localStorage.setItem("currentUser", JSON.stringify(foundUser));

      setTimeout(() => {
        navigate("/HomePage");
      }, 2000);
    } else {
      setMessage("❌ Invalid email or password");
      setSuccess(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-start h-full md:px-24 py-12 text-center bg-white rounded-all shadow-lg">
      <h1 className="text-3xl font-bold mb-6 pt-15">
        {type === "signin" ? "Sign In" : "Sign Up"}
      </h1>

      <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="mail.exemple@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-10 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          style={{ border: "1px solid oklch(0.21 0.01 250)" }}
        />

        <div className="relative w-full">
          <input
            type="password"
            placeholder="**************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-10 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-10"
            style={{ border: "1px solid oklch(0.21 0.01 250)" }}
          />
          <img
            src={eyeImage}
            alt="eye"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
          />
        </div>

        <button
          type="submit"
          className="w-full h-10 bg-lime-500 text-black rounded-lg hover:bg-lime-600 transition"
        >
          Sign In
        </button>

        {message && (
          <div
            className={`mt-2 p-2 rounded text-center ${
              success
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            {message}
          </div>
        )}
      </form>

      <div className="flex items-center w-full mb-1 mt-7">
        <hr className="flex-grow border-t border-gray-secondary" />
        <span className="mx-10 text-gray-secondary">or</span>
        <hr className="flex-grow border-t border-gray-secondary" />
      </div>

      <div className="flex w-full gap-20 mt-4">
        <button
          className="flex-1 h-10 rounded-lg flex items-center justify-center text-black transition gap-2"
          style={{ backgroundColor: "oklch(0.90 0 0)" }}
        >
          <FcGoogle size={16} />
          Google
        </button>
        <button
          className="flex-1 h-10 rounded-lg flex items-center justify-center text-black transition gap-2"
          style={{ backgroundColor: "oklch(0.90 0 0)" }}
        >
          <FaFacebookF size={16} />
          Facebook
        </button>
      </div>

      <p className="text-black text-l mt-6 pl-16">
        {type === "signin" ? "Don't have an account? " : "Already have an account? "}
        <Link
          to={type === "signin" ? "/signup" : "/signin"}
          className="text-black hover:underline cursor-pointer"
        >
          {type === "signin" ? "Sign Up" : "Sign In"}
        </Link>
      </p>
    </div>
  );
};

export default SignInSection;
