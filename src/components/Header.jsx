import React from "react";
import edsdLogo from "../assets/EDSD_logo.png";

function Header() {
  return (
    <header
      style={{
        background: "#fff",
        padding: "1.5rem 0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img
        src={edsdLogo}
        alt="EDSD Logo"
        style={{ height: "60px", marginRight: "1.5rem" }}
      />
      <Link to="/">Home</Link>
      <Link to="/volunteer-training">Volunteer Training</Link>
      <h1
        style={{
          color: "#003366",
          fontWeight: 700,
          fontSize: "2rem",
          margin: 0,
          fontFamily: "'Oswald', Arial, sans-serif",
        }}
      ></h1>
    </header>
  );
}

export default Header;
