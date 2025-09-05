// LandingPage.jsx
import React from "react";
import LandingContent from "../components/LandingPage/LandingContent";
import LandingImage from "../components/Shared/LandingImage";

const LandingPage = () => {
    return (
        <div className="bg-gray min-h-screen flex justify-center items-center px-4">
            <div className="zoom-75 flex flex-col md:flex-row items-center md:items-stretch bg-gray gap-8 md:gap-12 max-w-6xl w-full py-8">
                
                <div className="flex-1 flex justify-center">
                    <LandingImage />
                </div>

                <div className="flex-1 flex justify-center items-center text-center md:text-left">
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
                        linkHref="/signIn"
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
