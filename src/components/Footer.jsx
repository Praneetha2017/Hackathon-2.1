import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        background: "#4A90E2",
        padding: "15px",
        textAlign: "center",
        color: "white",
        marginTop: "auto",  // <-- This is what sticks it to bottom
      }}
    >
      © 2025 ItihasYatra. All rights reserved.
    </footer>
  );
};

export default Footer;
