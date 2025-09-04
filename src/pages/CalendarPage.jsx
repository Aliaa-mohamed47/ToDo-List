import React from "react";
import Sidebar from "../components/Shared/Sidebar";
import CalendarSection from "../components/CalendarPage/CalendarSection";

const CalendarPage = () => {
  return (
    <div className="min-h-screen flex bg-white">
      <div className="flex shadow-lg pt-4 pr-6 pl-4 pb-6 gap-6 bg-white ml-6 w-full">
        <Sidebar
          title="Welcome to ToDo Py"
          description="Your ultimate task management solution."
          buttonText="Get Started"
        />

        <CalendarSection />
      </div>
    </div>
  );
};

export default CalendarPage;
