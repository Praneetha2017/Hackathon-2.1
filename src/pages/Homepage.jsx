import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "80px",
        paddingBottom: "60px",
      }}
    >
      <h1 style={{ fontSize: "34px", fontWeight: "bold", color: "#0B3D91" }}>
        Welcome to ItihasYatra
      </h1>

      <p style={{ fontSize: "18px", color: "#555", marginBottom: "40px" }}>
        Explore the rich heritage and historical wonders of India.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <button
          onClick={() => navigate("/login")}
          style={styles.loginBtn}
        >
          Login
        </button>

        <button
          onClick={() => navigate("/signup")}
          style={styles.signupBtn}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

const styles = {
  loginBtn: {
    padding: "12px 28px",
    background: "#1E63D1",
    color: "white",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
  signupBtn: {
    padding: "12px 28px",
    background: "white",
    border: "2px solid #1E63D1",
    color: "#1E63D1",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Homepage;
