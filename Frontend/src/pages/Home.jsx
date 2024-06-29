import React, { useContext } from "react";
import MainBody from "../components/MainBody";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <MainBody
        title={
          <div class="titleHead">
          "Welcome! Your Trusted Healthcare Provider"
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
      <MessageForm />
    </>
  );
};

export default Home;
