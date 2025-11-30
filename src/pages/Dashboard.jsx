import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [stateName, setStateName] = useState("");

  const states = [
    "Andhra Pradesh",
    "Telangana",
    "Tamil Nadu",
    "Karnataka",
    "Kerala",
    "Maharashtra",
    "Gujarat",
    "Rajasthan",
    "Uttar Pradesh",
    "Madhya Pradesh",
  ];

  const handleContinue = () => {
    if (!stateName) {
      alert("Please select a state!");
      return;
    }
    navigate(`/state/${stateName}`);
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ color: "#0b3c8c", marginBottom: "10px" }}>🌍 Explore Incredible INDIA</h1>
      <p style={{ color: "#555", marginBottom: "30px" }}>
        Plan your next historical and cultural journey
      </p>

      <div
        style={{
          maxWidth: "450px",
          margin: "0 auto",
          padding: "30px",
          background: "#E8F2FF",
          borderRadius: "15px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ marginBottom: "20px", color: "#1d4ed8" }}>
          Choose Your Destination
        </h3>

        <select
          value={stateName}
          onChange={(e) => setStateName(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "20px",
            fontSize: "16px",
          }}
        >
          <option value="">Select a State</option>
          {states.map((state, idx) => (
            <option key={idx} value={state}>
              {state}
            </option>
          ))}
        </select>

        <button
          onClick={handleContinue}
          style={{
            width: "100%",
            padding: "12px",
            background: "#1d4ed8",
            color: "white",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
