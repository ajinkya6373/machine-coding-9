import { useLocation, useNavigate } from "react-router-dom";
import { LeftbarLink, LeftbarWrapper } from "./leftbar";
import { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
export default function Sidebar() {
    const [selectedItem, setSelectedItem] = useState(null);
    const location = useLocation();
    const navigate = useNavigate()
    useEffect(() => {
      const currentPath = location.pathname;
      setSelectedItem(currentPath);
    }, [location.pathname]);
  
    const handleLinkClick = (link) => {
      navigate(link);
      setSelectedItem(link);
    };
  return (
    <LeftbarWrapper>
      <LeftbarLink
        onClick={() => handleLinkClick("/")}
        className={selectedItem === "/" ? "selected" : ""}
      >
        <HomeIcon/>
      <span>Home</span>  
      </LeftbarLink>
      <LeftbarLink
        onClick={() => handleLinkClick("/explore")}
        className={selectedItem === "/explore" ? "selected" : ""}
      >
        <ExploreIcon />
       <span> Explore </span> 
      </LeftbarLink>

      <LeftbarLink
        onClick={() => handleLinkClick("/playlists")}
        className={selectedItem === "/playlists" ? "selected" : ""}
      >
        <PlaylistAddIcon />
       <span>Playlists</span> 
      </LeftbarLink>

      <LeftbarLink
        onClick={() => handleLinkClick("/watch-later")}
        className={selectedItem === "/watch-later" ? "selected" : ""}
      >
        <WatchLaterIcon />
       <span>Watch Later</span> 
      </LeftbarLink>

    </LeftbarWrapper>
  )
}
