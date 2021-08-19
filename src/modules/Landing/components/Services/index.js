import React from "react";
import { Grid } from "@material-ui/core";
import HoverBlock from "../HoverBlock";
import { hoverblockConstants } from "./constants";
import useStyles from "./style";

const Services = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.services} justifyContent="center" container xs={12}>
      {
        hoverblockConstants.map(hoverBlock => {
          return (
            <Grid item xs={1}>
              <HoverBlock
                titleNameblock={hoverBlock.titleNameblock}
                contentDescription={hoverBlock.contentDescription}
                iconHead={hoverBlock.icon}
                backgImg={hoverBlock.backgImg}
                backgColor={hoverBlock.backgColor}
              />
            </Grid>
          );
        })
      }
    </Grid>
  );
};

export default Services;
