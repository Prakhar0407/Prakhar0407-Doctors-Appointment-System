import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../../main"; 
import { useNavigate, Navigate, Link } from "react-router-dom";

const DoctorLogin = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();
  const [email, setEmail] = useState("rakeshraina@gmail.com");
  const [password, setPassword] = useState("rakeshraina");

  const handleDoctorLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, role: "Doctor" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      if (data.user.role === "Doctor") {
        toast.success(data.message);
        setIsAuthenticated(true);
        navigateTo("/doctor-dashboard"); 
      } else {
        toast.error("Unauthorized Access! Only doctors can log in.");
      }
      
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Doctor login failed");
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/doctor-dashboard"} />;
  }

  return (
    <>
      <div className="container form-component login-form">
        <h2>Doctor Sign In</h2>
        <p>Please log in to continue</p>

        <form onSubmit={handleDoctorLogin}>
          <input
            type="text"
            placeholder="Doctor Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Login</button>
          </div>
        </form>

        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <Link to={"/login"} style={{ textDecoration: "none", color: "#007bff" }}>
            Are you a User?
          </Link>
        </div>
      </div>
    </>
  );
};

export default DoctorLogin;
