import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <Typography variant="h1">Home</Typography>
      <Button onClick={() => history.push('/videos')}>Videos</Button>
      <Link to="/fotos">
        <Button>Fotos</Button>
      </Link>
      <Link to="/webdev">
        <Button>Web Development</Button>
      </Link>
      <Link to="/ueber-mich">
        <Button>Ueber mich</Button>
      </Link>
    </>
  );
};

export default Home;
