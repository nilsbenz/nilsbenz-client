import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import { ABOUT_DISPLAY_NAME, HOME_DISPLAY_NAME } from '../../util/header';

interface Props {
  linkTo: typeof HOME_DISPLAY_NAME | typeof ABOUT_DISPLAY_NAME;
  destructPage: () => void;
}

const Footer: React.FC<Props> = ({ linkTo, destructPage }) => {
  return (
    <Box
      paddingY={2}
      paddingX={3}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Button onClick={destructPage} color="inherit">
        {linkTo}
      </Button>
      <Typography variant="body2">
        © {new Date().getFullYear()} NILSBENZ.CH
      </Typography>
    </Box>
  );
};

export default Footer;
