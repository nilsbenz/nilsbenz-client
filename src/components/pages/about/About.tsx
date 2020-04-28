import { CssBaseline, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
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
      <Fade bottom when={showElements} duration={800}>
        <Typography variant="h1">Ueber mich</Typography>
        <Footer />
      </Fade>
    </>
  );
};

export default About;
