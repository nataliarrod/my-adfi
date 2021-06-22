import React from "react";
import Logo from "../../assets/img/png/logo.png";
import labelsNavBar from "./constants";
import User from "../../assets/img/png/user.png";
import "./style.css";


const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-logo">
        <img src={Logo} alt="Logo"/>
      </div>
      <div className="nav-bar-label">
        <ul className="nav-bar-label-ul">
          {labelsNavBar.map((label,index)=>{
            return(
              <li key={`navbar-label-${index}`}>{label.name}</li>
            )
          })}
        </ul>
      </div>
      <div className="nav-bar-icons">
        <div>
          <img src={User} alt="Linea Ancestral Logo" className="nav-bar-user-icon"/>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
