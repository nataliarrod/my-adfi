import React from "react";
import useStyles from "./style";
import icon from "../../../../assets/svg/icon1-15.svg"
import backg from "../../../../assets/img/jpg/aerial-view.jpg"

const HoverBlock = () => {
const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <div className={classes.icon}>
          <img src={icon} alt="icon" />
        </div>
      </div>
      <div className={classes.namebox}>namebox</div>
      <div
        className={classes.description}
        style={{
          backgroundImage: "url(" + backg + ")",
        }}
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
};

export default HoverBlock;