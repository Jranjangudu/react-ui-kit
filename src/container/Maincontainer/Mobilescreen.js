import React from "react";
import "./menu.css";
import NavLinks from "./NavLinks";

const Mobilescreen = () => {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";

    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("main").style.display = "none";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("main").style.display = "block";
  }
  return (
    <div className="laptopscreen">
      <div id="mySidenav" className="sidenav">
        <h6 className="closebtn" onClick={closeNav}>
          &times;
        </h6>
        <div className="text-center text-light pb-2">
          <h4>components</h4>
        </div>
        <div className="pl-5">
          <NavLinks />
          <div className="mt-4">
            <strong
              className="text-secondary"
              style={{ fontFamily: "monospace" }}
            >
              copyright &copy; 2021 all rights reserved
            </strong>
          </div>
        </div>
      </div>

      <div id="main">
        <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>
          &#9776;
        </span>
      </div>
    </div>
  );
};

export default Mobilescreen;
