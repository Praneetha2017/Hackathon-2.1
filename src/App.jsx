import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Homepage from "./pages/Homepage";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Dashboard from "./pages/Dashboard";

import StateOverview from "./pages/StateOverview";
import CategoryDetails from "./pages/CategoryDetails";

import WomenSafetyRegistration from "./pages/WomenSafetyRegistration";
import AboutWebsitePage from "./pages/AboutWebsitePage";
import ContactInfoPage from "./pages/ContactInfoPage";
import TourGuidePage from "./pages/TourGuidePage";

import { getUser } from "./utils/Auth";

// 🔒 Protect logged-in users
const UserOnly = ({ element }) => {
  const user = getUser();
  if (!user || user.role !== "user") return <Navigate to="/login" />;
  return element;
};

const App = () => {
  const user = getUser();
  const hideNavbarFooter =
    window.location.pathname === "/login" ||
    window.location.pathname === "/signup";

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* Show navbar only if NOT login/signup */}
      {!hideNavbarFooter && <Navbar />}

      <div style={{ flex: 1 }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<UserOnly element={<Dashboard />} />} />

          {/* State Overview */}
          <Route
            path="/state/:stateName"
            element={<UserOnly element={<StateOverview />} />}
          />

          {/* Category Details (Tourist Places / Food / Hotels / Trekking etc.) */}
          <Route
            path="/state/:stateName/:categoryName"
            element={<UserOnly element={<CategoryDetails />} />}
          />

          {/* Other pages */}
          <Route
            path="/tourguide"
            element={<UserOnly element={<TourGuidePage />} />}
          />
          <Route
            path="/womensafety"
            element={<UserOnly element={<WomenSafetyRegistration />} />}
          />
          <Route
            path="/aboutwebsite"
            element={<UserOnly element={<AboutWebsitePage />} />}
          />
          <Route
            path="/contactinfo"
            element={<UserOnly element={<ContactInfoPage />} />}
          />

          {/* Default Redirect */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      {/* Footer visible only outside login/signup */}
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

export default App;
