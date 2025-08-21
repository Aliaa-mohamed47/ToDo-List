import React from "react";
import Sidebar from "../components/Shared/Sidebar";
import UpcomingSection from "../components/UpcomingPage/UpcomingSection";

const UpcomingPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="flex shadow-lg overflow-hidden pt-7 pr-9 pl-8 pb-10 gap-6 bg-gray">
                <Sidebar
                    title="Welcome to ToDo Py"
                    description="Your ultimate task management solution."
                    buttonText="Get Started"
                />

                <UpcomingSection />
            </div>
        </div>
    );
};

export default UpcomingPage;