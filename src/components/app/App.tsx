import { pink, teal } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import fire from "../../api/fire";
import { setLoadingVideos, setVideos } from "../../store/video/actions";
import { Box } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: pink,
  },
});

interface Props {
  setVideos: (videos: string[]) => void;
  setLoadingVideos: (loading: boolean) => void;
}

const App: React.FC<Props> = ({ setVideos, setLoadingVideos }) => {
  useEffect(() => {
    let videosRef = fire.database().ref("videos").orderByKey().limitToLast(100);

    videosRef.on("value", (snapshot: any) => {
      const res: string[] = Object.entries(snapshot.val()).map(([id, url]) =>
        String(url)
      );
      setVideos(res);
      setLoadingVideos(false);
    });
  }, [setVideos, setLoadingVideos]);

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={theme.palette.background.default}>
        <div>Hello world</div>
      </Box>
    </ThemeProvider>
  );
};

const mapDispatchToProps = {
  setVideos: setVideos,
  setLoadingVideos: setLoadingVideos,
};

export default connect(null, mapDispatchToProps)(App);
