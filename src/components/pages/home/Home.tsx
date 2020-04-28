import {
  Box,
  Button,
  Grid,
  makeStyles,
  Typography,
  Theme,
  CssBaseline,
} from '@material-ui/core';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ReactComponent as NilsBenzIcon } from '../../../assets/icons/logo.svg';
import Footer from '../../molecules/footer/Footer';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
  },
  main: {
    flexGrow: 1,
  },
  icon: {
    height: '14vw',
    width: '17.9vw',
  },
  heading: {
    marginLeft: '6vw',
    fontSize: '12.5vw',
  },
}));

const Home: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container className={classes.main} alignContent="center">
          <Grid item xs={12}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              marginBottom="3vh"
            >
              <NilsBenzIcon className={classes.icon} />
              <Typography variant="h1" className={classes.heading}>
                Nils Benz
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} container justify="center" spacing={2}>
            <Grid item>
              <Link to="/videos">
                <Button color="inherit" size="large">
                  Videos
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/webdev">
                <Button color="inherit" size="large">
                  Web Development
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Footer openAboutPage={() => history.push('/ueber-mich')} />
      </div>
    </>
  );
};

export default Home;
