import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  player: {
    border: "none",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.grey[300],
    marginBottom: theme.spacing(2)
  }
}));

interface Props {
  video: string;
}

const VideoPlayer: React.FC<Props> = ({ video }) => {
  const classes = useStyles();

  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  const updateDimensions = () => {
    const width = calculateWidth();
    setWidth(width);
    setHeight(calculateHeight(width));
  };

  const calculateWidth = () => {
    const containerWidth = window.innerWidth - 48;
    return Math.min(containerWidth, 900);
  };

  const calculateHeight = (width: number) => {
    return (width / 16) * 9;
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
  });

  return (
    <>
      <iframe
        title={video}
        width={width}
        height={height}
        src={video}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture, fullscreen"
        className={classes.player}
      ></iframe>
    </>
  );
};

export default VideoPlayer;
