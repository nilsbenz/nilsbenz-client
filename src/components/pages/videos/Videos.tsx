import { CssBaseline, Typography } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import { ABOUT_ROUTE } from '../../app/routes';
import Footer from '../../molecules/footer/Footer';

const Videos: React.FC = () => {
  const history = useHistory();
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
      <Typography variant="h1">Videos</Typography>
      <Footer openAboutPage={() => history.push(ABOUT_ROUTE)} />
    </>
  );
};

export default Videos;
