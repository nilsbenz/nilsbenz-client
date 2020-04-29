import { CssBaseline, Typography } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import { ABOUT_ROUTE } from '../../app/routes';
import Footer from '../../molecules/footer/Footer';

const AppDev: React.FC = () => {
  const history = useHistory();

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
      <Typography variant="h1">Web Development</Typography>
      <Footer openAboutPage={() => history.push(ABOUT_ROUTE)} />
    </>
  );
};

export default AppDev;
