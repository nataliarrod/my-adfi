import React from "react";
import "./style.css";
import imagecountersection from "../../../../assets/img/png/user.png";

const Counter = () => {
  return (
    <div className="countersection-container">
      <div className="countersection-image">
        <img src={imagecountersection} alt="user" />
      </div>
      <div className="countersection-content">
        <div className="countersection-content-count">
          <span class="text-primary">+</span>
          <span class="counter">1000</span>
        </div>
        <div className="countersection-content-text">
          Emprendedores están <br />
          gestionando sus empresas
        </div>
        <div className="countersection-content-swtich">
          <div className="countersection-content-switch-text">
            Lleva el control de tu negocio
          </div>
          <div className="countersection-content-switch-swtchbutton">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
