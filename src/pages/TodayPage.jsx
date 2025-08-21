import React from "react";
import Sidebar from "../components/Shared/Sidebar";
import TodaySection from "../components/TodayPage/TodaySection";

const TodayPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="flex shadow-lg overflow-hidden pt-7 pr-9 pl-8 pb-10 gap-6 bg-gray">
                <Sidebar
                    title="Welcome to ToDo Py"
                    description="Your ultimate task management solution."
                    buttonText="Get Started"
                />

                <TodaySection />
            </div>
        </div>
    );
};

export default TodayPage;