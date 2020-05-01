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
import { useHistory } from 'react-router-dom';
import fire from '../../../api/fire';
import Footer from '../../molecules/footer/Footer';
import Header from '../../molecules/header/Header';
import VideoPlayer from '../../molecules/videoplayer/VideoPlayer';
import {
  ABOUT_DISPLAY_NAME,
  HOME_DISPLAY_NAME,
  NavigationItem,
  SOFTWARE_DISPLAY_NAME,
  VIDEOS_DISPLAY_NAME,
} from '../../util/header';
import { ABOUT_ROUTE, HOME_ROUTE, SOFTWARE_ROUTE } from '../../util/routes';
import { Genre, Video, VideoCollection } from '../../util/videos';

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

const Videos: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const [showElements, setShowElements] = useState<boolean>(false);
  const [videos, setVideos] = useState<VideoCollection>();

  const toVideoCollection = (videos: any): Video[] =>
    Array.isArray(videos) ? videos : [];

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

    const videosRef = fire.database().ref('videos').limitToLast(100);
    videosRef.on('value', (snapshot: any) => {
      const res: Genre[] = Object.entries(snapshot.val()).map(
        ([genre, videos]: [string, unknown]) => ({
          genre,
          videos: toVideoCollection(videos),
        })
      );
      setVideos({
        lifestyle:
          res[
            res.findIndex((genre) => genre.genre.toLowerCase() === 'lifestyle')
          ].videos,
        weddings:
          res[
            res.findIndex((genre) => genre.genre.toLowerCase() === 'weddings')
          ].videos,
      });
    });
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
      <Container maxWidth="md" className={classes.main}>
        <Header
          heading={VIDEOS_DISPLAY_NAME}
          navigationItems={navigationItems}
          showElements={showElements}
        />
        <div className={classes.main}>
          {animateFade(
            <div>
              <Typography className={classes.paragraph}>
                NEBEN MEINEM JOB ALS <br />
                INFORMATIKER PRODUZIERE ICH <br />
                VIDEOS. <br />
                ICH HALTE BEISPIELSWEISE DEN GANZ <br />
                BESONDEREN TAG FUER EIN <br />
                HOCHZEITSPAAR FEST <br />
                ODER ERSTELLE EINEN WERBECLIP <br />
                FUER EIN KLEINES UNTERNEHMEN.
              </Typography>
              <Typography className={classes.paragraph}>
                AUF DIESER SEITE HABE ICH EINIGE <br />
                MEINER PROJEKTE VEROEFFENTLICHT. <br />
              </Typography>
            </div>
          )}
          {animateTextZoom('LIFESTYLE')}
          {videos ? (
            videos.lifestyle.map((video) => (
              <VideoPlayer video={video} key={video.displayName} />
            ))
          ) : (
            <VideoPlayer video={null} />
          )}
          {animateTextZoom('HOCHZEITEN')}
          {videos ? (
            videos.weddings.map((video) => (
              <VideoPlayer video={video} key={video.displayName} />
            ))
          ) : (
            <VideoPlayer video={null} />
          )}
        </div>
      </Container>
      <Footer linkTo={ABOUT_DISPLAY_NAME} destructPage={toPage(ABOUT_ROUTE)} />
    </>
  );
};

export default Videos;
