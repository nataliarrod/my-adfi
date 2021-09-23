import React from "react";
import "./style.css";
import Icon from "../../../../assets/svg/monsterHead.svg";
import iconButton from "../../../../assets/svg/iconButton.svg";

const Button = ({ type, text, onClickFunction }) => {
  if (type === "secondary-with-icon") {
    return (
      <div className={`button-${type}`} onClick={onClickFunction}>
          {text}
          <img src={Icon} alt="icon" />
      </div>
    );
  }
  if (type === "tertiary-with-icon") {
    return (
      <div className={`button-${type}`} onClick={onClickFunction}>
          <img src={iconButton} alt="icon" />
          {text}
      </div>
    );
  }  
  return (
    <div className={`button-${type}`} onClick={onClickFunction}>
        {text}
    </div>
  );
}

export default Button;