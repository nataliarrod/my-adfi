import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive, testimonials } from "../GeneralCarousel/constants";
import TestimonyCard from "../TestimonyCard";
import useStyles from "./styles";

const GeneralCarousel = () => {
  const classes = useStyles();

  return (
    <Carousel
      className={classes.root}
      responsive={responsive}
      arrows={false}
      showDots
      autoPlay
      autoPlaySpeed={2000}
      infinite
    >
      {testimonials.map((testimony, index) => {
        return (
          <TestimonyCard
            testimony={testimony}
            key={`testimonio-${index + 1}`}
          />
        );
      })}
    </Carousel>
  );
};

export default GeneralCarousel;
