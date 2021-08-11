import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: '500px',
    padding: '60px 0px 0px 160px',
    marginBottom: '50px',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
  },
  presentationTitle: {
    fontFamily: 'Poppins',
    color: '#004775',
    fontSize: '55px',
    lineHeight: '70px',
    padding: '25px 0px 0px 0px',
    '& > p': {
      margin: '0px',
    },
  },
  presentationMessage: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontFamily: 'Poppins',
    color: '#0097AC',
    fontSize: '14px',
    margin: '30px 0px',
    paddingRight: '200px',
    '& > p': {
      margin: '0px 20px',
    },
  },
  buttonsContainer: {
    display: 'flex',
    marginTop: '20px',
  },
  presentationImage: {
    marginLeft: '-100px',
  },
}));

export default useStyles;