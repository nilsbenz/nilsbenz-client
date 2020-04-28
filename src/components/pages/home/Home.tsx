import {
  Button,
  CssBaseline,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { useHistory } from 'react-router-dom';
import { ReactComponent as NilsBenzIcon } from '../../../assets/icons/logo.svg';
import Footer from '../../molecules/footer/Footer';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  main: {
    flexGrow: 1,
  },
  headingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '3vh',
  },
  icon: {
    height: '14vw',
    width: '17.9vw',
    marginRight: '6vw',
  },
  heading: {
    fontSize: '12.5vw',
    display: 'flex',
  },
  navContainer: {
    width: '100%',
    display: 'grid',
    gridAutoFlow: 'column',
    gridGap: theme.spacing(2),
    justifyContent: 'center',
  },
}));

const Home: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const [showElements, setShowElements] = useState<boolean>(false);

  const toPage = (page: string): (() => void) => () => {
    setShowElements(false);
    setTimeout(() => {
      history.push(page);
    }, 350);
  };

  useEffect(() => {
    setShowElements(true);
  }, []);

  return (
    <>
      <CssBaseline />
      <Fade when={showElements} delay={100} duration={400}>
        <div className={classes.root}>
          <Grid container className={classes.main} alignContent="center">
            <Grid item xs={12}>
              <div className={classes.headingContainer}>
                <Typography variant="h1" className={classes.heading}>
                  <Zoom opposite cascade duration={700} delay={100}>
                    <NilsBenzIcon className={classes.icon} />
                    Nils Benz
                  </Zoom>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.navContainer}>
                <Fade bottom duration={500} delay={300}>
                  <Button
                    color="inherit"
                    size="large"
                    onClick={toPage('/videos')}
                  >
                    Videos
                  </Button>
                </Fade>
                <Fade bottom duration={500} delay={350}>
                  <Button
                    color="inherit"
                    size="large"
                    onClick={toPage('/webdev')}
                  >
                    Web Development
                  </Button>
                </Fade>
              </div>
            </Grid>
          </Grid>
          <Footer openAboutPage={toPage('/ueber-mich')} />
        </div>
      </Fade>
    </>
  );
};

export default Home;
