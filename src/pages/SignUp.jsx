import React from "react";
import SignUpSection from "../components/SignUpSection";
import LandingImage from "../components/LandingImage";

const SignUpPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="flex shadow-lg overflow-hidden px-12 py-14 gap-6 bg-gray">
                <LandingImage />
                
                <SignUpSection type="signup" />
            </div>
        </div>
    );
};

export default SignUpPage;