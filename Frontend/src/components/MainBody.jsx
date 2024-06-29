import React from "react";

const MainBody = ({ title, appointmentButton }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
      
        </div>
      </div> 
        <div>
        <span>{appointmentButton}</span>
      </div>
    </>
  );
};

export default MainBody;
