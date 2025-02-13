import React from "react";
import familyData from "../Family/Family_Data"; // Import the data

const Welcome = () => {
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
    backgroundColor: "white",
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

  const buttonStyle = {
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
    color: "black",
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
              style={{
                ...buttonStyle,
                backgroundImage: `url('${member.image}')`,
                color: member.color || "black",
              }}
            >
              {member.name}
            </a>
          ))}
        </div>

        {/* Family Tree */}
        <div style={{ marginTop: "30px", textAlign: "center", width: "100%" }}>
          {/* Parents */}
          <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "15px" }}>
            {familyData.parents.map((parent, index) => (
              <div
                key={index}
                style={{
                  fontWeight: "bold",
                  backgroundColor: parent.bgColor,
                  padding: "10px",
                  borderRadius: "6px",
                  flex: 1,
                  maxWidth: "180px",
                }}
              >
                {parent.name}
              </div>
            ))}
          </div>

          {/* Siblings */}
          <div style={buttonsContainerStyle}>
            {familyData.siblings.map((sibling, index) => (
              <a
                key={index}
                href={sibling.link}
                style={{
                  ...buttonStyle,
                  backgroundImage: `url('${sibling.image}')`,
                }}
              >
                {sibling.name}
              </a>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Welcome;
