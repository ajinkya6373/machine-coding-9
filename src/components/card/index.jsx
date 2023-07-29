import { useNavigate } from "react-router-dom";
import { useVideoData } from "../../context";
import { CardBottom, CardTop, CardWrapper } from "./card";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const {
    videoState: { watchLaterList },
    videoDispatch,
  } = useVideoData();
  const handleWatchLaterToggle = (e) => {
    e.stopPropagation(); 
    if (watchLaterList?.includes(video._id)) {
      videoDispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: video._id });
    } else {
      videoDispatch({ type: "ADD_TO_WATCH_LATER", payload: video._id });
    }
  };

  return (
    <CardWrapper onClick={()=>navigate(`/video/${video._id}`)}>
      <CardTop>
        <img src={video?.thumbnail} alt={video?.title} />
        {watchLaterList?.includes(video._id) ? (
          <WatchLaterIcon onClick={handleWatchLaterToggle}/>
        ) : (
          <WatchLaterOutlinedIcon onClick={handleWatchLaterToggle}/>
        )}
      </CardTop>
      <CardBottom>
        <img src={video?.thumbnail} alt="profile" />
        <div>
          <strong>{video?.title}</strong>
          <span>{video?.category}</span>
          <p>
            {video?.views} views | {video?.creator}
          </p>
        </div>
      </CardBottom>
    </CardWrapper>
  );
}
