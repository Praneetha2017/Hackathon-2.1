import React from "react";
import { useParams } from "react-router-dom";

// ---------- STATE DETAILS (5 STATES WITH HOTELS & BEST TIME) ----------
const stateDetails = {
  andhrapradesh: {
    title: "Andhra Pradesh",
    about:
      "Andhra Pradesh is known for Tirupati Temple, Vizag beaches, Araku Valley, Kuchipudi dance, and rich cultural heritage.",
    monuments: [
      "🛕 Tirumala Temple",
      "🏖 RK Beach (Vizag)",
      "⛰ Araku Valley",
      "📜 Amaravati Stupa",
      "🏰 Gandikota Fort"
    ],
    famousFor: [
      "🍛 Andhra Meals & Biryani",
      "🎭 Kuchipudi Dance",
      "🍬 Pootharekulu Sweet",
      "🐟 Fresh Seafood",
      "🚤 Godavari Boat Houses"
    ],
    hotels: [
      "🏨 Dolphin Hotel – Vizag",
      "🏨 Daspalla Hotel",
      "🏨 Haritha Resorts",
      "🏨 Tirupati Srinivasa Residency",
      "🏨 Raj Residency Vijayawada"
    ],
    bestTime: "October to February",
    map: "https://www.google.com/maps/place/Andhra+Pradesh",
    images: "https://www.google.com/search?tbm=isch&q=Andhra+Pradesh+tourist+places",
    safety: "YES"
  },

  telangana: {
    title: "Telangana",
    about:
      "Telangana is home to Hyderabad, Charminar, Ramoji Film City, IT hubs, lakes, and iconic biryani.",
    monuments: [
      "🏛 Charminar",
      "🏰 Golconda Fort",
      "🕌 Mecca Masjid",
      "🏞 Hussain Sagar",
      "🎬 Ramoji Film City"
    ],
    famousFor: [
      "🍛 Hyderabadi Biryani",
      "💻 IT Hub (Hitech City)",
      "📿 Pearls Market",
      "🛍 Laad Bazaar",
      "🎉 Bathukamma Festival"
    ],
    hotels: [
      "🏨 ITC Kakatiya",
      "🏨 Taj Deccan",
      "🏨 Novotel Airport",
      "🏨 Minerva Grand",
      "🏨 Haritha Tourism Hotels"
    ],
    bestTime: "October to February",
    map: "https://www.google.com/maps/place/Telangana",
    images: "https://www.google.com/search?tbm=isch&q=Telangana+tourist+places",
    safety: "YES"
  },

  karnataka: {
    title: "Karnataka",
    about:
      "Karnataka is known for Bengaluru IT city, Mysore Palace, Coorg hills, Hampi ruins, and diverse wildlife.",
    monuments: [
      "🏰 Mysore Palace",
      "🛕 Hampi Ruins",
      "🌄 Coorg Hills",
      "🏞 Jog Falls",
      "🕌 Gol Gumbaz"
    ],
    famousFor: [
      "☕ Coorg Coffee",
      "🍛 Udupi Cuisine",
      "💻 Tech Industry",
      "🎭 Yakshagana",
      "🎉 Dasara Festival"
    ],
    hotels: [
      "🏨 Royal Orchid Bangalore",
      "🏨 Windflower Resorts Coorg",
      "🏨 Radisson Blu Mysore",
      "🏨 FabHotel Budget Rooms",
      "🏨 Taj Vivanta"
    ],
    bestTime: "September to March",
    map: "https://www.google.com/maps/place/Karnataka",
    images: "https://www.google.com/search?tbm=isch&q=Karnataka+tourist+places",
    safety: "YES"
  },

  tamilnadu: {
    title: "Tamil Nadu",
    about:
      "Tamil Nadu is rich in temples, classical arts, beaches, hill stations, and Tamil cultural heritage.",
    monuments: [
      "🛕 Meenakshi Temple",
      "🏛 Mahabalipuram",
      "🌄 Ooty",
      "🌊 Marina Beach",
      "🛕 Brihadeeswara Temple"
    ],
    famousFor: [
      "🍛 Filter Coffee",
      "🎭 Bharatanatyam",
      "🍽 Tamil Cuisine",
      "👗 Kanchipuram Silk",
      "🎉 Pongal Festival"
    ],
    hotels: [
      "🏨 Courtyard Marriott Chennai",
      "🏨 Residency Towers",
      "🏨 Ooty Fern Hill Resort",
      "🏨 Le Meridien Coimbatore",
      "🏨 Budget Haritha Hotels"
    ],
    bestTime: "November to March",
    map: "https://www.google.com/maps/place/Tamil+Nadu",
    images: "https://www.google.com/search?tbm=isch&q=Tamil+Nadu+tourist+places",
    safety: "YES"
  },

  kerala: {
    title: "Kerala",
    about:
      "Kerala, God's Own Country, is famous for its backwaters, beaches, tea estates, Ayurveda, and wildlife.",
    monuments: [
      "⛵ Alleppey Backwaters",
      "🌄 Munnar Hills",
      "⚓ Kochi Fort",
      "🏖 Kovalam Beach",
      "🐘 Periyar Sanctuary"
    ],
    famousFor: [
      "🚤 Houseboats",
      "🍛 Kerala Sadya",
      "💆 Ayurveda",
      "🌴 Coconut Groves",
      "🎉 Onam Festival"
    ],
    hotels: [
      "🏨 Munnar Tea County",
      "🏨 Taj Malabar Kochi",
      "🏨 Leela Kovalam",
      "🏨 Ginger Trivandrum",
      "🏨 KTDC Hotels"
    ],
    bestTime: "October to February",
    map: "https://www.google.com/maps/place/Kerala",
    images: "https://www.google.com/search?tbm=isch&q=Kerala+tourist+places",
    safety: "YES"
  }
};

const StateOverview = () => {
  const { stateName } = useParams();

  const key = stateName.replace(/\s+/g, "").toLowerCase();
  const data = stateDetails[key];

  if (!data) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        No data found for this state.
      </h2>
    );
  }

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1 style={{ fontSize: "32px", color: "#0B3D91" }}>
        Welcome! Let's Explore {data.title} 🌟
      </h1>

      {/* -------- CARDS CONTAINER -------- */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginTop: "40px",
          flexWrap: "wrap"
        }}
      >
        {/* Card 1 — Monuments */}
        <div
          style={{
            width: "280px",
            padding: "20px",
            borderRadius: "12px",
            background: "#F3F7FF",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)"
          }}
        >
          <h3 style={{ color: "#003B8E" }}>🏛 Monuments</h3>
          {data.monuments.map((m, i) => (
            <p key={i} style={{ fontSize: "17px" }}>{m}</p>
          ))}
        </div>

        {/* Card 2 — Famous For */}
        <div
          style={{
            width: "280px",
            padding: "20px",
            borderRadius: "12px",
            background: "#F3FFF7",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)"
          }}
        >
          <h3 style={{ color: "#006B4F" }}>⭐ Famous For</h3>
          {data.famousFor.map((f, i) => (
            <p key={i} style={{ fontSize: "17px" }}>{f}</p>
          ))}
        </div>

        {/* Card 3 — Map */}
        <div
          style={{
            width: "280px",
            padding: "20px",
            borderRadius: "12px",
            background: "#FFF7F3",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)"
          }}
        >
          <h3 style={{ color: "#8A1C00" }}>🗺 Map Access</h3>
          <a
            href={data.map}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              background: "#FF6B35",
              color: "white",
              padding: "10px 20px",
              borderRadius: "8px",
              display: "inline-block",
              marginTop: "15px"
            }}
          >
            Open in Google Maps
          </a>
        </div>

        {/* Card 4 — Hotels & Best Time */}
        <div
          style={{
            width: "280px",
            padding: "20px",
            borderRadius: "12px",
            background: "#F0F9FF",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)"
          }}
        >
          <h3 style={{ color: "#005C99" }}>🏨 Hotels & Timing</h3>

          <p style={{ fontWeight: "bold", marginTop: "10px" }}>Budget Hotels:</p>
          {data.hotels.map((h, i) => (
            <p key={i} style={{ fontSize: "16px" }}>{h}</p>
          ))}

          <p style={{ fontWeight: "bold", marginTop: "10px" }}>Best Time:</p>
          <p style={{ fontSize: "16px" }}>{data.bestTime}</p>
        </div>
      </div>

      {/* -------- ABOUT SECTION -------- */}
      <div
        style={{
          marginTop: "50px",
          maxWidth: "800px",
          margin: "auto",
          fontSize: "18px",
          lineHeight: "1.6",
          color: "#333"
        }}
      >
        <h2 style={{ color: "#0B3D91" }}>About {data.title}</h2>
        <p>{data.about}</p>
      </div>

      {/* -------- IMAGES LINK -------- */}
      <div style={{ marginTop: "30px", fontSize: "18px" }}>
        <p>
          📸 <strong>For reference images of {data.title}, visit:</strong>
        </p>
        <a
          href={data.images}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#004AAD",
            textDecoration: "underline",
            fontSize: "18px"
          }}
        >
          {data.title} Tourist Images
        </a>
      </div>

      {/* -------- WOMEN SAFETY -------- */}
      <div
        style={{
          marginTop: "25px",
          padding: "15px",
          background: "#F3F7FF",
          display: "inline-block",
          borderRadius: "10px",
          fontSize: "18px"
        }}
      >
        <strong>Women Safety Rating:</strong> <br />
        Safe for Solo Women Travelling:{" "}
        <span style={{ color: "green", fontWeight: "bold" }}>{data.safety}</span>
      </div>
    </div>
  );
};

export default StateOverview;
