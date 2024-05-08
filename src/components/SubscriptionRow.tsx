import React from "react";
import { Box, Typography } from "@mui/material";

interface SubscriptionRowProps {
  img: string;
  name: string;
}

const SubscriptionRow: React.FC<SubscriptionRowProps> = ({ img, name }) => {
  return (
    <Box className="subscriptionRow">
      <Box className="left">
        <img className="channelLogo" src={img} alt="Channel Logo" />
        <Typography className="channelName">{name}</Typography>
      </Box>
      <Box className="right">{/* <img className="LiveImg" src={Live}/> */}</Box>
    </Box>
  );
};

export default SubscriptionRow;
