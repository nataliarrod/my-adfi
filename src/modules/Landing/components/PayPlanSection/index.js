import React from "react";
import Grid from "@material-ui/core/Grid";
import Lens from "../../../../assets/svg/lens.svg";
import Hand from "../../../../assets/svg/hand.svg";
import Clock from "../../../../assets/svg/clock.svg";
import useStyles from "./styles";

const PayPlanSection = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid
        container
        item
        alignItems="center"
        justifyContent="center"
        className={classes.payPlanContainer}
      >
        <Grid
          container
          item
          justifyContent="flex-end"
          alignItems="center"
          className={classes.payPlanFrontContainer}
        >
          <Grid item className={classes.payPlans}>
            <div className={classes.payPlansText}>
              <h4>Lorem ipsum</h4>
            </div>
            <span>1.234</span>
            <p>Lorem Ipsum is simply dummy</p>
            <p>Lorem Ipsum is simply dummy</p>
            <p>Lorem Ipsum is simply dummy</p>
          </Grid>
          <Grid item className={classes.payPlans}>
            <div className={classes.payPlansText}>
              <h4>Lorem ipsum</h4>
            </div>
            <span>1.234</span>
            <p>Lorem Ipsum is simply dummy</p>
            <p>Lorem Ipsum is simply dummy</p>
            <p>Lorem Ipsum is simply dummy</p>
          </Grid>
          <Grid item className={classes.payPlans}>
            <div className={classes.payPlansText}>
              <h4>Lorem ipsum</h4>
            </div>
            <span>1.234</span>
            <p>Lorem Ipsum is simply dummy</p>
            <p>Lorem Ipsum is simply dummy</p>
            <p>Lorem Ipsum is simply dummy</p>
          </Grid>
        </Grid>
        <Grid
          container
          xs={10}
          direction="column"
          className={classes.payPlanBackContainer}
        >
          <Grid item className={`${classes.payPlansBack} ${classes.bgBlue}`}>
            <img src={Lens} alt="icono lupa" height="50px" width="50px" />
          </Grid>
          <Grid item className={`${classes.payPlansBack} ${classes.bgBlueLigth}`}>
            <img src={Hand} alt="icono mano" height="50px" width="50px" />
          </Grid>
          <Grid item className={`${classes.payPlansBack} ${classes.bgBlue}`}>
            <img src={Clock} alt="icono reloj" height="50px" width="50px" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PayPlanSection;
