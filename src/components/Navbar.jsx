import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutUser, getUser } from "../utils/Auth";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = getUser();

  // Show ONLY logo when on login or signup
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div
      style={{
        width: "100%",
        background: "#4A90E2",
        padding: "10px 25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
      }}
    >
      {/* LOGO */}
      <h2 style={{ margin: 0, fontSize: "22px" }}>
        <Link
          to={user ? "/dashboard" : "/"}
          style={{ color: "white", textDecoration: "none" }}
        >
          ItihasYatra
        </Link>
      </h2>

      {/* HIDE MENU ON LOGIN & SIGNUP PAGES */}
      {!isAuthPage && user && user.role === "user" && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: "16px",
          }}
        >
          <Link to="/tourguide" style={{ color: "white", textDecoration: "none" }}>
            Tour Guide
          </Link>

          <Link
            to="/womensafety"
            style={{ color: "white", textDecoration: "none" }}
          >
            Women Safety
          </Link>

          <Link to="/aboutwebsite" style={{ color: "white", textDecoration: "none" }}>
            About
          </Link>

          <Link to="/contactinfo" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </Link>

          <button
            onClick={handleLogout}
            style={{
              background: "white",
              color: "#4A90E2",
              border: "none",
              padding: "5px 20px",
              borderRadius: "20px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
