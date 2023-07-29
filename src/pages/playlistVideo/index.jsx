import { useParams } from "react-router-dom";
import { useVideoData } from "../../context";
import { videos } from "../../data";
import VideoCard from "../../components/card";
import ClearIcon from "@mui/icons-material/Clear";
const PlaylistVideosPage = () => {
  const { playlistId } = useParams();
  const { videoState, videoDispatch } = useVideoData();
  const { playlists } = videoState;
  const playlist = playlists.find((pl) => pl._id === playlistId);

  const playlistVideos = videos?.filter((video) =>
    playlist.videos.includes(video._id.toString())
  );

  const deleteVideoFromPlaylist = (videoId) => {
    videoDispatch({
      type: "REMOVE_FROM_PLAYLIST",
      payload: { playlistId, videoId },
    });
  };
  return (
    <div>
      <h1>{playlist.name}</h1>
      <div className="videosContainer">
        {playlistVideos.length > 0 ? (
          playlistVideos.map((video) => (
            <div key={video._id}>
              <ClearIcon onClick={()=>deleteVideoFromPlaylist(video._id)}/>
              <VideoCard video={video} />
            </div>
          ))
        ) : (
          <h1>No video in playList ! </h1>
        )}
      </div>
    </div>
  );
};

export default PlaylistVideosPage;
