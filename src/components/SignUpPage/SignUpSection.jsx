import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignUpSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !rePassword) {
      setMessage("⚠️ Please fill all fields");
      setSuccess(false);
      return;
    }

    if (password !== rePassword) {
      setMessage("❌ Passwords do not match");
      setSuccess(false);
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((u) => u.email === email)) {
      setMessage("⚠️ Email already exists");
      setSuccess(false);
      return;
    }

    const newUser = { 
      id: Date.now(), 
      firstName, 
      lastName, 
      email, 
      password 
    };
    
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setMessage("✅ Account created successfully!");
    setSuccess(true);

    setTimeout(() => {
      navigate("/signin");
    }, 2000);
  };

  return (
    <div className="flex flex-col justify-center items-start h-full md:px-24 py-12 text-center bg-white rounded-all shadow-lg">
      <h1 className="text-3xl font-bold mb-6 pt-12">Sign Up</h1>

      <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full h-10 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          style={{ border: "1px solid oklch(0.21 0.01 250)" }}
        />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full h-10 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          style={{ border: "1px solid oklch(0.21 0.01 250)" }}
        />

        <input
          type="email"
          placeholder="E-mail address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-10 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          style={{ border: "1px solid oklch(0.21 0.01 250)" }}
        />

        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-10 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-10"
            style={{ border: "1px solid oklch(0.21 0.01 250)" }}
          />
          <div
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-xl cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
        </div>

        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Re-enter the password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            className="w-full h-10 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-10"
            style={{ border: "1px solid oklch(0.21 0.01 250)" }}
          />
            <div
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-xl cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>


        <button
          type="submit"
          className="w-full h-10 bg-lime-500 text-black rounded-lg hover:bg-lime-600 transition"
        >
          Sign Up
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

      <p className="text-black text-sm mt-6 pl-16">
        Already have an account?{" "}
        <Link
          to="/signin"
          className="text-black hover:underline cursor-pointer"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUpSection;
