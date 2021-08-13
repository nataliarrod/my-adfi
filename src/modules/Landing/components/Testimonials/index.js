import React from "react";
import GeneralCarousel from "../GeneralCarousel";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";

const Testimonials = () => {
  const classes = useStyles();

  return (
    <Grid 
    container
    justifyContent="center" 
    className={classes.root}
    >
      <Grid
        container
        item
        alignItems="center"
        className={classes.mainContainer}
      >
        <Grid item xs={6} className={classes.textContainer}>
          <Grid className={classes.text} item>
            <h4>Lorem</h4>
            <p>+<span>1000</span></p>
          </Grid>
          <Grid className={classes.text} item>
            <h4>Lorem</h4>
            <p>+<span>2000</span></p>
          </Grid>
          <Grid className={classes.text} item>
            <h4>Lorem</h4>
            <p>+<span>3500</span></p>
          </Grid>
        </Grid>
        <Grid xs={6} item className={classes.carouselContainer}>
          <GeneralCarousel />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Testimonials;
