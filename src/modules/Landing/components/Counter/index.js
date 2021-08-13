import React from "react";
import "./style.css";
import imagecountersection from "../../../../assets/svg/calendar.svg";
import CountUp from "react-countup";
import counterSection from "./constants.js";

const Counter = () => {
  return (
    <div className="countersection-container">
      <div className="countersection-image">
        <img
          src={imagecountersection}
          alt="user"
          width="500px"
          height="500px"
        />
      </div>
      <div className="countersection-content">
        <div className="countersection-content-count">
          <span className="text-primary">+</span>
          <span className="counter"><CountUp end={1000} duration={4} /></span>
        </div>
        <div className="countersection-content-text">
          {counterSection.countertextline1} <br />
          {counterSection.countertextline2}
        </div>
        <div className="countersection-content-swtich">
          <div className="countersection-content-switch-text">
            {counterSection.counterswitchtext}
          </div>
          <div className="countersection-content-switch-swtchbutton">
            <input type="checkbox" id="switch" />
            <label htmlFor="switch"></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
