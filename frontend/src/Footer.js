import React from "react";
import "./Footer.css";
import logo from "./images/logo.jpg";
const Footer = () => {
  return (
    <>
      <div id="full">
        <span className="container">
          <div className="col1">
            <img src={logo} width="150px" marginle alt="pic not found" />
          </div>

          <div className="col2">
            <h5>ABOUT US</h5>
            <p>
              Matbakh <br />
              Going to a restaurant is one of my keenest pleasures. ... “There
              is no love sincerer than the love of food.”
            </p>
          </div>

          <div className="col3">
            <h5>CONTACT</h5>
            <p>ISLAMABAD F11-markaz near Tehzeeb</p>
          </div>

          <div className="col4">
            <h5>PHONE</h5>
            <ul>
              <li>051-612345678</li>
          
            </ul>
          </div>

          <div className="col5">
            <h5>DEVELOPERS</h5>
            <ul>
              <li>Areeb Ahmad</li>
              <li>Kamil Ilyas</li>
              <li>Razi Ul Islam</li>
            
            </ul>
          </div>
        </span>

        <hr />

        <div className="copy">
          <p>Copyright 2023 - Web Engineering Project @AreebAhmad</p>
        </div>
      </div>
    </>
  );
};

export default Footer;