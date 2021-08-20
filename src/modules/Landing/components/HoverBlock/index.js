import React from "react";
import useStyles from "./style";

const HoverBlock = ({iconHead, titleNameblock, contentDescription, backgImg, backgColor}) => {
const classes = useStyles();

  return (
    <div className={classes.container}>
      <div
        className={classes.head}
        style={{
          backgroundColor: backgColor,
        }}
      >
        <div className={classes.icon}>
          <img src={iconHead} alt="icon" />
        </div>
      </div>
      <div
        className={classes.namebox}
        style={{
          backgroundColor: backgColor,
        }}
      >
        {titleNameblock}
      </div>
      <div
        className={classes.description}
        style={{
          backgroundImage: `url("${backgImg}")`,
        }}
      >
        <p>{contentDescription}</p>
      </div>
    </div>
  );
};

export default HoverBlock;