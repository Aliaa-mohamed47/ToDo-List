// LandingPage.jsx
import React from "react";
import LandingImage from "../components/LandingImage";

const LandingPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex shadow-lg overflow-hidden px-12 py-14 gap-6 bg-gray">
            <LandingImage />
        </div>
        </div>
    );
};

export default LandingPage;