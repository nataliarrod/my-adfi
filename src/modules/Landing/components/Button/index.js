import React from "react";
import "./style.css";

const Button = ({ type, text, link }) => {
  return(
    <div className={`button-${type}`}>
      <a href={link}>
        {text}
      </a>
    </div>
  )
}

export default Button;