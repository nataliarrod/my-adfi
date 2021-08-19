import React from "react";
import useStyles from "./style";

const HoverBlock = ({iconHead, titleNameblock, contentDescription, backg}) => {
const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <div className={classes.icon}>
          <img src={iconHead} alt="icon" />
        </div>
      </div>
      <div className={classes.namebox}>{titleNameblock}</div>
      <div
        className={classes.description}
        style={{
          backgroundImage: `url("${backg}")`,
        }}
      >
        <p>{contentDescription}</p>
      </div>
    </div>
  );
};

export default HoverBlock;