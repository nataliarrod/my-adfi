import React from "react";
import { Grid } from "@material-ui/core";
// import useStyles from "./style";
import HoverBlock from "../HoverBlock";
import { hoverblockConstants } from "./constants";
// import iconHead from "../../../../assets/svg/icon1-15.svg";

const Services = () => {
  // const classes = useStyles();

  return (
    <Grid justifyContent="center" container xs={12}>
      <Grid item xs={1}>
        <HoverBlock
          titleNameblock={hoverblockConstants.titleNameblock}
          contentDescription={hoverblockConstants.contentDescription}
          iconHead={hoverblockConstants.icon}
          backg={hoverblockConstants.backg}
        />
      </Grid>
    </Grid>
  );
};

export default Services;
