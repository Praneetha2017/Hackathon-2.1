import React from "react";
import { useParams } from "react-router-dom";

const StatePlaces = () => {
  const { stateName } = useParams();
  const tourismData = JSON.parse(localStorage.getItem("tourismData")) || {};
  const places = tourismData[stateName] || [];

  return (
    <div className="page">
      <h1>{stateName} – Tourism</h1>

      {places.length === 0 && (
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          No tourism data added for this state yet.
        </p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "25px"
        }}
      >
        {places.map((place, i) => (
          <div
            key={i}
            style={{
              background: "#f8f8f8",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={place.image}
              alt={place.title}
              style={{
                width: "100%",
                height: "170px",
                borderRadius: "10px",
                objectFit: "cover"
              }}
            />
            <h3 style={{ marginTop: "10px" }}>{place.title}</h3>
            <p style={{ fontSize: "14px", color: "#444" }}>{place.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatePlaces;
