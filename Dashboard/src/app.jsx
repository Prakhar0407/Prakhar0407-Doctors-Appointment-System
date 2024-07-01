import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import Login from "./components/Login";
import Menu from "./components/Menu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "./main";
import axios from "axios";
import AdminDashboard from "./components/AdminDashboard";
import AddAdmin from "./components/AddAdmin";


const app = () => {
  const { isAuthenticated, setIsAuthenticated, admin, setAdmin } =
  useContext(Context);

useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/admin/me",
        {
          withCredentials: true,
        }
      );
      setIsAuthenticated(true);
      setAdmin(response.data.user);
    } catch (error) {
      setIsAuthenticated(false);
      setAdmin({});
    }
  };
  fetchUser();
}, [isAuthenticated]);

  return (
    <Router>   
      <Menu />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/addnew" element={<AddAdmin />} />

      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
}

export default app
