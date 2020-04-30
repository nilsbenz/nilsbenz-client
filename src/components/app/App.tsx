import { pink, teal } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from '../pages/about/About';
import AppDev from '../pages/appdev/AppDev';
import Home from '../pages/home/Home';
import Videos from '../pages/videos/Videos';
import {
  ABOUT_ROUTE,
  HOME_ROUTE,
  SOFTWARE_ROUTE,
  VIDEOS_ROUTE,
} from '../util/routes';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: pink,
  },
  typography: {
    fontFamily: [
      'Norwester',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path={VIDEOS_ROUTE}>
            <Videos />
          </Route>
          <Route path={SOFTWARE_ROUTE}>
            <AppDev />
          </Route>
          <Route path={ABOUT_ROUTE}>
            <About />
          </Route>
          <Route path={HOME_ROUTE}>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
