import React from "react";
import { useParams } from "react-router-dom";

const data = {
  "Andhra Pradesh": {
    "tourist-places": [
      {
        name: "Tirumala Temple",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Tirumala_021615.jpg",
        desc: "One of the richest and most visited temples in the world.",
        map: "https://maps.app.goo.gl/WQTkwv6Z4aeV9k3t8"
      },
      {
        name: "Araku Valley",
        img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Araku_Valley.jpg",
        desc: "A peaceful hill station surrounded by coffee plantations.",
        map: "https://maps.app.goo.gl/FpUZPrZ2X7Z5zQk47"
      },
      {
        name: "RK Beach, Vizag",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/79/RK_Beach_Visakhapatnam.jpg",
        desc: "A scenic coastal beach known for sunrise views.",
        map: "https://maps.app.goo.gl/GTtKRxJPUcBDH2Xx5"
      }
    ],

    "famous-for": [
      {
        name: "AP Biryani",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/14/Chicken_Biryani.jpg",
        desc: "Famous for spicy biryanis, especially Vijayawada and Hyderabad styles."
      },
      {
        name: "Kuchipudi Dance",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Kuchipudi_Performance.jpg",
        desc: "A classical dance form originating from Andhra Pradesh."
      },
      {
        name: "Mangalgiri & Venkatagiri Sarees",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/78/Mangalagiri_saree.jpg",
        desc: "Handloom sarees popular across India."
      }
    ],

    "hotels": [
      {
        name: "Novotel Vizag",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/21/84/8d/hotel-exterior.jpg",
        desc: "Luxury stay with seaside views.",
        map: "https://maps.app.goo.gl/N5HQ1cFxrTr4cJHcA"
      },
      {
        name: "Taj Tirupati",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c1/91/70/hotel.jpg",
        desc: "Premium hotel near Tirumala.",
        map: "https://maps.app.goo.gl/KuMw5iRdv8n6L1DWA"
      }
    ],

    "trekking-spots": [
      {
        name: "Gandikota Canyon Trek",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/53/Gandikota canyon and fort.jpg",
        desc: "Known as the Grand Canyon of India.",
        map: "https://maps.app.goo.gl/z9Fh8uUzWQxkUfYZ8"
      },
      {
        name: "Horsley Hills Trek",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Horsley_Hills.jpg",
        desc: "Popular hill station with scenic viewpoints.",
        map: "https://maps.app.goo.gl/g8CzWcYWpT5Xxhz76"
      }
    ]
  }
};

const CategoryDetails = () => {
  const { stateName, category } = useParams();
  const info = data[stateName]?.[category] || [];

  const categoryTitle = {
    "tourist-places": "Tourist Places",
    "famous-for": "Famous For",
    "hotels": "Hotels",
    "trekking-spots": "Trekking Spots"
  }[category];

  return (
    <div style={{ padding: "40px" }}>
      <h1>{stateName} — {categoryTitle}</h1>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "25px",
        marginTop: "30px",
        justifyContent: "center"
      }}>
        {info.map((item, i) => (
          <div key={i} style={{
            width: "300px",
            padding: "15px",
            borderRadius: "15px",
            background: "white",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
          }}>
            <img
              src={item.img}
              alt={item.name}
              style={{ width: "100%", borderRadius: "10px", height: "180px", objectFit: "cover" }}
            />
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            {item.map && (
              <a
                href={item.map}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "blue", fontWeight: "bold" }}
              >
                View on Map
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
