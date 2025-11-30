import React, { useState } from "react";
import { signupUser } from "../utils/Auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const newUser = { fullName, email, password, role };

    const result = signupUser(newUser);

    if (!result.success) {
      setError(result.message);
      return;
    }

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#EEF3FF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "60px", // so navbar doesn't overlap
      }}
    >
      <div
        style={{
          width: "380px",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#1d4ed8" }}>Signup</h2>

        <form onSubmit={handleSignup}>
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            style={inputStyle}
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />

          {/* Role Dropdown */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{
              ...inputStyle,
              height: "45px",
            }}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          {/* Error Message */}
          {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#1E63E9",
              color: "white",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            Create Account
          </button>

          {/* Redirect */}
          <p style={{ marginTop: "12px", fontSize: "14px" }}>
            Already have an account?{" "}
            <a href="/login" style={{ color: "#1E63E9", fontWeight: "bold" }}>
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

// Input style (shared)
const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #d0d7e2",
  fontSize: "14px",
};

export default Signup;
