import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: "500px",
    height: "100px",
    "& .react-multi-carousel-dot-list": {
      justifyContent: 'flex-end',
    },
    "& .react-multi-carousel-dot--active button": {
      backgroundColor: '#004775',
    },
  },
}));

export default useStyles;
