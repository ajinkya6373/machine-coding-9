import { useVideoData } from '../../context';
import { videos } from '../../data';
import { VideoCard } from '../../components';

const WatchLaterPage = () => {
  const { videoState } = useVideoData();
  const { watchLaterList } = videoState;
  const watchLaterVideos = videos.filter((video) => watchLaterList.includes(video._id));
  return (
    <div>
      <h1>Watch Later</h1>
      <div className="videosContainer">
        {watchLaterVideos.length>0 
        ? watchLaterVideos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))
        : <h1>No Videos In watchLater ! ...</h1>

        }
      </div>
    </div>
  );
};

export default WatchLaterPage;
