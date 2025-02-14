import React, { useState } from "react";
import familyData from "../Family_Cat/Family_Data"; // Import the data

const Welcome = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#242424",
    padding: "20px",
  };

  const headerStyle = {
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "40px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "90%",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: "20px",
  };

  const buttonsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "15px",
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>{familyData.title}</h1>

        <div style={buttonsContainerStyle}>
          {familyData.members.map((member, index) => (
            <a
              key={index}
              href={member.link}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onMouseDown={() => setClickedIndex(index)}
              onMouseUp={() => setClickedIndex(null)}
              style={{
                width: "150px",
                height: "80px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                fontWeight: "600",
                borderRadius: "8px",
                textAlign: "center",
                transition: "background-color 0.3s ease, transform 0.2s ease",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: member.color || "black",
                backgroundImage: `url('${member.image}')`,
                transform: clickedIndex === index ? "scale(0.95)" : hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                filter: hoveredIndex === index ? "brightness(1.2)" : "brightness(1)",
              }}
            >
              {member.name}
            </a>
          ))}
        </div>
      </header>
    </div>
  );
};

export default Welcome;
