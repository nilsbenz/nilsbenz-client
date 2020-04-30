import {
  Divider,
  Button,
  Typography,
  Container,
  makeStyles,
  Theme,
} from '@material-ui/core';
import React from 'react';
import { ABOUT_DISPLAY_NAME, HOME_DISPLAY_NAME } from '../../util/header';
import clsx from 'clsx';
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  footer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  background: {
    backgroundColor: theme.palette.background.default,
  },
  whiteDivider: {
    backgroundColor: theme.palette.common.white,
  },
  blackDivider: {
    backgroundColor: theme.palette.common.black,
  },
  copyright: {
    display: 'flex',
    alignItems: 'center',
  },
  copyrightIcon: {
    marginRight: '2pt',
  },
}));

interface Props {
  linkTo: typeof HOME_DISPLAY_NAME | typeof ABOUT_DISPLAY_NAME;
  destructPage: () => void;
  transparent?: boolean;
}

const Footer: React.FC<Props> = ({ linkTo, destructPage, transparent }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Divider
        variant="middle"
        className={transparent ? classes.whiteDivider : classes.blackDivider}
      />
      <Container
        maxWidth={false}
        className={
          transparent
            ? classes.footer
            : clsx(classes.footer, classes.background)
        }
      >
        <Button onClick={destructPage} color="inherit">
          {linkTo}
        </Button>
        <Typography variant="body2" className={classes.copyright}>
          <CopyrightIcon className={classes.copyrightIcon} />
          {new Date().getFullYear()} NILSBENZ.CH
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
