import React from "react";
import { Grid } from "@material-ui/core";
import Button from "../Button";
import imagenMonster from "../../../../assets/svg/monsterImage.svg";
import monsterHead from "../../../../assets/svg/monsterHead.svg";
import useStyles from "./styles";

const Presentation = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item xs={6} className={classes.textContainer}>
        <Grid item className={classes.presentationTitle}>
          <p>
            Mi Administrador de <strong>finanzas e inventario</strong>
          </p>
        </Grid>
        <Grid item className={classes.presentationMessage}>
          <img
            src={monsterHead}
            alt="imagen cabeza mascota"
            height="80px"
            width="80px"
          />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </Grid>
        <Grid item className={classes.buttonsContainer}>
          <Button type="tertiary" text="Crear Proyecto" />
          <Button type="tertiary-with-icon" text="watch video" />
        </Grid>
      </Grid>
      <Grid item xs={6} className={classes.presentationImage}>
        <img
          src={imagenMonster}
          alt="imagen mascota"
          height="500px"
          width="600px"
        />
      </Grid>
    </Grid>
  );
};

export default Presentation;
