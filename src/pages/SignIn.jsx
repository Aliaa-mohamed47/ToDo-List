import React from "react";
import SignInSection from "../components/SignInSection";
import LandingImage from "../components/LandingImage";

const SignInPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="flex shadow-lg overflow-hidden px-12 py-14 gap-6 bg-gray">
                <LandingImage />

                <SignInSection type="signin" />
            </div>
        </div>
    );
};

export default SignInPage;