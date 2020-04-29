import { CssBaseline, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';
import Footer from '../../molecules/footer/Footer';

const About: React.FC = () => {
  const [showElements, setShowElements] = useState<boolean>(false);

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
      <Fade bottom when={showElements} duration={800}>
        <Typography variant="h1">Ueber mich</Typography>
        <Footer />
      </Fade>
    </>
  );
};

export default About;
