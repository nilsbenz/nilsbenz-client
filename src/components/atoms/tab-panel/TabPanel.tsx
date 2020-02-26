import { Box, Typography } from "@material-ui/core";
import React from "react";

interface Props {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

const TabPanel: React.FC<Props> = ({ children, value, index, ...other }) => {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box minHeight="100%">{children}</Box>}
    </Typography>
  );
};

export default TabPanel;
