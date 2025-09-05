import React from "react";
import Sidebar from "../components/Shared/Sidebar";
import TodaySection from "../components/TodayPage/TodaySection";

const TodayPage = () => {
  return (
    <div className="min-h-screen flex bg-white">
      <div className="flex flex-col lg:flex-row p-6 gap-6 bg-white w-full max-w-6xl mx-auto">
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
