import { Routes, Route } from "react-router-dom";
import {
  ExplorePage,
  HomePage,
  PlayListPage,
  PlaylistVideosPage,
  SingleVideoPage,
  VideoListingPage,
  WatchLaterPage,
} from "./pages";
import { Sidebar } from "./components";
import "./App.css"
function App() {
  return (
    <div className="wrapper">
    <Sidebar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<VideoListingPage />} />
        <Route path="/video/:videoId" element={<SingleVideoPage />} />
        <Route path="/playlists" element={<PlayListPage />} />
        <Route
          path="/playlist-videos/:playlistId"
          element={<PlaylistVideosPage />}
        />
        <Route path="/watch-later" element={<WatchLaterPage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>
    </div>
  );
}

export default App;
