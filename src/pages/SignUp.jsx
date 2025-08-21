// SignIn.jsx
import React from "react";
import LandingImage from "../components/Shared/LandingImage";
import SignUpSection from "../components/SignUpPage/SignUpSection";

const SignUp = () => {
    return (
        <div className="bg-gray min-h-screen flex justify-center items-center">
            <div className="flex flex-col md:flex-row overflow-hidden bg-gray gap-4 md:max-w-6xl min-h-[80vh] p-8 rounded-2xl">
                
                <div className="flex-1">
                    <LandingImage />
                </div>

                <div className="flex-1">
                    <SignUpSection type="signup" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
