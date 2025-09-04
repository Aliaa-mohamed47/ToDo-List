import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import App from "./App.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import HomePage from "./pages/HomePage.jsx";
import UpcomingPage from "./pages/UpcomingPage.jsx";
import TodayPage from "./pages/TodayPage.jsx";
import CalendarPage from "./pages/CalendarPage.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="HomePage" element={<HomePage />} />
          <Route path="UpcomingPage" element={<UpcomingPage />} />
          <Route path="TodayPage" element={<TodayPage />} />
          <Route path="CalendarPage" element={<CalendarPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
