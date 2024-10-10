import React, { useContext } from "react";
import MainBody from "../components/MainBody";
import Departments from "../components/Departments";
import { Context } from "../main";

const Home = () => {

const{user}= useContext(Context);

  return (
    <>
      <MainBody
        title={
          <div class="titleHead">
          "Welcome! <h1>{user &&
                    `${user.firstName} ${user.lastName}`}</h1></div>
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
