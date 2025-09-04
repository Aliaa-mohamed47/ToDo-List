import React from "react";
import Sidebar from "../components/Shared/Sidebar";
import UpcomingSection from "../components/UpcomingPage/UpcomingSection";

const UpcomingPage = () => {
  return (
    <div className="min-h-screen flex bg-white">
      <div className="flex shadow-lg pt-4 pr-6 pl-4 pb-6 gap-6 bg-white ml-6 w-full">
        {/* Sidebar */}
        <Sidebar
          title="Welcome to ToDo Py"
          description="Your ultimate task management solution."
          buttonText="Get Started"
        />

        {/* Upcoming Section */}
        <UpcomingSection />
      </div>
    </div>
  );
};

export default UpcomingPage;
