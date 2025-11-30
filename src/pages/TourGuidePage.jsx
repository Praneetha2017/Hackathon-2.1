import React from "react";
import { Link } from "react-router-dom";

const TourGuidePage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>Tour Guide Assistance</h1>
      <p style={{ fontSize: "18px", marginTop: "10px" }}>
        Explore available tour guides or apply to become one.
      </p>

      <div
        style={{
          width: "60%",
          margin: "40px auto",
          background: "#f5f5f5",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h3>Available Tour Guides</h3>
        <p>(Admin will add guides here)</p>
      </div>

      <Link to="/apply-tour-guide">
        <button
          style={{
            padding: "12px 30px",
            background: "#2576F6",
            color: "white",
            fontSize: "17px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Apply as Tour Guide
        </button>
      </Link>
    </div>
  );
};

export default TourGuidePage;
