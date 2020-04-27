import { pink, teal } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from '../pages/about/About';
import Home from '../pages/home/Home';
import Photos from '../pages/photos/Photos';
import Videos from '../pages/videos/Videos';
import WebDev from '../pages/webdev/WebDev';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: pink,
  },
  typography: {
    fontFamily: [
      'norwester',
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
          <Route path="/videos">
            <Videos />
          </Route>
          <Route path="/fotos">
            <Photos />
          </Route>
          <Route path="/webdev">
            <WebDev />
          </Route>
          <Route path="/ueber-mich">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
