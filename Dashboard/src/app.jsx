import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";


const app = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
}

export default app
