import React, { useContext, useEffect } from "react";
import "./app.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "./main";
import Login from "./pages/Login";
import News from "./pages/News";
import AppointmentList from "./pages/AppointmentList.jsx";
import AddReview from "./pages/AddReview.jsx";
import DoctorLogin from "./pages/Docs/DoctorLogin";
import DoctorDashboard from "./pages/Docs/DoctorDashboard";

// This wrapper is needed to access useLocation outside Router
const AppContent = () => {
  const location = useLocation();
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/user/patient/me", {
          withCredentials: true,
        });
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  // Hide navbar and footer on dashboard route
  const isDoctorDashboard = location.pathname.startsWith("/doctor-dashboard");

  return (
    <>
      {!isDoctorDashboard && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<News />} />
        <Route path="/appointments" element={<AppointmentList />} />
        <Route path="/review/:id" element={<AddReview />} />
        <Route path="/doctorLogin" element={<DoctorLogin />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
      </Routes>
      {!isDoctorDashboard && <Footer />}
      <ToastContainer
          position="bottom-right"
          className="custom-toast-container"
          toastClassName="custom-toast"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          pauseOnHover
          draggable
          pauseOnFocusLoss
        />
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
