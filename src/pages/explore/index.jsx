
import { useState } from 'react';
import { videos } from '../../data';
import VideoCard from '../../components/card';
import { PageWrapper } from './explore';

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredVideos = videos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.creator.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageWrapper>
      <h1>Explore</h1>
      <div className="search-bar">
        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search video by title" />
      </div>
      <div className="videosContainer">
        { filteredVideos.length>0 ?  filteredVideos.map((video) => (
          <VideoCard key={video._id} video={video}/>
        )) 
        : <h1>No Result Found ! ...</h1>
        }
      </div>
    </PageWrapper>
  );
};

export default ExplorePage;
