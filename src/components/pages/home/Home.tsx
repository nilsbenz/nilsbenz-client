import {
  Button,
  CssBaseline,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { useHistory } from 'react-router-dom';
import { ReactComponent as NilsBenzIcon } from '../../../assets/icons/logo.svg';
import Footer from '../../molecules/footer/Footer';
import { ABOUT_DISPLAY_NAME } from '../../util/header';
import { ABOUT_ROUTE, SOFTWARE_ROUTE, VIDEOS_ROUTE } from '../../util/routes';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    color: theme.palette.common.white,
    background: `linear-gradient(-45deg, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main}, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
    backgroundSize: '500% 500%',
    animation: '$gradient 15s ease -13.5s infinite',
  },
  main: {
    position: 'fixed',
    top: 'calc(25% + 60px)',
  },
  headingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1vh',
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
  '@keyframes gradient': {
    '0%': {
      backgroundPosition: '10% 50%',
    },
    '50%': {
      backgroundPosition: '90% 50%',
    },
    '100%': {
      backgroundPosition: '10% 50%',
    },
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
    }, 650);
  };

  useEffect(() => {
    setShowElements(true);
  }, []);

  return (
    <>
      <CssBaseline />
      <Helmet>
        <title>Nils Benz | Videografie & Softwareentwicklung</title>
        <meta
          name="description"
          content={`Ich bin Nils, ${
            new Date().getFullYear() - 2000
          } Jahre jung und Hobby-Videograf. Neben meinem Job als Informatiker mache ich Videos und Websites, unter anderem für Hochzeitspaare und kleine Unternehmen.`}
        />
        <meta
          name="keywords"
          content="Nils Benz, Film, Video, Website, App, Webseite, Hochzeit, Informatiker, Fotograf, Filmemacher, Videografie, Videography"
        />
      </Helmet>
      <div className={classes.root}>
        <Grid container className={classes.main} alignContent="center">
          <Grid item xs={12}>
            <div className={classes.headingContainer}>
              <Typography variant="h1" className={classes.heading}>
                <Zoom
                  opposite
                  cascade
                  duration={700}
                  delay={100}
                  when={showElements}
                >
                  <NilsBenzIcon className={classes.icon} />
                  NILS BENZ
                </Zoom>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.navContainer}>
              <Fade bottom duration={500} delay={300} when={showElements}>
                <Button
                  color="inherit"
                  size="large"
                  onClick={toPage(VIDEOS_ROUTE)}
                >
                  Videos
                </Button>
              </Fade>
              <Fade bottom duration={500} delay={350} when={showElements}>
                <Button
                  color="inherit"
                  size="large"
                  onClick={toPage(SOFTWARE_ROUTE)}
                >
                  Softwareentwicklung
                </Button>
              </Fade>
            </div>
          </Grid>
        </Grid>
        <Footer
          linkTo={ABOUT_DISPLAY_NAME}
          destructPage={toPage(ABOUT_ROUTE)}
          transparent
        />
      </div>
    </>
  );
};

export default Home;
