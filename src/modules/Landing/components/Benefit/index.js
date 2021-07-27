import React from "react";
import "./style.css";
import benefitConstants from "./constants";
import icon1 from "../../../../assets/img/svg/1-27.svg";
import icon2 from "../../../../assets/img/svg/1-11.svg";
import statisticmascot from "../../../../assets/img/png/mascotaprueba222.png";


const Benefit = () => {
return (
  <div className="benefit-container">
    <div className="benefit-title-and-content">
      <div className="benefit-title">{benefitConstants.title}</div>
      <div className="benefit-container-content">
        <div className="benefit-paragraphs">
          <div className="benefit-paragraph1">
            {benefitConstants.paragraph1}
          </div>
          <div className="benefit-paragraph2">
            <div className="benefit-icon2">
              <img src={icon1} alt="1-27" />
            </div>
            <div className="benefit-text2">{benefitConstants.paragraph2}</div>
          </div>
          <div className="benefit-paragraph3">
            <div className="benefit-icon3">
              <img src={icon2} alt="1-11" />
            </div>
            <div className="benefit-text3">{benefitConstants.paragraph3}</div>
          </div>
        </div>
      </div>
    </div>
    <div className="benefit-statisticsMascot">
      <img
        src={statisticmascot}
        alt="digital-design-businessman-show-increase-market-graphic"
      />
    </div>
  </div>
);
}

export default Benefit;