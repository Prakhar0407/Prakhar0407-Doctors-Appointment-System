import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {

    return (
        <>
          <footer className={"container"}>
            <hr />
            <div className="content">
              <div>
                <img src="/docAtpat.png" alt="logo" className="logo-img"/>
              </div>
              <div>
                <ul>
                  <Link to={"/"}>Home</Link>
                  <Link to={"/appointment"}>Appointment</Link>
                  <Link to={"/contact"}>Contact</Link>
                  <Link to={"/about"}>About</Link>
                </ul>
              </div>
             
              
            </div>
          </footer>
        </>
      );
};

export default Footer;
