import React, { useEffect } from "react";

const ParentID = () => {
  const cat = {
    id: "12345ABC",
    name: "Jose Enso III",
    number: "09766686559",
    number2: "09675207614",
    gmail: "joseensothethird@gmail.com",
    location: "Lingunan, Valenzuela City",
    qrLink: "https://example.com/cat-profile",
  };

  // Update the tab title with the parent's name
  useEffect(() => {
    document.title = `${cat.name}'s ID`;
    return () => {
      document.title = "Default Title";
    };
  }, [cat.name]);

  return (
    <div
      style={{
        height: "100%",
        width: "300px",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <img
          style={{
            height: "100px",
            width: "100px",
            border: "3px solid green",
            borderRadius: "50%",
            objectFit: "cover",
          }}
          src="https://placekitten.com/200/200"
          alt="Cat"
        />
      </div>
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
          color: "#333",
          marginBottom: "10px",
        }}
      >
        {cat.name}
      </h2>
      <div
        style={{
          fontSize: "14px",
          color: "#555",
          textAlign: "center",
        }}
      >
        <p>
          <strong>Number:</strong> {cat.number}
        </p>
        <p>
          <strong>2nd Number:</strong> {cat.number2}
        </p>
        <p>
          <strong>Gmail:</strong> {cat.gmail}
        </p>
      </div>

      {/* Buttons Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <a
          href="https://www.facebook.com/ensojosethethird"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Visit Facebook Profile
          </button>
        </a>

        <a
          href="https://www.openstreetmap.org/way/30160365"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{
              backgroundColor: "#28a745",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
          >
            My Home's Location
          </button>
        </a>
      </div>

      <div
        style={{
          marginTop: "20px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <a
          href="/"
          style={{
            textDecoration: "underline",
            color: "#007bff",
            fontSize: "14px",
          }}
        >
          Go Back
        </a>
      </div>
    </div>
  );
};

export default ParentID;
