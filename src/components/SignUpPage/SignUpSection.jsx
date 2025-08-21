import React from "react";
import eyeImage from "../../assets/eye.png";

const SignUpSection = ({ type }) => {
    return (
        <div className="flex flex-col justify-center items-start h-full md:px-24 py-12 text-center bg-white rounded-all shadow-lg">
            <h1 className="text-3xl font-bold mb-6 pt-12">
                {type === "signup" ? "Sign Up" : "Sign In"}
            </h1>

            <form className="w-full flex flex-col gap-6">
                <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full h-7 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" 
                    style={{ border: "1px solid oklch(0.21 0.01 250)" }} 
                />

                <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="w-full h-7 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" 
                    style={{ border: "1px solid oklch(0.21 0.01 250)" }} 
                />

                <input 
                    type="email" 
                    placeholder="E-mail address" 
                    className="w-full h-7 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" 
                    style={{ border: "1px solid oklch(0.21 0.01 250)" }} 
                />

                <div className="relative w-full">
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="w-full h-7 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-10" 
                        style={{ border: "1px solid oklch(0.21 0.01 250)" }} 
                    />
                    <img 
                        src={eyeImage} 
                        alt="eye" 
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                    />
                </div>

                <input 
                    type="password" 
                    placeholder="Re-enter the password" 
                    className="w-full h-7 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" 
                    style={{ border: "1px solid oklch(0.21 0.01 250)" }} 
                />

                <button 
                    type="submit" 
                    className="w-full h-9 bg-lime-500 text-black rounded-lg hover:bg-lime-600 transition"
                >
                    Sign Up
                </button>
            </form>

            <p className="text-black text-sm mt-6 pl-16">
                {type === "signin" ? "Don't have an account? " : "Already have an account? "}
                <span className="text-black hover:underline cursor-pointer">
                    Sign In
                </span>
            </p>
        </div>
    );
};

export default SignUpSection;
