import React from "react";
import first from "../../assets/recommend/first.jpg";
import second from "../../assets/recommend/second.jpg";
import third from "../../assets/recommend/third.jpg";
import fourth from "../../assets/recommend/fourth.jpg";
import fifth from "../../assets/recommend/fifth.jpg";

const ImageWithLabel = ({ imageSrc, label, isEven }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      margin: "10px",
      padding: "20px",
      border: "2px solid #ddd",
      borderRadius: "10px",
      background: "#f9f9f9",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px",
    }}>
    <div style={{ flex: 1, order: isEven ? 1 : 2 }}>
      <img
        src={imageSrc}
        alt={label}
        style={{
          width: "200px",
          height: "200px",
          display: "block",
          borderRadius: "8px",
        }}
      />
    </div>
    <div style={{ flex: 1, order: isEven ? 2 : 1, padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.5em",
          fontWeight: "bold",
          color: "#333",
        }}>
        {label}
      </div>
    </div>
  </div>
);

const RecommendedComponent = () => {
  return (
    <div>
      <ImageWithLabel imageSrc={first} label="Beautiful" isEven={true} />
      <ImageWithLabel imageSrc={second} label="Warm" isEven={false} />
      <ImageWithLabel imageSrc={third} label="Close to nature" isEven={true} />
      <ImageWithLabel imageSrc={fourth} label="Cozy" isEven={false} />
      <ImageWithLabel imageSrc={fifth} label="Futuristic" isEven={true} />
    </div>
  );
};

export default RecommendedComponent;
