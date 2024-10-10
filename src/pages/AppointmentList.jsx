import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import Rating from 'react-rating-stars-component';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [totalCount, setTotalAppointmentCount] = useState(0);
  const { isAuthenticated, admin, user } = useContext(Context);
  const userEmail = user.email;

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "https://prakhar0407-doctors-appointment-system.onrender.com/api/v1/appointment/getall",
          { withCredentials: true }
        );
        const filteredAppointments = data.appointments.filter(
          (appointment) => appointment.email === userEmail
        );
        setAppointments(filteredAppointments);
        const count = filteredAppointments.length;
        setTotalAppointmentCount(count);
      } catch (error) {
        setAppointments([]);
        toast.error("Failed to fetch appointments.");
      }
    };
    fetchAppointments();
  }, [userEmail]);

  if (!isAuthenticated) {
    console.log("Not Authenticated, Redirecting to Login..");
    return <Navigate to={"/login"} />;
  }

  const handleUpdaterate = async (appointmentId, rate) => {
    try {
      const { data } = await axios.put(
        `https://prakhar0407-doctors-appointment-system.onrender.com/api/v1/appointment/update/${appointmentId}`,
        { rate },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId ? { ...appointment, rate } : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <section className="dashboard page">
        <div className="banner"></div>
        <div className="banner">
          <h5 className="TitleTextAppointment">My Appointments</h5>
          <div className="appcnt">
            <p>Total Appointments : {totalCount}</p>
          </div>
          <table>
            <thead>
              <tr className="AppointmentHeading">
                <th>Patient</th>
                <th>Date</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Status</th>
                <th>Rate</th>
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
                      <td>
                        {appointment.status === "Pending" ? (
                          <span className="value-pending">Pending</span>
                        )
                         : appointment.status === "Accepted" ? (
                          <span className="value-accepted">Accepted</span>
                        )
                         : appointment.status === "Rejected" ? (
                          <span className="value-rejected">Rejected</span>
                        )
                    
                         :    (
                          <span className="value-done">Done</span>
                        )}
                      </td>
                      <td>
                        {appointment.status === "Done" ? (
                          <Rating
                            count={5}
                            value={parseInt(appointment.rate, 10)}
                            onChange={(newRating) => handleUpdaterate(appointment._id, newRating.toString())}
                            size={24}
                            activeColor="#ffd700"
                          />
                        ) : (
                          <span>-</span>
                        )}
                      </td>
                      <td>
                        {appointment.hasVisited === true ? (
                          <GoCheckCircleFill className="green" />
                        ) : (
                          <AiFillCloseCircle className="red" />
                        )}
                      </td>
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

export default AppointmentList;
