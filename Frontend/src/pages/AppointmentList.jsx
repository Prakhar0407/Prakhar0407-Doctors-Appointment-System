import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [totalCount, setTotalAppointmentCount] = useState(0);
  const{user}= useContext(Context);

  // Replace with the actual email you want to filter by
  const userEmail = user.email;

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/appointment/getall",
          { withCredentials: true }
        );
        const filteredAppointments = data.appointments.filter(appointment => appointment.email === userEmail);
        
        setAppointments(filteredAppointments);
        setTotalAppointmentCount(filteredAppointments.length);
      } catch (error) {
        setAppointments([]);
      }
    };
    fetchAppointments();
  }, [userEmail]);

  const { isAuthenticated, admin } = useContext(Context);
  if (!isAuthenticated) {
    console.log("Not Authenticated, Redirecting to Login..")
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <section className="dashboard page">
        <div className="banner">
        </div>
        <div className="banner">
          <h5 className="TitleTextAppointment">My Appointments</h5>
          <div className="appcnt">
          <p>Total Appointments : {totalCount}</p></div>
          <table>
            <thead>
              <tr className="AppointmentHeading">
                <th>Patient</th>
                <th>Date</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Status</th>
                <th>Visited</th>
              </tr>
            </thead>
            <tbody>
              {appointments && appointments.length > 0
                ? appointments.map((appointment) => (
                    <tr className="AppointmentWritten" key={appointment._id}>
                      <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                      <td>{appointment.appointmentDate.substring(0, 16)}</td>
                      <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
                      <td>{appointment.department}</td>
                      <td>{appointment.status}</td>
                      <td>{appointment.hasVisited === true ? <GoCheckCircleFill className="green"/> : <AiFillCloseCircle className="red"/>}</td>
                    </tr>
                  ))
                : "No Appointments Found!"}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
