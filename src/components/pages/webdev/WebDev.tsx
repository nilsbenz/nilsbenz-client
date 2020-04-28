import { Typography } from '@material-ui/core';
import React from 'react';
import Footer from '../../molecules/footer/Footer';
import { useHistory } from 'react-router-dom';

const WebDev: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <Typography variant="h1">Web Development</Typography>
      <Footer openAboutPage={() => history.push('/ueber-mich')} />
    </>
  );
};

export default WebDev;
