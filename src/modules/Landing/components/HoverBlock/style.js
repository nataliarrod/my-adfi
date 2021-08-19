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
  },
  head: {
    width: "100%",
    height: "191px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#004775",
    borderRadius: "60px 60px 0 0",
    background:
      "linear-gradient(180deg, rgba(0, 71, 117, 0) 73.44%, rgba(48, 49, 49, 0.336) 95.31%)",
  },
  icon: {
    width: "80%",
    height: "40%",
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
    backgroundColor: "#004775",
    textTransform: "uppercase",
    fontSize: "14px",
    color: "#FFF",
    fontWeight: "bold",
  },
  description: {
    width: "100%",
    height: "220px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#FFF",
    transition: "all 2s",
    color: "#FFF",
    opacity: "1",
    backgroundSize: "400px",
    "&:hover": {
      opacity: "1",
      backgroundSize: "600px",
    },
    "& > img": {
      width: "100%",
    },
    "& > p": {
      margin: "7px",
      opacity: "0",
      transition: "all 2s",
      fontSize: "10px",
      textAlign: "center",
      "&:hover": {
        opacity: "1",
      },
    },
  },
}));

export default useStyles;
