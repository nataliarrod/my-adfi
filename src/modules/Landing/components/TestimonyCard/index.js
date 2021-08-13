import React from "react";
import useStyles from "./styles";

const TestimonyCard = ({testimony}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
      <img src={testimony.image} alt="imagen testimonio" height="90px" width="90px" />
      </div>
      <div className={classes.text}>
        <h4>{testimony.name}</h4>
        <p>
          {testimony.description}
        </p>
      </div>
    </div>
  );
};

export default TestimonyCard;
