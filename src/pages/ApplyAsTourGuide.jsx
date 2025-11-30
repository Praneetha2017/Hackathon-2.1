import React, { useState } from "react";

const ApplyAsTourGuide = () => {
  const [details, setDetails] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    experience: "",
    languages: "",
    state: "",
    idproof: "",
    description: ""
  });

  const submitForm = () => {
    // Basic validation
    for (let key in details) {
      if (details[key] === "") {
        return alert("Please fill all fields before submitting!");
      }
    }

    // Save locally (can later send to admin)
    const applications =
      JSON.parse(localStorage.getItem("tourguideApplications")) || [];

    applications.push(details);
    localStorage.setItem("tourguideApplications", JSON.stringify(applications));

    alert("Your application has been submitted!");
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ color: "#0c6ab1ff" }}>Apply as a Tour Guide</h1>

      <p style={{ marginTop: "15px", fontSize: "17px" }}>
        Fill the form below to register as a certified tour guide.
      </p>

      <div
        style={{
          marginTop: "30px",
          background: "#FFE1BF",
          padding: "25px",
          borderRadius: "12px",
          maxWidth: "600px",
          margin: "30px auto",
          boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
          textAlign: "left"
        }}
      >
        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          style={{ width: "100%", padding: "12px", marginTop: "10px", borderRadius: "8px" }}
        />

        {/* Age */}
        <input
          type="number"
          placeholder="Age"
          onChange={(e) => setDetails({ ...details, age: e.target.value })}
          style={{ width: "100%", padding: "12px", marginTop: "10px", borderRadius: "8px" }}
        />

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone Number"
          onChange={(e) => setDetails({ ...details, phone: e.target.value })}
          style={{ width: "100%", padding: "12px", marginTop: "10px", borderRadius: "8px" }}
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          style={{ width: "100%", padding: "12px", marginTop: "10px", borderRadius: "8px" }}
        />

        {/* Experience */}
        <input
          type="text"
          placeholder="Experience (in years)"
          onChange={(e) => setDetails({ ...details, experience: e.target.value })}
          style={{ width: "100%", padding: "12px", marginTop: "10px", borderRadius: "8px" }}
        />

        {/* Languages Known */}
        <input
          type="text"
          placeholder="Languages Known (e.g. English, Hindi)"
          onChange={(e) => setDetails({ ...details, languages: e.target.value })}
          style={{ width: "100%", padding: "12px", marginTop: "10px", borderRadius: "8px" }}
        />

        {/* State */}
        <input
          type="text"
          placeholder="State"
          onChange={(e) => setDetails({ ...details, state: e.target.value })}
          style={{ width: "100%", padding: "12px", marginTop: "10px", borderRadius: "8px" }}
        />

        {/* ID Proof URL */}
        <input
          type="text"
          placeholder="Upload ID Proof (Paste Image URL)"
          onChange={(e) => setDetails({ ...details, idproof: e.target.value })}
          style={{ width: "100%", padding: "12px", marginTop: "10px", borderRadius: "8px" }}
        />

        {/* Description */}
        <textarea
          placeholder="Why do you want to become a tour guide?"
          onChange={(e) => setDetails({ ...details, description: e.target.value })}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            borderRadius: "8px",
            height: "90px"
          }}
        />

        {/* Submit Button */}
        <button
          onClick={submitForm}
          style={{
            marginTop: "20px",
            background: "#0c3590ff",
            color: "white",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            width: "100%"
          }}
        >
          Submit Application
        </button>
      </div>
    </div>
  );
};

export default ApplyAsTourGuide;
