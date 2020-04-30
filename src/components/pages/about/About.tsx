import {
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React, { useEffect, useLayoutEffect, useState } from 'react';
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
import { HOME_ROUTE, SOFTWARE_ROUTE, VIDEOS_ROUTE } from '../../util/routes';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: 'var(--vh)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  main: {
    flexGrow: 1,
  },
  heading: {
    fontSize: 'min(12.5vw, 200px)',
  },
}));

const About: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const [showElements, setShowElements] = useState<boolean>(false);
  const [height, setHeight] = useState<CSSProperties>({
    '--vh': `${window.innerHeight}px`,
  });

  const toPage = (page: string): (() => void) => () => {
    setShowElements(false);
    setTimeout(() => {
      history.push(page);
    }, 650);
  };

  const navigationItems: NavigationItem[] = [
    {
      displayName: VIDEOS_DISPLAY_NAME,
      goToPage: toPage(VIDEOS_ROUTE),
    },
    {
      displayName: SOFTWARE_DISPLAY_NAME,
      goToPage: toPage(SOFTWARE_ROUTE),
    },
  ];

  useEffect(() => {
    setShowElements(true);
  }, []);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setHeight({
        '--vh': `${window.innerHeight}px`,
      });
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return (): void => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <>
      <CssBaseline />
      <Helmet>
        <title>Über mich | Nils Benz</title>
        <meta
          name="description"
          content={`Ich bin Nils, ${
            new Date().getFullYear() - 2000
          } Jahre jung und Hobby-Videograf. Neben meinem Job als Informatiker mache ich Videos und Websites, unter anderem für Hochzeitspaare und kleine Unternehmen.`}
        />
      </Helmet>
      <div className={classes.root} style={height}>
        <Container maxWidth="lg" className={classes.main}>
          <Header
            heading={ABOUT_DISPLAY_NAME}
            navigationItems={navigationItems}
            showElements={showElements}
          />
          <Grid container>
            <Grid item xs={12}>
              <Fade bottom when={showElements} duration={800}>
                <Typography>This is the about page.</Typography>
              </Fade>
            </Grid>
          </Grid>
        </Container>
        <Footer linkTo={HOME_DISPLAY_NAME} destructPage={toPage(HOME_ROUTE)} />
      </div>
    </>
  );
};

export default About;
