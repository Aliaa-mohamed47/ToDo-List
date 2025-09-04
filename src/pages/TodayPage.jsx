import React from "react";
import Sidebar from "../components/Shared/Sidebar";
import TodaySection from "../components/TodayPage/TodaySection";

const TodayPage = () => {
  return (
    <div className="min-h-screen flex bg-white">
      <div className="flex shadow-lg pt-4 pr-6 pl-4 pb-6 gap-6 bg-white ml-6 w-full max-w-6xl">
        <Sidebar
          title="Welcome to ToDo Py"
          description="Your ultimate task management solution."
          buttonText="Get Started"
          className="flex-shrink-0"
        />

        <TodaySection />
      </div>
    </div>
  );
};

export default TodayPage;
