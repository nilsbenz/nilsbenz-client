import {
  Button,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Theme,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { NavigationItem } from '../../util/header';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  headingContainer: {
    width: 'fit-content',
  },
  heading: {
    fontSize: 'min(8vw, 110px)',
    backgroundImage: `linear-gradient(-45deg, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main}, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
    backgroundSize: '130% 100%',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  dropdownNav: {
    display: 'none',
  },
  navItem: {
    marginTop: '2px',
    marginBottom: '2px',
  },
  dropdownItem: {
    minWidth: '200px',
  },
  '@media screen and (max-width: 1149px)': {
    navItem: {
      marginTop: 0,
      marginBottom: 0,
    },
  },
  '@media screen and (max-width: 599px)': {
    header: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    nav: {
      display: 'none',
    },
    dropdownNav: {
      display: 'block',
    },
    heading: {
      fontSize: 'calc(9vw - 5px)',
    },
  },
}));

interface Props {
  heading: string;
  navigationItems: NavigationItem[];
  showElements: boolean;
}

const Header: React.FC<Props> = ({
  heading,
  navigationItems,
  showElements,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goToPage = (destructPage: () => void) => () => {
    handleClose();
    destructPage();
  };

  return (
    <header className={classes.header}>
      <div className={classes.headingContainer}>
        <Fade top when={showElements} duration={800}>
          <Typography variant="h1" className={classes.heading}>
            {heading}
          </Typography>
        </Fade>
      </div>
      <Fade top cascade when={showElements} duration={800}>
        <nav className={classes.nav}>
          {navigationItems.map((navigationItem) => (
            <Button
              onClick={navigationItem.goToPage}
              key={navigationItem.displayName}
              className={classes.navItem}
            >
              {navigationItem.displayName}
            </Button>
          ))}
        </nav>
        <nav className={classes.dropdownNav}>
          <IconButton onClick={handleOpenMenu} color="inherit">
            <MenuIcon fontSize="small" />
          </IconButton>
          <Menu
            id="nav-dropdown"
            anchorEl={anchorEl}
            keepMounted
            open={!!anchorEl}
            onClose={handleClose}
          >
            {navigationItems.map((navigationItem) => (
              <MenuItem
                onClick={goToPage(navigationItem.goToPage)}
                key={navigationItem.displayName}
                className={classes.dropdownItem}
              >
                {navigationItem.displayName}
              </MenuItem>
            ))}
          </Menu>
        </nav>
      </Fade>
    </header>
  );
};

export default Header;
