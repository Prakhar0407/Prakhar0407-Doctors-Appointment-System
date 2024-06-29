import React, { useContext } from "react";
import Hero from "./Landing";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
    return (
      <>
        <Hero
          title={
            "Welcome! ! | We will help you with your Medical issue."
          }
          imageUrl={"/hero.png"}
        />
        <Departments />
        <MessageForm />
      </>
    );
  };
  
  export default Home;
  