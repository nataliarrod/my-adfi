import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: '0px 0px 0px 30px',
    fontFamily: 'Poppins',
    color: 'white',
    '& > h4': {
      fontWeight: '600',
      fontSize: '17px',
      margin: '0px',
    },
    '& > p': {
      fontWeight: '400',
      fontSize: '12px',
      margin: '0px',
    },
  },
}));

export default useStyles;
