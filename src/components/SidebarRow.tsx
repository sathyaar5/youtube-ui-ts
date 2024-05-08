import React from "react";
import { Box, Typography, SvgIconProps } from "@mui/material";

interface SidebarRowProps {
  icon: React.ElementType<SvgIconProps>;
  title: string;
}

const SidebarRow: React.FC<SidebarRowProps> = ({ icon: Icon, title }) => {
  return (
    <Box className="sidebar_row">
      <Icon className="sidebarRow_icon" />
      <Typography className="sidebarRow_title">{title}</Typography>
    </Box>
  );
};

export default SidebarRow;
