import React, { useEffect, useState } from "react";
import DoctorNavbar from "../../components/DocsComponent/DoctorNavbar";
import axios from "axios";
import { toast } from "react-toastify";

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/v1/doctor/appointments", {
        withCredentials: true,
      });
      setAppointments(data.appointments);
    } catch (error) {
      toast.error("Failed to fetch appointments");
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <DoctorNavbar />
      <div style={{ padding: "30px" }}>
        <h2>Doctor Dashboard</h2>
        <h3 style={{ marginTop: "20px" }}>Your Appointments</h3>

        {appointments.length === 0 ? (
          <p>No appointments yet.</p>
        ) : (
          <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#007bff", color: "white" }}>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>Patient Name</th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>Date</th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>Time</th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt._id}>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{appt.patientName}</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{appt.date}</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{appt.time}</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{appt.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DoctorDashboard;
