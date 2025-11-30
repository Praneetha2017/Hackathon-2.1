import React, { useState } from "react";
import { loginUser } from "../utils/Auth";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const result = loginUser(email, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    // Redirect based on role
    if (result.user.role === "admin") navigate("/admin");
    else navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#eef3ff",
      }}
    >
      <div
        style={{
          width: "350px",
          padding: "25px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "15px", color: "#0b3c8c" }}>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        {error && (
          <p style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}>
            {error}
          </p>
        )}

        <button onClick={handleLogin} style={btnStyle}>
          Login
        </button>

        <p style={{ marginTop: "10px", fontSize: "14px" }}>
          Not a member?
          <Link to="/signup" style={{ color: "#0b3c8c", marginLeft: "5px" }}>
            Signup Now
          </Link>
        </p>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "10px",
  borderRadius: "8px",
  border: "1px solid #d0d0d0",
  outline: "none",
};

const btnStyle = {
  width: "100%",
  padding: "12px",
  background: "#1d5cf2",
  color: "white",
  fontWeight: "bold",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Login;
