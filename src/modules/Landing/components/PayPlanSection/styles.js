import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "500px",
    float: "left",
  },
  payPlanContainer: {
    backgroundColor: "#EFEFEF",
    height: "400px",
    maxWidth: "850px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "53px",
    position: "absolute",
    overflow: "visible",
  },
  payPlanFrontContainer: {
    height: "350px",
    marginRight: "15px",
  },
  payPlanBackContainer: {
    position: "absolute",
    marginTop: "80px",
    paddingRight: "70px",
    width: "800px",
    height: "200px",
    zIndex: "1",
  },
  payPlans: {
    width: "30%",
    minWidth: "220px",
    maxWidth: "230px",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    textAlign: "center",
    margin: "0px 10px",
    zIndex: "2",
    background: "#FFFFFF",
    boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "30px",
    "& > span": {
      color: "#0098AD",
      fontFamily: "Poppins",
      fontWeight: "bold",
      fontSize: "25px",
      textAlign: "center",
      marginTop: "10px",
    },
    "& > p": {
      margin: "15px 10px",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "16px",
      textAlign: "center",
      color: "#004775",
    },
  },
  payPlansBack: {
    marginTop: "10px",
    borderRadius: "15px",
    "& > img": {
      marginLeft: "10px",
    },
  },
  bgBlue: {
    backgroundColor: "#004775",
  },
  bgBlueLigth: {
    backgroundColor: "#0098AD",
  },
  payPlansText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "50px",
    margin: "15px auto 10px",
    backgroundColor: "#98BF13",
    borderRadius: "15px",
    "& > h4": {
      margin: "0px",
      fontSize: "13px",
      fontFamily: "Poppins",
      color: "white",
    },
  },
}));

export default useStyles;
