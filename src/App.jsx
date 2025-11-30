import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/SignUp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import StateOverview from "./pages/StateOverview";
import StatePlaces from "./pages/StatePlaces";

import TourGuidePage from "./pages/TourGuidePage";
import ApplyAsTourGuide from "./pages/ApplyAsTourGuide";

import WomenSafetyRegistration from "./pages/WomenSafetyRegistration";
import AboutWebsitePage from "./pages/AboutWebsitePage";
import ContactInfoPage from "./pages/ContactInfoPage";

import { getUser } from "./utils/Auth";

// Protect user-only pages
const UserOnly = ({ element }) => {
  const user = getUser();
  if (!user || user.role !== "user") return <Navigate to="/login" />;
  return element;
};

const App = () => {
  const hideNav =
    window.location.pathname === "/login" ||
    window.location.pathname === "/signup";

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      {!hideNav && <Navbar />}

      <div style={{ flex: 1 }}>
        <Routes>

          {/* PUBLIC */}
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* DASHBOARD */}
          <Route path="/dashboard" element={<UserOnly element={<Dashboard />} />} />

          {/* STATES */}
          <Route path="/state/:stateName" element={<UserOnly element={<StateOverview />} />} />
          <Route path="/state/:stateName/places" element={<UserOnly element={<StatePlaces />} />} />

          {/* TOURGUIDE */}
          <Route path="/tourguide" element={<UserOnly element={<TourGuidePage />} />} />
          <Route path="/apply-tour-guide" element={<UserOnly element={<ApplyAsTourGuide />} />} />

          {/* WOMEN SAFETY */}
          <Route path="/womensafety" element={<UserOnly element={<WomenSafetyRegistration />} />} />

          {/* ABOUT & CONTACT (User Only) */}
          <Route path="/about" element={<UserOnly element={<AboutWebsitePage />} />} />
          <Route path="/contact" element={<UserOnly element={<ContactInfoPage />} />} />

          {/* FALLBACK */}
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </div>

      {!hideNav && <Footer />}
    </div>
  );
};

export default App;
