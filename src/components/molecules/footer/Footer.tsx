import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';

interface Props {
  openAboutPage?: () => void;
}

const Footer: React.FC<Props> = ({ openAboutPage }) => {
  return (
    <Box
      paddingY={2}
      paddingX={3}
      display="flex"
      flexDirection="row-reverse"
      alignItems="center"
      justifyContent={openAboutPage ? 'space-between' : 'center'}
    >
      <Typography variant="body2">© 2020 NILSBENZ.CH</Typography>
      {openAboutPage && (
        <Button onClick={openAboutPage} color="inherit">
          Ueber Mich
        </Button>
      )}
    </Box>
  );
};

export default Footer;
