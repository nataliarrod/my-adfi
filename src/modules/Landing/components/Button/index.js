import React from "react";
import "./style.css";
import Logo from "../../../../assets/img/svg/mascot-04.svg";

const Button = ({ type, text, link }) => {
  if (type === "secundary-with-icon") {
    return (
      <div className={`button-${type}`}>
        <a href={link}>
          {text}
          <img src={Logo} alt="icon" />
        </a>
      </div>
    );
  }
  return(
    <div className={`button-${type}`}>
      <a href={link}>
        {text}
      </a>
    </div>
  )
}

export default Button;