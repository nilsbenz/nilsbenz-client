import { Box, CircularProgress, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../../store";
import VideoPlayer from "../../atoms/video-player/VideoPlayer";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    flexGrow: 1,
    textAlign: "start"
  },
  progress: {
    marginTop: "20%"
  }
}));

interface Props {
  videos: string[];
  loadingVideos: boolean;
}

const Videos: React.FC<Props> = ({ videos, loadingVideos }) => {
  const classes = useStyles();

  return (
    <>
      <Box>
        <Box paddingLeft={1} paddingRight={1}>
          <Typography variant="h4" gutterBottom>
            Videos
          </Typography>
        </Box>
        <Box textAlign="center" p={0}>
          {loadingVideos ? (
            <CircularProgress className={classes.progress} />
          ) : (
            videos.map(video => <VideoPlayer video={video} />)
          )}
        </Box>
      </Box>
    </>
  );
};

const mapStateToProps = ({ videos }: AppState) => ({
  videos: videos.videos,
  loadingVideos: videos.loading
});

export default connect(mapStateToProps)(Videos);
