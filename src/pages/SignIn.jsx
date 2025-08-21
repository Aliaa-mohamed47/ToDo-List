// SignIn.jsx
import React from "react";
import LandingImage from "../components/Shared/LandingImage";
import SignInSection from "../components/SignInPage/SignInSection";

const SignIn = () => {
    return (
        <div className="bg-gray min-h-screen flex justify-center items-center">
            <div className="flex flex-col md:flex-row overflow-hidden bg-gray gap-4 w-4/5 md:max-w-6xl min-h-[80vh] p-8 rounded-2xl">
                
                <div className="flex-1">
                    <LandingImage />
                </div>

                <div className="flex-1">
                    <SignInSection type="signin" />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
