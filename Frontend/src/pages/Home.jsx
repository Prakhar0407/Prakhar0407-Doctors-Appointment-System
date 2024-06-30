import React, { useContext } from "react";
import MainBody from "../components/MainBody";
import Departments from "../components/Departments";


const Home = () => {
  return (
    <>
      <MainBody
        title={
          <div class="titleHead">
          "Welcome! 
          </div>
        }
        
        appointmentButton={
          <a href="/appointment">
          <button class="appointButton">
          Book your Appointment Now
          </button>
          </a>
        }

        

 
      />
      <Departments />

    </>
  );
};

export default Home;
