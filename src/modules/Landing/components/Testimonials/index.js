import React from "react";
import GeneralCarousel from "../GeneralCarousel";
import Grid from "@material-ui/core/Grid";
import CountUp from "react-countup";
import useStyles from "./styles";

const Testimonials = () => {
  const classes = useStyles();
  console.log("hola");

  return (
    <Grid container justifyContent="center" className={classes.root}>
      <Grid
        container
        item
        alignItems="center"
        className={classes.mainContainer}
      >
        <Grid item xs={6} className={classes.textContainer}>
          <Grid className={classes.text} item>
            <h4>Lorem</h4>
            <p>
              +
              <span>
                <CountUp end={1000} duration={2} />
              </span>
            </p>
          </Grid>
          <Grid className={classes.text} item>
            <h4>Lorem</h4>
            <p>
              +
              <span>
                <CountUp end={2000} duration={2} />
              </span>
            </p>
          </Grid>
          <Grid className={classes.text} item>
            <h4>Lorem</h4>
            <p>
              +
              <span>
                <CountUp end={3500} duration={2} />
              </span>
            </p>
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
