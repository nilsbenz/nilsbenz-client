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
import { ABOUT_ROUTE, HOME_ROUTE, VIDEOS_ROUTE } from '../../util/routes';

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
      displayName: VIDEOS_DISPLAY_NAME,
      goToPage: toPage(VIDEOS_ROUTE),
    },
  ];

  useEffect(() => {
    setShowElements(true);
  }, []);

  return (
    <>
      <CssBaseline />
      <Helmet>
        <title>Softwareentwicklung | Nils Benz</title>
        <meta
          name="description"
          content="Ich bin Nils, gelernter Informatiker Fachrichtung Applikationsentwicklung. Neben meinem Job mache ich Websites und Apps für kleine Unternehmen."
        />
      </Helmet>
      <Container maxWidth="md" className={classes.main}>
        <Header
          heading={SOFTWARE_DISPLAY_NAME}
          navigationItems={navigationItems}
          showElements={showElements}
        />
        <Grid container className={classes.main}>
          <Grid item xs={12}>
            <Fade bottom when={showElements} duration={800}>
              <Typography>This is the software development page.</Typography>
            </Fade>
          </Grid>
        </Grid>
      </Container>
      <Footer linkTo={ABOUT_DISPLAY_NAME} destructPage={toPage(ABOUT_ROUTE)} />
    </>
  );
};

export default AppDev;
