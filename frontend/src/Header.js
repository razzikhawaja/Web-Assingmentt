import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import logo from "./images/logo.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navid">
        <ul className="navitems">
          <li>
            <img id="logo" src={logo} alt="" />
          </li>
          
        </ul>
        {/* ------------------------------------------------------------------- */}
        {/* <div className="oo">
          <button className="accButt">User</button>
        </div> */}
        {/* ------------------------------------------ */}
      </div>
    </>
  );
};

export default Header;