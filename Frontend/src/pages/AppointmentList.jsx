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
          "http://localhost:4000/api/v1/appointment/getall",
          { withCredentials: true }
        );
        const filteredAppointments = data.appointments.filter(appointment => appointment.email === userEmail);
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

  const handleUpdateRating = async (appointmentId, newRating) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/appointment/update/${appointmentId}`,
        { rating: newRating },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, rating: newRating }
            : appointment
        )
      );
      toast.success('Rating updated successfully!');
    } catch (error) {
      toast.error('Failed to update rating. Please try again.');
    }
  };

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
                <th>Visited</th>
                <th>Rate</th>
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
                        ) : appointment.status === "Accepted" ? (
                          <span className="value-accepted">Accepted</span>
                        ) : (
                          <span className="value-rejected">Rejected</span>
                        )}
                      </td>
                      <td>
                        {appointment.hasVisited === true ? (
                          <GoCheckCircleFill className="green" />
                        ) : (
                          <AiFillCloseCircle className="red" />
                        )}
                      </td>
                      <td>
                        {appointment.status === 'Accepted' ? (
                          <Rating
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            value={appointment.rating || 0}
                            onChange={(newRating) => handleUpdateRating(appointment._id, newRating)}
                          />
                        ) : (
                          <span>-</span>
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
