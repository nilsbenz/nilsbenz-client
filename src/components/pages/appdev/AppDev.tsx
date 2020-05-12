import {
  Container,
  CssBaseline,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React, { ReactElement, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { useHistory, Link } from 'react-router-dom';
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
  '@media screen and (max-width: 599px)': {
    header: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(4),
      fontSize: theme.typography.pxToRem(48),
    },
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

  const animateFade = (element: ReactElement): ReactElement => (
    <Fade bottom cascade when={showElements} duration={800}>
      {element}
    </Fade>
  );

  const animateTextZoom = (text: string): ReactElement => (
    <div>
      <Typography variant="h2" className={classes.header}>
        <Zoom opposite cascade duration={800} when={showElements}>
          {text}
        </Zoom>
      </Typography>
    </div>
  );

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
        <meta
          name="keywords"
          content="Nils Benz, Website, App, Webseite, Informatiker, Programmieren, Software, Softwareentwicklung, Informatik"
        />
      </Helmet>
      <Container maxWidth="md" className={classes.main}>
        <Header
          heading={SOFTWARE_DISPLAY_NAME}
          navigationItems={navigationItems}
          showElements={showElements}
        />
        <div className={classes.main}>
          {animateTextZoom('WAS ICH KANN')}
          {animateFade(
            <Typography className={classes.paragraph}>
              IM FRUEHJAHR 2020 HABE <br />
              ICH MEINE AUSBILDUNG ZUM <br />
              EFZ INFORMATIKER FACHRICHTUNG <br />
              APPLIKATIONSENTWICKLUNG ABGESCHLOSSEN.
            </Typography>
          )}
          {animateFade(
            <Typography className={classes.paragraph}>
              NEBEN MEINEM JOB PROGRAMMIERE <br />
              ICH WEBSITES UND APPS <br />
              FUER KLEINE UNTERNEHMEN.
            </Typography>
          )}
          {animateTextZoom('REFERENZEN')}
          {animateFade(
            <Typography className={classes.paragraph}>
              MEINE <Link to={HOME_ROUTE}>EIGENE WEBSITE</Link> HABE ICH <br />
              SELBER DESIGNT UND UMGESETZT <br />
              UND BETREIBE DIESE NUN AUF <br />
              <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FIREBASE
              </a>
              , EINEM SERVICE VON GOOGLE.
            </Typography>
          )}
          {animateFade(
            <Typography className={classes.paragraph}>
              FUER WEITERE REFERENZEN <br />
              KANNST DU DICH GERNE <br />
              PERSOENLICH BEI MIR MELDEN.
            </Typography>
          )}
          {animateTextZoom('INTERESSIERT?')}
          {animateFade(
            <Typography className={classes.paragraph}>
              DANN MELDE DICH BEI <Link to={ABOUT_ROUTE}>MIR</Link>. <br />
              ICH WUERDE MICH FREUEN, <br />
              DEIN PROJEKT REALISIEREN ZU DUERFEN.
            </Typography>
          )}
        </div>
      </Container>
      <Footer linkTo={ABOUT_DISPLAY_NAME} destructPage={toPage(ABOUT_ROUTE)} />
    </>
  );
};

export default AppDev;
