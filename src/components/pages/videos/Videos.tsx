import {
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';
import { useHistory } from 'react-router-dom';
import Footer from '../../molecules/footer/Footer';
import Header from '../../molecules/header/Header';
import {
  ABOUT_DISPLAY_NAME,
  HOME_DISPLAY_NAME,
  NavigationItem,
  SOFTWARE_DISPLAY_NAME,
  VIDEOS_DISPLAY_NAME,
} from '../../util/header';
import { ABOUT_ROUTE, HOME_ROUTE, SOFTWARE_ROUTE } from '../../util/routes';

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    marginBottom: theme.spacing(12),
  },
}));

const AppDev: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const [showElements, setShowElements] = useState<boolean>(false);

  const toPage = (page: string): (() => void) => () => {
    setShowElements(false);
    setTimeout(() => {
      history.push(page);
    }, 650);
  };

  const navigationItems: NavigationItem[] = [
    {
      displayName: HOME_DISPLAY_NAME,
      goToPage: toPage(HOME_ROUTE),
    },
    {
      displayName: SOFTWARE_DISPLAY_NAME,
      goToPage: toPage(SOFTWARE_ROUTE),
    },
  ];

  useEffect(() => {
    setShowElements(true);
  }, []);

  return (
    <>
      <CssBaseline />
      <Helmet>
        <title>Videos | Nils Benz</title>
        <meta
          name="description"
          content="Ich bin Nils, Hobby-Videograf aus dem St. Galler Rheintal. In meiner Freizeit produziere ich Videos, unter anderem für Hochzeitspaare und kleine Unternehmen."
        />
      </Helmet>
      <Container maxWidth="lg" className={classes.main}>
        <Header
          heading={VIDEOS_DISPLAY_NAME}
          navigationItems={navigationItems}
          showElements={showElements}
        />
        <Grid container className={classes.main}>
          <Grid item xs={12}>
            <Fade bottom when={showElements} duration={800}>
              <Typography>This is the videos page.</Typography>
            </Fade>
          </Grid>
        </Grid>
      </Container>
      <Footer linkTo={ABOUT_DISPLAY_NAME} destructPage={toPage(ABOUT_ROUTE)} />
    </>
  );
};

export default AppDev;
