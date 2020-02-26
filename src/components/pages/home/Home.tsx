import {
  AppBar,
  Box,
  Container,
  Tab,
  Tabs,
  Theme,
  Toolbar
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useState } from "react";
import { connect } from "react-redux";
import SwipeableViews from "react-swipeable-views";
import { AppState } from "../../../store";
import TabPanel from "../../atoms/tab-panel/TabPanel";
import Videos from "../videos/Videos";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    flexGrow: 1,
    textAlign: "start"
  },
  container: {
    paddingTop: theme.spacing(2)
  }
}));

interface Props {
  videos: string[];
  loadingVideos: boolean;
}

const Home: React.FC<Props> = ({ videos, loadingVideos }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [index, setIndex] = useState<number>(1);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setIndex(newValue);
  };

  const a11yProps = (index: any) => ({
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  });

  return (
    <Box minHeight="100vh" flexDirection="column">
      <AppBar position="static">
        <Toolbar>
          <img src="logo-klein.svg" alt="Nils Benz Videography" />
        </Toolbar>
      </AppBar>
      <Box marginTop={2} marginBottom={2}>
        <Tabs
          value={index}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          aria-label="full width tabs example"
          centered
        >
          <Tab label="Über mich" {...a11yProps(0)} />
          <Tab label="Videos" {...a11yProps(1)} />
          <Tab label="Websites" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Container className={classes.container} maxWidth="md">
        <SwipeableViews index={index} onChangeIndex={setIndex}>
          <TabPanel value={index} index={0} dir={theme.direction}>
            Home
          </TabPanel>
          <TabPanel value={index} index={1} dir={theme.direction}>
            <Videos />
          </TabPanel>
          <TabPanel value={index} index={2} dir={theme.direction}>
            Websites
          </TabPanel>
        </SwipeableViews>
      </Container>
    </Box>
  );
};

const mapStateToProps = ({ videos }: AppState) => ({
  videos: videos.videos,
  loadingVideos: videos.loading
});

export default connect(mapStateToProps)(Home);
