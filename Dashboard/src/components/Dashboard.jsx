import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import Rating from 'react-rating-stars-component';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [totalCount, setTotalAppointmentCount] = useState(0);

  useEffect(() => {
    const fetchAppointments = async () => {
       try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/appointment/getall",
          { withCredentials: true }
        );
        setAppointments(data.appointments);
        const count = data.appointments.length;
        setTotalAppointmentCount(count);
      } catch (error) {
        setAppointments([]);
      }
    };
    fetchAppointments();
  }, []);

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
<<<<<<< HEAD
        `http://localhost:4000/api/v1/appointment/update/${appointmentId}`,
=======
        `https://docapp-server-atoj.onrender.com/api/v1/appointment/update/${appointmentId}`,
>>>>>>> 6025e4bbb85f728086851b9467e902699a712691
        { status },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const { isAuthenticated, admin } = useContext(Context);
  if (!isAuthenticated) {
    console.log("Not Authenticated, Redirecting to Login..");
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <section className="dashboard page">
        <div className="banner">
          <div className="firstBox">
            <img src="/docAtPat.png" alt="docImg" />
            <div className="content">
              <div>
                <p>Welcome! </p>
                <p>
                  {admin &&
                    `${admin.firstName} ${admin.lastName}`}{" "}
                </p>
              </div>
              <p>
                Let's see What are the new appointments. You can add Doctors and can update visiting settings here. 
              </p>
            </div>
          </div>
          <div className="secondBox">
            <p>Total Appointments</p>
            <h3>{totalCount}</h3>
          </div>
        </div>
        <div className="banner">
          <h5 className="TitleTextAppointment">Appointments</h5>
          <table>
            <thead>
              <tr className="AppointmentHeading">
                <th>Patient</th>
                <th>Date</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Status</th>
                <th>Rating</th>
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
                        <select
                          className={
                            appointment.status === "Pending"
                              ? "value-pending"
                              : appointment.status === "Accepted"
                              ? "value-accepted"
                              : appointment.status === "Rejected"
                              ? "value-rejected"
                              : "value-done"
                          }
                          value={appointment.status}
                          onChange={(e) =>
                            handleUpdateStatus(appointment._id, e.target.value)
                          }
                        >
                          <option value="Pending" className="value-pending">
                            Pending
                          </option>
                          <option value="Accepted" className="value-accepted">
                            Accepted
                          </option>
                          <option value="Rejected" className="value-rejected">
                            Rejected
                          </option>
                          <option value="Done" className="value-done">
                            Done
                          </option>
                        </select>
                      </td>
                      <td>
                        {appointment.status === "Done" ? (
                          <Rating
                            count={5}
                            value={parseInt(appointment.rate, 10)}
                            size={24}
                            activeColor="#ffd700"
                            edit={false}
                          />
                        ) : (
                          <span>-</span>
                        )}
                      </td>
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
