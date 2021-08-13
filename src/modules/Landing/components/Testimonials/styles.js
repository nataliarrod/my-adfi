import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: "200px",
  },
  mainContainer: {
    background: "blue",
    width: "1100px",
    height: "150px",
    backgroundColor: "rgba(0, 152, 173, 0.8)",
    borderRadius: "15px",
  },
  textContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  carouselContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    width: '120px',
    fontFamily: "Poppins",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    "& > h4": {
      color: "white",
      margin: "0px",
      fontSize: "17px",
    },
    "& > p": {
      color: "white",
      margin: "0px",
      fontWeight: "600",
      fontSize: "36px",
    },
  },
}));

export default useStyles;
