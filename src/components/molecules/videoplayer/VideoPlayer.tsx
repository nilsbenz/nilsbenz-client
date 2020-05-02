import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import { Video } from '../../util/videos';
import { Skeleton } from '@material-ui/lab';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
  base: {
    marginBottom: theme.spacing(4),
  },
  player: {
    border: 'none',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.grey[200],
  },
}));

interface Props {
  video: Video | null;
}

const VideoPlayer: React.FC<Props> = ({ video }) => {
  const classes = useStyles();

  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  const calculateWidth = () => {
    const windowWidth = window.innerWidth;
    const containerWidth =
      windowWidth >= 600 ? windowWidth - 48 : windowWidth - 32;
    return Math.min(containerWidth, 912);
  };

  const calculateHeight = (width: number) => {
    return (width / 16) * 9;
  };

  const updateDimensions = () => {
    const width = calculateWidth();
    setWidth(width);
    setHeight(calculateHeight(width));
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
    // eslint-disable-next-line
  }, []);

  if (!video) {
    return (
      <Skeleton
        width={width}
        height={height}
        variant="rect"
        className={classes.base}
      />
    );
  }

  return (
    <>
      <iframe
        title={video.displayName}
        width={width}
        height={height}
        src={video.link}
        allow="fullscreen"
        className={clsx(classes.base, classes.player)}
      ></iframe>
    </>
  );
};

export default VideoPlayer;
