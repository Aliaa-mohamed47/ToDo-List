import React, { useRef, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Link } from "react-router";

const CalendarSection = () => {
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [today, setToday] = useState("");
  const [activeView, setActiveView] = useState("timeGridDay");

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    setToday(`${day} ${month} ${year}`);
  }, []);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const key = currentUser ? `tasks_${currentUser.email}` : "tasks_guest";

    try {
      const savedTasks = JSON.parse(localStorage.getItem(key)) || {
        today: [],
        tomorrow: [],
        thisWeek: [],
      };
      const loadedEvents = [];

      Object.keys(savedTasks).forEach((section) => {
        savedTasks[section].forEach((task) => {
          if (task.date && task.time) {
            const dateTime = new Date(`${task.date}T${task.time}`);
            loadedEvents.push({
              title: task.text,
              start: dateTime.toISOString(),
              allDay: false,
            });
          }
        });
      });

      setEvents(loadedEvents);
    } catch (err) {
      console.error("Error loading tasks:", err);
    }
  }, []);

  function changeView(view) {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView(view);
    setActiveView(view);
  }

  return (
    <div className="p-8 w-full">
      <div className="flex items-center justify-between gap-2 mb-4">
        <h1 className="text-3xl font-bold text-gray-800">{today}</h1>
        <Link
          to="/UpcomingPage"
          className="px-4 py-2 border-2 border-gray-dark text-gray-dark font-semibold rounded-full transition"
        >
          Add Event
        </Link>
      </div>

      <div className="flex justify-start mb-6">
        <div className="flex gap-2 bg-gray-200 rounded-xl p-1.5">
          <button
            onClick={() => changeView("timeGridDay")}
            className={`px-3 py-1.5 rounded-full font-semibold text-sm ${
              activeView === "timeGridDay"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
          >
            Day
          </button>
          <button
            onClick={() => changeView("timeGridWeek")}
            className={`px-3 py-1.5 rounded-full font-semibold text-sm ${
              activeView === "timeGridWeek"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
          >
            Week
          </button>
          <button
            onClick={() => changeView("dayGridMonth")}
            className={`px-3 py-1.5 rounded-full font-semibold text-sm ${
              activeView === "dayGridMonth"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
          >
            Month
          </button>
        </div>
      </div>

      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridDay"
        events={events}
        height="85vh"
        displayEventTime={activeView !== "dayGridMonth"}
        eventTimeFormat={
          activeView === "timeGridDay" || activeView === "timeGridWeek"
            ? { hour: "2-digit", minute: "2-digit", hour12: false }
            : undefined
        }
        dayMaxEventRows={true}
      />
    </div>
  );
};

export default CalendarSection;
