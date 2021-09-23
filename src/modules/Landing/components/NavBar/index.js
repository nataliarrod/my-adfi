import React from "react";
import Logo from "../../../../assets/img/png/LOGO-02.png";
import labelsNavBar from "./constants";
import "./style.css";
import Button from "../Button";



const NavBar = () => {

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;
  };
  
  return (
    <div id="navbar" className="nav-bar-container">
      <div className="nav-bar-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="nav-bar-label">
        <ul className="nav-bar-label-ul">
          {labelsNavBar.map((label, index) => {
            return (
              <li key={`nav-bar-label-${index}`}>
                <Button type="link" text={label.name} link={label.url} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="nav-bar-buttons">
        <Button type="primary" text="Crear Proyecto"></Button>
        <Button type="secondary-with-icon" text="Login"></Button>
      </div>
    </div>
  );
}

export default NavBar;
