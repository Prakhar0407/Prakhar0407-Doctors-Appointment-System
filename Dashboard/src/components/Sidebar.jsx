import React, { useContext, useState } from "react";
import { MdHome } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { FaCommentAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard"; 

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    await axios
      .get(`https://docapp-e59f.onrender.com/api/v1/user/admin/logout`, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();

  const gotoHomePage = () => {
    navigateTo("Dashboard");
    setShow(!show);
  };
  const gotoDoctorsPage = () => {
    navigateTo("/doctors");
    setShow(!show);
  };
  const gotoMessagesPage = () => {
    navigateTo("/messages");
    setShow(!show);
  };
  const gotoAddNewDoctor = () => {
    navigateTo("/doctor/adddoctor");
    setShow(!show);
  };

  const gotoAddNewAdmin = () => {
    navigateTo("/admin/addadmin");
    setShow(!show);
  };

  return (
    <>
      <nav
        style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
        className={show ? "show sidebar" : "sidebar"}
      >
        <div className="links">
          <MdHome onClick={gotoHomePage} title="Home"/>
          <MdAddModerator onClick={gotoAddNewAdmin} title="Add Admin"/>
          <IoPersonAddSharp onClick={gotoAddNewDoctor} title="Add Doctor"/>
          <FaCommentAlt onClick={gotoMessagesPage} title="Messages"/>
          <FaUserDoctor onClick={gotoDoctorsPage} title="Doctors"/>
          <MdLogout onClick={handleLogout} title="Logout"/>
      
        </div>
      </nav>
      <div
        className="wrapper"
        style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
      >
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </div>

    </>

  );
};

export default Sidebar;
