import React from "react";
import Sidebar from "../components/Shared/Sidebar";
import UpcomingSection from "../components/UpcomingPage/UpcomingSection";

const UpcomingPage = () => {
  return (
    <div className="min-h-screen flex bg-white">
      <div className="flex flex-col lg:flex-row shadow-lg p-6 gap-6 bg-white w-full ml-0 lg:ml-6">
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
