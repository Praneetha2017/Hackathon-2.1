import React, { useState } from "react";

const WomenSafetyRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    emergencyContact: "",
    relation: "",
    city: "",
    address: "",
  });

  const [locationStatus, setLocationStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitDetails = () => {
    alert("Emergency details submitted successfully!");
  };

  // 🌍 SAFETY TRACKING FEATURE
  const requestSafetyTracking = () => {
    if (!navigator.geolocation) {
      alert("Your device does not support location access");
      return;
    }

    setLocationStatus("Requesting location...");

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const locationData = {
          name: formData.name || "Unknown User",
          phone: formData.phone || "N/A",
          lat: pos.coords.latitude,
          long: pos.coords.longitude,
          time: new Date().toLocaleString(),
        };

        // Save in localStorage for admin portal
        const existing = JSON.parse(localStorage.getItem("trackRequests")) || [];
        existing.push(locationData);
        localStorage.setItem("trackRequests", JSON.stringify(existing));

        setLocationStatus("📍 Location Shared with Admin!");
      },
      () => {
        setLocationStatus("❌ Permission Denied. Enable location.");
      }
    );
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1 style={{ color: "#0B3D91" }}>Women Safety Registration</h1>
      <p style={{ marginBottom: "20px" }}>
        Register your emergency details for safer travel.
      </p>

      <div style={styles.card}>
        <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} style={styles.input} />
        <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} style={styles.input} />
        <input name="emergencyContact" placeholder="Emergency Contact Number" value={formData.emergencyContact} onChange={handleChange} style={styles.input} />
        <input name="relation" placeholder="Relation with Emergency Contact" value={formData.relation} onChange={handleChange} style={styles.input} />
        <input name="city" placeholder="City" value={formData.city} onChange={handleChange} style={styles.input} />
        <textarea name="address" placeholder="Full Address" value={formData.address} onChange={handleChange} style={styles.textarea}></textarea>

        <button style={styles.button} onClick={submitDetails}>
          Submit Details
        </button>

        {/* NEW SAFETY TRACKING BUTTON */}
        <button style={styles.trackButton} onClick={requestSafetyTracking}>
          Request Safety Tracking
        </button>

        {locationStatus && <p style={{ marginTop: "10px", color: "#0A56C2" }}>{locationStatus}</p>}
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "400px",
    background: "#eef5ff",
    padding: "25px",
    borderRadius: "16px",
    margin: "auto",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    height: "70px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "12px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#0B3D91",
    color: "#fff",
    borderRadius: "8px",
    marginTop: "10px",
    cursor: "pointer",
    fontSize: "16px",
  },
  trackButton: {
    width: "100%",
    padding: "12px",
    background: "#1E63D1",
    color: "#fff",
    borderRadius: "8px",
    marginTop: "15px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default WomenSafetyRegistration;
