import React from "react";
import eyeImage from "../../assets/eye.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";


const SignInSection = ({ type }) => {
    return (
        <div className="flex flex-col justify-center items-start h-full md:px-24 py-12 text-center bg-white rounded-all shadow-lg">
            <h1 className="text-3xl font-bold mb-6 pt-15">
                {type === "signin" ? "Sign In" : "Sign Up"}
            </h1>

            <form className="w-full flex flex-col gap-6">
                <input 
                type="email" 
                placeholder="mail.exemple@mail.com" 
                className="w-full h-10 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" 
                style={{ border: "1px solid oklch(0.21 0.01 250)" }} 
                />
                <div className="relative w-full">
                    <input 
                    type="password" 
                    placeholder="**************" 
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
            </form>

            <div className="flex items-center w-full mb-1 mt-7">
                <hr className="flex-grow border-t border-gray-secondary" />
                <span className="mx-10 text-gray-secondary">or</span>
                <hr className="flex-grow border-t border-gray-secondary" />
            </div>

            <div className="flex w-full gap-20 mt-4">
                <button className="flex-1 h-10 rounded-lg flex items-center justify-center text-black transition gap-2" style={{ backgroundColor: "oklch(0.90 0 0)" }}>
                    <FcGoogle size={16} />
                    Google
                </button>
                <button className="flex-1 h-10 rounded-lg flex items-center justify-center text-black transition gap-2" style={{ backgroundColor: "oklch(0.90 0 0)" }}>
                    <FaFacebookF size={16} />
                    Facebook
                </button>
            </div>

            <p className="text-black text-l mt-6 pl-16">
                {type === "signin" ? "Don't have an account? " : "Already have an account? "}
                <span className="text-black hover:underline cursor-pointer">
                    Sign Up
                </span>
            </p>
        </div>
    );
};

export default SignInSection;