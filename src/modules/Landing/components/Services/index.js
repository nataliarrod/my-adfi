import React from "react";
import { Grid } from "@material-ui/core";
// import useStyles from "./style";
import HoverBlock from "../HoverBlock";

const Services = () => {
  // const classes = useStyles();

  return (
    <Grid justifyContent="center" container xs={12}>
      <Grid item xs={1}>
        <HoverBlock />
      </Grid>
      <Grid item xs={1}>
        <HoverBlock />
      </Grid>
      <Grid item xs={1}>
        <HoverBlock />
      </Grid>
      <Grid item xs={1}>
        <HoverBlock />
      </Grid>
      <Grid item xs={1}>
        <HoverBlock />
      </Grid>
    </Grid>
  );
};

export default Services;
