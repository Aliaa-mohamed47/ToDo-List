// LandingPage.jsx
import React from "react";
import LandingContent from "../components/LandingContent";
import LandingImage from "../components/LandingImage";

const LandingPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="flex shadow-lg overflow-hidden px-12 py-14 gap-6 bg-gray">
                
                <LandingImage />

                <LandingContent
                title="ToDo Py"
                description={
                    <>
                    Stay Organized, Get Things Done: Your Ultimate To-Do List App. <br />
                    A to-do list app is a digital task management tool designed to help users organize and prioritize their daily activities and responsibilities.
                    </>
                }
                buttonText="Get Started"
                linkText="Already have an account?"
                linkHref="/login"
                />

            </div>
        </div>
    );
};

export default LandingPage;