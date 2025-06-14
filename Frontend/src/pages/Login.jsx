import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, useNavigate, Navigate } from "react-router-dom";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/user/login",
          { email, password, role: "Patient" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setEmail("");
          setPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="container form-component login-form">
        <h2>Sign In</h2>
        <p>Please Login To Continue</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <p style={{ marginBottom: 0 }}>Not Registered?</p>
            <Link className="regBtn" to="/register">
              Register Now
            </Link>
          </div>

          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginBottom: "20px",
            }}
          >
            <button type="submit">Login</button>
          </div>

          {/* Doctor Login Button */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <p style={{ marginBottom: "8px" }}>Are you a Doctor?</p>
            <Link to="/doctorLogin" className="singInDoctorBtn">
              <button
                type="button"
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Login as Doctor
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
