import React, { useContext, useEffect } from "react";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } =
    useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
<<<<<<< HEAD
          "http://localhost:4000/api/v1/user/patient/me",
=======
          `https://docapp-server-atoj.onrender.com/api/v1/user/patient/me`,
>>>>>>> 6025e4bbb85f728086851b9467e902699a712691
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  return (
    <>
     <Router>
  {/* Conditionally hide Navbar and Footer on doctor dashboard */}
  {!window.location.pathname.startsWith("/doctor-dashboard") && <Navbar />}

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

  {!window.location.pathname.startsWith("/doctor-dashboard") && <Footer />}
</Router>

    </>
  );
};

export default App;
