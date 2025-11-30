import React from "react";

const ContactInfoPage = () => {
  return (
    <div className="page">
      <h1>Contact Information</h1>

      <div
        style={{
          marginTop: "30px",
          background: "#f8f8f8",
          padding: "25px",
          borderRadius: "12px",
          maxWidth: "500px",
          margin: "30px auto",
          boxShadow: "0 3px 10px rgba(0,0,0,0.15)"
        }}
      >
        <p><strong>Email:</strong> support@itihasyatra.in</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Location:</strong> Hyderabad, Telangana, India</p>
      </div>
    </div>
  );
};

export default ContactInfoPage;
