import React from "react";
import Linea_Ancestral from "../../../../assets/img/png/linea-ancestral-logo.png";
import labelsNavBar from "./constants";
import Member from "../../../../assets/img/png/member-icon.png";
import Cart from "../../../../assets/img/png/cart-icon.png";
import "./style.css";


function NavBar() {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-subcontainer">
        <div className="nav-bar-logo-container">
          <img src={Linea_Ancestral} alt="Linea Ancestral Logo"/>
        </div>
        <div className="nav-bar-label-container">
          <ul className="nav-bar-label-ul-container">
            {labelsNavBar.map((label,index)=>{
              return(
                <li key={`navbar-label-${index}`}>{label.name}</li>
              )
            })}
          </ul>
        </div>
        <div className="nav-bar-icons-container">
          <div>
            <img src={Member} alt="Linea Ancestral Logo" className="nav-bar-member-icon"/>
          </div>
          <div>
            <img src={Cart} alt="Linea Ancestral Logo" className="nav-bar-cart-icon"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
