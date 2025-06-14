import React from "react";
import { Link } from "react-router-dom";

const DoctorNavbar = () => {
  return (
    <nav style={{
      backgroundColor: "#007bff",
      padding: "10px 20px",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2>Doctor Panel</h2>
      <div>
        <Link to="/doctor-dashboard" style={{ color: "#fff", marginRight: "15px", textDecoration: "none" }}>
          Dashboard
        </Link>
        <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default DoctorNavbar;
