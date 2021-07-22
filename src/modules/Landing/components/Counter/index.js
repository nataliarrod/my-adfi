import React from "react";
import "./style.css";
import mascot04 from "../../../../assets/img/svg/mascot-04.svg";

const Counter = () => {
  return (
    <div className="countersection-container">
      <div className="countersection-image">
        <img src={mascot04} alt="mascot-04" />
      </div>
      <div className="countersection-content">
        <div className="countersection-content-count">
          <span class="text-primary">
            +
          </span>
          <span class="counter">
            1000
          </span>
        </div>
        <div className="countersection-content-text">
          Emprendedores están <br />
          gestionando sus empresas
        </div>
        <div className="countersection-content-swtich">
          lleva el control de tu negocio
        </div>
      </div>
    </div>
  );
}

export default Counter;
