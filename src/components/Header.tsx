import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import {
  Apps as AppsIcon,
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  VideoCall as VideoCallIcon,
  Mic as MicIcon,
  Search as SearchIcon,
  Home as HomeIcon,
  Explore as ExploreIcon,
  Subscriptions as SubscriptionsIcon,
  VideoLibrary as VideoLibraryIcon,
  History as HistoryIcon,
  OndemandVideo as OndemandVideoIcon,
  WatchLater as WatchLaterIcon,
  ThumbUp as ThumbUpIcon,
  ExpandMoreOutlined as ExpandMoreOutlinedIcon,
  YouTube as YouTubeIcon,
  Theaters as TheatersIcon,
  SportsEsports as SportsEsportsIcon,
  Help as HelpIcon,
  Feedback as FeedbackIcon,
  Settings as SettingsIcon,
  Flag as FlagIcon,
} from "@mui/icons-material";

import YoutubeLogo from "../components/Youtube-logo.png";
import SidebarRow from "./SidebarRow";
import SubscriptionRow from "./SubscriptionRow";

const Header: React.FC = () => {
  const toggleSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    const MiniSidebar = document.querySelector(".mini_sidebar");
    if (sidebar) {
      sidebar.classList.toggle("active");
    }
    if (MiniSidebar) {
      MiniSidebar.classList.toggle("active");
    }
  };

  return (
    <Box className="parent_header">
      <Box className="header">
        <Box className="header_left" onClick={toggleSidebar}>
          <MenuIcon />
          <img className="header_logo" src={YoutubeLogo} alt="YouTube Logo" />
        </Box>
        <Box className="header_input">
          <Box className="header_middle">
            <input className="SearchInput" placeholder="Search" type="text" />
            <SearchIcon className="header_searchBtn" />
          </Box>
          <MicIcon />
        </Box>

        <Box className="header_right">
          <VideoCallIcon className="header_icons" />
          <NotificationsIcon className="header_icons" />
          <AppsIcon className="header_icons" />
        </Box>
      </Box>
      <Box className="sidebar">
        <SidebarRow icon={HomeIcon} title="Home" />
        <SidebarRow icon={ExploreIcon} title="Explore" />
        <SidebarRow icon={SubscriptionsIcon} title="Subscription" />
        <Divider />
        <SidebarRow icon={VideoLibraryIcon} title="Library" />
        <SidebarRow icon={HistoryIcon} title="History" />
        <SidebarRow icon={OndemandVideoIcon} title="Your videos" />
        <SidebarRow icon={WatchLaterIcon} title="Watch Later" />
        <SidebarRow icon={ThumbUpIcon} title="Liked Videos" />
        <SidebarRow icon={ExpandMoreOutlinedIcon} title="Show more" />
        <Divider />
        <Typography variant="subtitle1" className="sidebar_heading">
          SUBSCRIPTIONS
        </Typography>
        <SubscriptionRow
          img="https://yt3.ggpht.com/ZZE-4RYOIhFUE29k6wxh7xktniVmSwSdwzOxlJVGJZwN1I0sZuQvovdyk8aHKO31fwQ9bU_aOg=s176-c-k-c0x00ffffff-no-rj-mo"
          name="Soft Suave"
        />
        <SubscriptionRow
          img="https://yt3.googleusercontent.com/ytc/AIdro_kNaumymcxYzV7_n7_VRbQ2TRlIbU2w5csOMN0cH8jiED8=s176-c-k-c0x00ffffff-no-rj-mo"
          name="Code with Harry"
        />
        <SubscriptionRow
          img="https://yt3.googleusercontent.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s176-c-k-c0x00ffffff-no-rj-mo"
          name="freeCodeCamp"
        />
        <SubscriptionRow
          img="https://yt3.ggpht.com/o4MZVi2qdNgx0K7vpEl7DT2PefjROdisZTD7is6TMimF1_DTM49O1ld3iQzTpE5MCj86c-vzav8=s176-c-k-c0x00ffffff-no-rj-mo"
          name="Telusko"
        />
        <SubscriptionRow
          img="https://yt3.ggpht.com/rsKAERVEXNTq6lbdIHUlm3aVAw4R2D1fPkDz-7sPccu9qwic5EYfSe6VI7tNB5-_r0Ip5_P0=s176-c-k-c0x00ffffff-no-rj-mo"
          name="Gaurav Sen"
        />
        <SidebarRow icon={ExpandMoreOutlinedIcon} title="Show more" />

        <Typography variant="subtitle1" className="sidebar_heading">
          MORE FROM YOUTUBE
        </Typography>
        <SidebarRow icon={YouTubeIcon} title="Youtube premium" />
        <SidebarRow icon={TheatersIcon} title="Movies" />
        <SidebarRow icon={SportsEsportsIcon} title="Gaming" />
        <Divider />
        <SidebarRow icon={SettingsIcon} title="Settings" />
        <SidebarRow icon={FlagIcon} title="Report History" />
        <SidebarRow icon={HelpIcon} title="Help" />
        <SidebarRow icon={FeedbackIcon} title="Send feedback" />
        <Divider />
      </Box>
      <Box className="mini_sidebar">
        <Box className="miniDev">
          <HomeIcon />
          <Typography variant="subtitle2">Home</Typography>
        </Box>
        <Box className="miniDev">
          <ExploreIcon />
          <Typography variant="subtitle2">Explore</Typography>
        </Box>
        <Box className="miniDev">
          <SubscriptionsIcon />
          <Typography variant="subtitle2">Subscription</Typography>
        </Box>
        <Box className="miniDev">
          <VideoLibraryIcon />
          <Typography variant="subtitle2">Library</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
