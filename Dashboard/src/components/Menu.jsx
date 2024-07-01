import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { MdOutlineHome } from "react-icons/md";
import { CgUserAdd } from "react-icons/cg";


const Menu = () => {
    const [show, setShow] = useState(false);
  
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  
  
    const navigateTo = useNavigate();
  
    const gotoHomePage = () => {
      navigateTo("/");
      setShow(!show);
    };
    const gotoAddNewAdmin = () => {
        navigateTo("/admin/addnew");
        setShow(!show);
      };

  
    return (
      <>
        <nav
          style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
          className={show ? "show Menu" : "Menu"}
        >
          <div className="links">
            <MdOutlineHome onClick={gotoHomePage} />
            <CgUserAdd onClick={gotoAddNewAdmin} />
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
  
  export default Menu;
  