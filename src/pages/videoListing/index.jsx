import { useParams } from 'react-router-dom';
import { videos } from '../../data';
import { VideoCard } from '../../components';
import { PageWrapper } from "./videoListing.js";
const VideoListingPage = () => {
  const { category } = useParams();
  const filteredVideos = videos.filter((video) => video.category === category);
  return (
    <PageWrapper>
      <h1>{category}</h1>
      <div className="videosContainer">
        {filteredVideos.map((video) => (
          <VideoCard key={video._id} video={video}/>
        ))}
      </div>
    </PageWrapper>
  );
};

export default VideoListingPage;
