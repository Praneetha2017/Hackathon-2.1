import React, { useState } from "react";

const STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const ManageInfo = () => {
  const [place, setPlace] = useState({
    state: "",
    title: "",
    image: "",
    description: ""
  });

  const tourismData =
    JSON.parse(localStorage.getItem("tourismData")) || {};

  const addPlace = () => {
    if (!place.state || !place.title || !place.image || !place.description) {
      return alert("Fill all fields!");
    }

    if (!tourismData[place.state]) tourismData[place.state] = [];

    tourismData[place.state].push({
      title: place.title,
      image: place.image,
      description: place.description
    });

    localStorage.setItem("tourismData", JSON.stringify(tourismData));
    alert("Place added!");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ color: "#0c3590ff" }}>Add Tourism Place</h1>

      <select
        style={{ width: "300px", padding: "10px", marginTop: "10px" }}
        onChange={(e) => setPlace({ ...place, state: e.target.value })}
      >
        <option value="">Select State</option>
        {STATES.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Place Title"
        style={{ width: "300px", padding: "10px", marginTop: "10px" }}
        onChange={(e) => setPlace({ ...place, title: e.target.value })}
      />

      <input
        type="text"
        placeholder="Image URL"
        style={{ width: "300px", padding: "10px", marginTop: "10px" }}
        onChange={(e) => setPlace({ ...place, image: e.target.value })}
      />

      <textarea
        placeholder="Description"
        style={{ width: "300px", padding: "10px", marginTop: "10px", height: "80px" }}
        onChange={(e) => setPlace({ ...place, description: e.target.value })}
      />

      <button
        onClick={addPlace}
        style={{
          background: "#0c3590ff",
          color: "white",
          padding: "10px 20px",
          marginTop: "15px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Add Place
      </button>
    </div>
  );
};

export default ManageInfo;
