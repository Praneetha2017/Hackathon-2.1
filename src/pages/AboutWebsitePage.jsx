import React from "react";

const AboutWebsitePage = () => {
  return (
    <div className="page" style={{ maxWidth: "800px", margin: "auto" }}>
      <h1>About ItihasYatra</h1>

      <p style={{ marginTop: "15px", fontSize: "17px", lineHeight: "27px" }}>
        ItihasYatra helps travelers explore India’s cultural and historical
        heritage with detailed guides, tourism data, and curated experiences.
      </p>

      <div
        style={{
          marginTop: "30px",
          background: "#f8f8f8",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.15)"
        }}
      >
        <h3>Main Features</h3>
        <ul style={{ textAlign: "left", marginTop: "15px" }}>
          <li>State-wise tourism data</li>
          <li>Tour guide assistance</li>
          <li>Women safety support</li>
          <li>Admin-managed content</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutWebsitePage;
