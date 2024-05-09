import React from "react";
import { Box } from "@mui/material";

import Tags from "./Tags";
import { VideoCard, VideoCardProps } from "./VideoCard";

const VIDEO_DATA: VideoCardProps[] = [
  {
    thumbnail:
      "https://i.ytimg.com/vi/EdvydlHCViY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCS2Hk21svW5Rs3KwQO5-aDmqHBlA",
    duration: "5:27",
    channelName: "T-series Telugu",
    channelLogo:
      "https://yt3.ggpht.com/ytc/AIdro_kD2EVax1FrVyRDkBXzK7H5PcE0b9osnB0gW2AAdFk0O8g=s48-c-k-c0x00ffffff-no-rj",
    title: "Pushpa Telugu Lyrical",
    views: "25M",
    time: "5 days ago",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/EdvydlHCViY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCS2Hk21svW5Rs3KwQO5-aDmqHBlA",
    duration: "5:27",
    channelName: "T-series Telugu",
    channelLogo:
      "https://yt3.ggpht.com/ytc/AIdro_kD2EVax1FrVyRDkBXzK7H5PcE0b9osnB0gW2AAdFk0O8g=s48-c-k-c0x00ffffff-no-rj",
    title: "Pushpa Telugu Lyrical",
    views: "25M",
    time: "5 days ago",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/EdvydlHCViY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCS2Hk21svW5Rs3KwQO5-aDmqHBlA",
    duration: "5:27",
    channelName: "T-series Telugu",
    channelLogo:
      "https://yt3.ggpht.com/ytc/AIdro_kD2EVax1FrVyRDkBXzK7H5PcE0b9osnB0gW2AAdFk0O8g=s48-c-k-c0x00ffffff-no-rj",
    title: "Pushpa Telugu Lyrical",
    views: "25M",
    time: "5 days ago",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/EdvydlHCViY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCS2Hk21svW5Rs3KwQO5-aDmqHBlA",
    duration: "5:27",
    channelName: "T-series Telugu",
    channelLogo:
      "https://yt3.ggpht.com/ytc/AIdro_kD2EVax1FrVyRDkBXzK7H5PcE0b9osnB0gW2AAdFk0O8g=s48-c-k-c0x00ffffff-no-rj",
    title: "Pushpa Telugu Lyrical",
    views: "25M",
    time: "5 days ago",
  },
];

const HomePage: React.FC = () => {
  return (
    <Box className="homepage">
      <Tags />
      {VIDEO_DATA.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </Box>
  );
};

export default HomePage;
