import React from "react";
import Sidebar from "../components/Shared/Sidebar";
import WelcomeSection from "../components/HomePage/WelcomeSection";

const HomePage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="flex shadow-lg overflow-hidden pt-7 pr-9 pl-8 pb-10 gap-6 bg-gray">
                <Sidebar
                    title="Welcome to ToDo Py"
                    description="Your ultimate task management solution."
                    buttonText="Get Started"
                />

                <WelcomeSection
                    title="Welcome to ToDoPy"
                    description={
                        <>
                            A to-do app is a simple, user-friendly digital tool designed to help
                            individuals and teams organize tasks and manage their daily activities
                            efficiently. Users can create, edit, and prioritize tasks, set deadlines or
                            reminders, categorize items, and track their progress, all within an
                            intuitive and accessible interface. These apps are essential for improving
                            productivity, reducing stress, and ensuring that important responsibilities
                            are not forgotten.
                        </>
                    }
                    buttonText="Go to tasks"
                />
            </div>
        </div>
    );
};

export default HomePage;