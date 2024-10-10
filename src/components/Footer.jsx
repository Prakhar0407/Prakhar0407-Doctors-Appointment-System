import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {

  return (
    <>
    <div class="details">
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div>
            <img src="/docAtpat.png" alt="logo" className="logo-img"/>
          </div>
  
  
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>7999103084</span>
            </div>
            <div>
              <MdEmail />
              <span>prakharsankle@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Indore, Madhya Prad</span>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
};

export default Footer;
