import React from "react";
import { Link } from "react-router-dom";

const TourGuidePage = () => {
  return (
    <div className="page">
      <h1>Tour Guide Assistance</h1>

      <p style={{ fontSize: "17px", marginTop: "10px" }}>
        Explore available tour guides or apply to become one.
      </p>

      <div
        style={{
          marginTop: "30px",
          background: "#f8f8f8",
          padding: "20px",
          borderRadius: "12px",
          maxWidth: "600px",
          margin: "30px auto",
          boxShadow: "0 3px 10px rgba(0,0,0,0.15)"
        }}
      >
        <h3>Available Tour Guides</h3>
        <p>(Admin will add guides here)</p>
      </div>

      <Link
        to="/applytourguide"
        style={{
          background: "#4A90E2",
          padding: "12px 20px",
          color: "white",
          borderRadius: "10px",
          marginTop: "20px",
          display: "inline-block"
        }}
      >
        Apply as Tour Guide
      </Link>
    </div>
  );
};

export default TourGuidePage;
