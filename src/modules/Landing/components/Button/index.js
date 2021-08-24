import React from "react";
import "./style.css";
import Icon from "../../../../assets/svg/monsterHead.svg";
import iconButton from "../../../../assets/svg/iconButton.svg";

const Button = ({ type, text, link }) => {
  if (type === "secondary-with-icon") {
    return (
      <div className={`button-${type}`}>
        <a href={link}>
          {text}
          <img src={Icon} alt="icon" />
        </a>
      </div>
    );
  }
  if (type === "tertiary-with-icon") {
    return (
      <div className={`button-${type}`}>
        <a href={link}>
          <img src={iconButton} alt="icon" />
          {text}
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