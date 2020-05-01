import {
  Button,
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import YoutubeIcon from '@material-ui/icons/YouTube';
import React, { ReactElement, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';
import { Link, useHistory } from 'react-router-dom';
import AboutImage from '../../../assets/images/about.jpg';
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

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    marginBottom: theme.spacing(12),
  },
  header: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(6),
    fontSize: theme.typography.pxToRem(48),
  },
  paragraph: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    fontSize: theme.typography.pxToRem(18),
  },
  aboutImage: {
    width: '100%',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[10],
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(6),
  },
  '@media screen and (max-width: 599px)': {
    aboutImage: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(3),
    },
    header: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(4),
      fontSize: theme.typography.pxToRem(48),
    },
  },
}));

const About: React.FC = () => {
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
      displayName: VIDEOS_DISPLAY_NAME,
      goToPage: toPage(VIDEOS_ROUTE),
    },
    {
      displayName: SOFTWARE_DISPLAY_NAME,
      goToPage: toPage(SOFTWARE_ROUTE),
    },
  ];

  const animate = (element: ReactElement): ReactElement => (
    <Fade bottom cascade when={showElements} duration={800}>
      {element}
    </Fade>
  );

  useEffect(() => {
    setShowElements(true);
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
      <Container maxWidth="md">
        <Header
          heading={ABOUT_DISPLAY_NAME}
          navigationItems={navigationItems}
          showElements={showElements}
        />
        <div className={classes.main}>
          {animate(
            <div>
              <Typography variant="h2" className={classes.header}>
                HALLO
              </Typography>
              <Typography className={classes.paragraph}>
                ICH BIN NILS, <br />
                {new Date().getFullYear() - 2000} JAHRE JUNG <br />
                UND KOMME AUS DEM ST. GALLER RHEINTAL.
              </Typography>
              <img
                src={AboutImage}
                alt="Nils Benz"
                className={classes.aboutImage}
              />
            </div>
          )}
          {animate(
            <Typography className={classes.paragraph}>
              IM FRUEHJAHR 2020 HABE ICH <br />
              DIE AUSBILDUNG ZUM EFZ INFORMATIKER <br />
              FACHRICHTUNG APPLIKATIONSENTWICKLUNG <br />
              ABGESCHLOSSEN.
            </Typography>
          )}
          {animate(
            <Typography className={classes.paragraph}>
              IN MEINER FREIZEIT PRODUZIERE ICH VIDEOS. <br />
              ICH HALTE BEISPIELSWEISE DEN GANZ <br />
              BESONDEREN TAG FUER EIN <br />
              HOCHZEITSPAAR FEST <br />
              ODER ERSTELLE EINEN WERBECLIP <br />
              FUER EIN KLEINES UNTERNEHMEN.
            </Typography>
          )}
          {animate(
            <Typography className={classes.paragraph}>
              EINIGE BEISPIELE HABE ICH <br />
              <Link to={VIDEOS_ROUTE}>HIER</Link> VEROEFFENTLICHT.
            </Typography>
          )}
          {animate(
            <Typography className={classes.paragraph}>
              AUSSERDEM PROGRAMMIERE ICH <br />
              WEBSITES UND APPS. <br />
              WEITERE INFORMATIONEN DAZU <br />
              FINDEST DU <Link to={SOFTWARE_ROUTE}>HIER</Link>.
            </Typography>
          )}
          <Grid container>
            <Grid item xs={12} sm={6}>
              {animate(
                <Typography variant="h2" className={classes.header}>
                  SOCIAL MEDIA
                </Typography>
              )}
              {animate(
                <div className={classes.paragraph}>
                  <Button
                    startIcon={<InstagramIcon />}
                    size="large"
                    href="https://instagram.com/bnznils"
                    target="_blank"
                  >
                    INSTAGRAM
                  </Button>
                  <br />
                  <Button
                    startIcon={<YoutubeIcon />}
                    size="large"
                    href="https://www.youtube.com/channel/UCZKO_s9JNw9_dWXs9yKo2bQ"
                    target="_blank"
                  >
                    YOUTUBE
                  </Button>
                </div>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              {animate(
                <Typography variant="h2" className={classes.header}>
                  KONTAKT
                </Typography>
              )}
              {animate(
                <Typography className={classes.paragraph}>
                  NILS BENZ <br />
                  WIDENSTRASSE 9 <br />
                  9444 DIEPOLDSAU <br />
                  SCHWEIZ <br />
                </Typography>
              )}
              {animate(
                <div className={classes.paragraph}>
                  <Button
                    startIcon={<PhoneIcon />}
                    size="large"
                    href="tel:+41786281925"
                  >
                    0041 78 628 19 25
                  </Button>
                  <br />
                  <Button
                    startIcon={<EmailIcon />}
                    size="large"
                    href="mailto:nils.benz@icloud.com"
                  >
                    NILS.BENZ@ICLOUD.COM
                  </Button>
                </div>
              )}
            </Grid>
          </Grid>
        </div>
      </Container>
      <Footer linkTo={HOME_DISPLAY_NAME} destructPage={toPage(HOME_ROUTE)} />
    </>
  );
};

export default About;
