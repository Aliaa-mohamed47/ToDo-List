import React from "react";
import Sidebar from "../components/Shared/Sidebar";
import CalendarSection from "../components/CalendarPage/CalendarSection";

const CalendarPage = () => {
  return (
    <div className="min-h-screen flex bg-white">
      <div className="flex flex-col lg:flex-row p-6 gap-6 bg-white w-full ml-0 lg:ml-6">
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
