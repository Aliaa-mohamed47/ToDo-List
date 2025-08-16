import React from "react";
import eyeImage from "../assets/eye.png";

const SignUpSection = ({ type }) => {
    return (
        <div className="pl-30 w-[36.25rem] h-[45.5rem] flex flex-col justify-start items-start rounded-all bg-white">
            <h1 className="text-3xl font-bold mb-6 pt-36">
                {type === "signup" ? "Sign Up" : "Sign In"}
            </h1>

            <form className="w-full flex flex-col gap-6">
                <input type="text" placeholder="First Name" className="w-75 h-8 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" style={{ border: "1px solid oklch(0.21 0.01 250)" }} />

                <input type="text" placeholder="Last Name" className="w-75 h-8 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" style={{ border: "1px solid oklch(0.21 0.01 250)" }} />

                <input type="email" placeholder="E-mail address" className="w-75 h-8 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" style={{ border: "1px solid oklch(0.21 0.01 250)" }} />

                <div className="relative w-75">
                    <input type="password" placeholder="Password" className="w-full h-8 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-10" style={{ border: "1px solid oklch(0.21 0.01 250)" }} />
                    <img src={eyeImage} alt="eye" className="absolute top-1/2 right-2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"/>
                </div>

                <input type="password" placeholder="Re-enter the password" className="w-75 h-8 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" style={{ border: "1px solid oklch(0.21 0.01 250)" }} />

                <button type="submit" className="w-75 h-10 bg-lime-500 text-black rounded-lg hover:bg-lime-600 transition">
                    Sign Up
                </button>
            </form>

            <p className="text-black text-l mt-6 pl-10">
                {type === "signin" ? "Don't have an account? " : "Already have an account? "}
                <span className="text-black hover:underline cursor-pointer">
                    Sign Up
                </span>
            </p>
        </div>
    );
};

export default SignUpSection;