import React, { useState, useEffect } from 'react';

const CatID = () => {
  const cat = {
    name: 'Doffy',
    fullname: 'Doflamingo Donquixote',
    gender: 'Male',
    birthday: 'Nov 2023',
    DeathDate: 'July 2024',
    birthDate: new Date('2023-11-27'), // Example birth date
    race: 'Orange Cat',
    color: 'Orange and White',
    eyeColor: 'Green',
    description: 'She’s playful with her little sister and enjoys spending time with her. When she’s alone with her owner, she loves to curl up and sleep peacefully after a good meal.',
    location: 'Lingunan, Valenzuela City',
  };

  const [age, setAge] = useState('');
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = cat.birthDate;
      const deathDate = new Date('2024-07-01');
    
      if (deathDate < birthDate) {
        setAge('Not born yet');
        return;
      }
    
      let years = deathDate.getFullYear() - birthDate.getFullYear();
      let months = deathDate.getMonth() - birthDate.getMonth();
      let days = deathDate.getDate() - birthDate.getDate();
    
      if (days < 0) {
        months -= 1;
        days += new Date(deathDate.getFullYear(), deathDate.getMonth(), 0).getDate();
      }
    
      if (months < 0) {
        years -= 1;
        months += 12;
      }
    
      let weeks = Math.floor((deathDate - birthDate) / (1000 * 60 * 60 * 24 * 7));
    
      setAge({ years, months, weeks });
    };
    

    calculateAge();
    const interval = setInterval(calculateAge, 60000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    document.title = `${cat.name}'s ID`; // Dynamically set tab name based on cat's name
    return () => {
      document.title = 'Default Title'; // Reset when component unmounts (optional)
    };
  }, [cat.name]); // Dependency array ensures it updates if cat name changes


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
        position: "relative",
      }}
    >
      {/* Close Button */}
      <a
        href="/"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          fontSize: "20px",
          color: "#333",
          textDecoration: "none",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        X
      </a>

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
            cursor: "pointer",
          }}
          src="/Doffy.jpg"
          alt="Cat"
          onClick={() => setIsImagePopupOpen(true)}
        />
      </div>

      {isImagePopupOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "24px",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              onClick={() => setIsImagePopupOpen(false)}
            >
              X
            </span>
            <img
              src="/Doffy.jpg"
              alt="Cat"
              style={{
                width: "80vw",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      )}

      <div style={{ fontSize: "14px", color: "#555", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            color: "#333",
          }}
        >
          <a href="https://onepiece.fandom.com/wiki/Donquixote_Doflamingo">{cat.name}</a>'s ID 
        </h2>
        <p><strong>{cat.fullname}</strong></p>
        <p>
  <strong>Born: </strong> {cat.birthday} - {cat.DeathDate && `${cat.DeathDate} 🕊️`} <br />
</p>


        <p>
  <strong>Age:</strong>{" "}
  {age.years > 0 ? `${age.years} years, ` : ""}
  {age.months > 0 ? `${age.months} months, ` : ""}
  {age.weeks} weeks
</p>

        <p>
          <strong>Description:</strong>{" "}
          <strong>
            {cat.race}, {cat.gender}, {cat.color}, {cat.eyeColor}
          </strong>
          , {cat.description}
        </p>
        <p>
          <strong>Location:</strong> {cat.location}
        </p>
        <div
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
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

          <a
            href="https://drive.google.com/drive/folders/1CUKirtUN2c70lcuDFsfcIo1DZCueCs3O?view"
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
              View Pictures
            </button>
          </a>
        </div>
        <div style={{ marginTop: "20px", width: "100%", display: "flex", justifyContent: "center" }}>
          <a href="/family_tree" target="_blank" rel="noopener noreferrer">
            <button style={{
              backgroundColor: "#191970",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }} onMouseOver={(e) => e.target.style.backgroundColor = "#218838"} onMouseOut={(e) => e.target.style.backgroundColor = "#28a745"}>
              Family Tree
            </button>
          </a>


        </div>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <a
            href="/parent"
            style={{
              color: "#007bff",
              textDecoration: "underline",
              fontSize: "14px",
            }}
          >
            Call my Parent's Information if I'm lost
          </a>
        </div>
      </div>
    </div>
  );
};

export default CatID;
