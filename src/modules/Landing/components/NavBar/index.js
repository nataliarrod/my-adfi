import React from "react";
import Logo from "../../../../assets/img/png/LOGO-02.png";
import labelsNavBar from "./constants";
import "./style.css";
import Button from "../Button";


const NavBar = () => {
  return (
    <div className="nav-bar-container">
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
