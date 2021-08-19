import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    width: "94%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    transition: "all 1s",
    padding: "3%",
    fontFamily: "'Poppins', sans-serif",
    "&:hover": {
      transform: "scale(1.1)",
      width: "94%",
    },
    "&:hover > $description": {
      backgroundSize: "150px",
      filter: "brightness(50%)",
    },
    "&:hover > $description p": {
      opacity: "1",
      filter: "brightness(150%)",
    },
  },
  head: {
    width: "100%",
    height: "150px",
    display: "flex",
    justifyContent: "center",
    borderRadius: "60px 60px 0 0",
    background:
      "linear-gradient(180deg, rgba(0, 71, 117, 0) 73.44%, rgba(48, 49, 49, 0.336) 95.31%)",
  },
  icon: {
    width: "80%",
    height: "50%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: "50%",
    marginTop: "10%",
    "& > img": {
      width: "80%",
    },
  },
  namebox: {
    width: "100%",
    height: "64px",
    display: "flex",
    alignItems: "Center",
    justifyContent: "center",
    textTransform: "uppercase",
    fontSize: "14px",
    color: "#FFF",
    fontWeight: "bold",
  },
  description: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignContent: "Center",
    justifyContent: "center",
    backgroundColor: "#004775",
    transition: "all 2s",
    backgroundSize: "110px",
    "& > p": {
      margin: "7px",
      opacity: "0",
      transition: "all 1s",
      fontSize: "10px",
      textAlign: "center",
      color: "#FFF",
    },
  },
}));

export default useStyles;
