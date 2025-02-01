import React from 'react';

const Welcome = () => {
  const containerStyle = {
    height: "100%",
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
    width: "100%",
    maxWidth: "600px",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: "30px",
  };

  const buttonsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  };

  const buttonStyle = {
    textDecoration: "none",
    display: "inline-block",
    padding: "12px 20px",
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#fff",
    backgroundColor: "#4CAF50",
    borderRadius: "8px",
    textAlign: "center",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#45a049",
    transform: "translateY(-3px)",
  };

  const buttonActiveStyle = {
    backgroundColor: "#388e3c",
    transform: "translateY(1px)",
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Enso Family Cat Tree</h1>
        <div style={buttonsContainerStyle}>
          <a href="/Meg" style={{ ...buttonStyle, ':hover': buttonHoverStyle, ':active': buttonActiveStyle }}>Meg</a>
          <a href="/Opt" style={{ ...buttonStyle, ':hover': buttonHoverStyle, ':active': buttonActiveStyle }}>Panda</a>
        </div>
      </header>
    </div>
  );
};

export default Welcome;
