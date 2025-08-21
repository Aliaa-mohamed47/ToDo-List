// LandingPage.jsx
import React from "react";
import LandingContent from "../components/LandingPage/LandingContent";
import LandingImage from "../components/Shared/LandingImage";
// import { Link, Outlet } from "react-router";


const LandingPage = () => {
    return (
        <div className="bg-gray min-h-scree flex justify-center items-center">
            <div className="flex flex-col md:flex-row bg-gray gap-4 md:max-w-6xl p-8">
                <div className="flex-1">
                    <LandingImage />
                </div>

                <div className="flex-1 flex justify-center items-center">
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
        </div>
    );
};

export default LandingPage;