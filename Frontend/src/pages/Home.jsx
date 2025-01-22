// src/pages/Home.jsx
import React, { useContext } from "react";
import MainBody from "../components/MainBody";
import Departments from "../components/Departments";
import { Context } from "../main";
import AppointmentButton from "../components/AppointmentButton";

const Home = () => {
  const { user } = useContext(Context);

  return (
    <>
      <MainBody
        title={
          <div className="titleHead">
            Welcome! <h1>{user && `${user.firstName} ${user.lastName}`}</h1>
          </div>
        }
        appointmentButton={<AppointmentButton />} 
      />

      <Departments />

    </>
  );
};

export default Home;
