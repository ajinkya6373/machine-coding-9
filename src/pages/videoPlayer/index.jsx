import { useState } from "react";
import { useParams } from "react-router-dom";
import { useVideoData } from "../../context";
import { videos } from "../../data";

const SingleVideoPage = () => {
  const { videoId } = useParams();
  const {
    videoState: { watchLaterList, playlists, notes },
    videoDispatch,
  } = useVideoData();
  const video = videos.find((v) => v._id === parseInt(videoId));
  const [noteText, setNoteText] = useState("");
  const [playlistName, setPlaylistName] = useState("");
  const handleWatchLaterToggle = (videoId) => {
    if (watchLaterList.includes(videoId)) {
      videoDispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: videoId });
    } else {
      videoDispatch({ type: "ADD_TO_WATCH_LATER", payload: videoId });
    }
  };

  const handleCreatePlaylist = () => {
    if (playlistName) {
      videoDispatch({
        type: "CREATE_PLAYLIST",
        payload: { name: playlistName },
      });
      setPlaylistName("");
    }
  };

  const handleAddToPlaylist = (playlistId) => {
    videoDispatch({
      type: "ADD_TO_PLAYLIST",
      payload: { playlistId, videoId },
    });
  };

  const handleDeletePlayList = (playlistId) => {
    videoDispatch({
      type: "DELETE_PLAYLIST",
      payload: { playlistId },
    });
  };

  const handleSaveNote = () => {
    if (noteText.trim()) {
      videoDispatch({ type: "ADD_NOTE", payload: { videoId, noteText } });
      setNoteText("");
    }
  };

  const handleUpdateNote = (noteId) => {
    const updatedNoteText = noteText.trim();
    if (updatedNoteText) {
      videoDispatch({
        type: "UPDATE_NOTE",
        payload: { videoId, noteId, updatedNoteText },
      });
      setNoteText("");
    }
  };

  const handleDeleteNote = (noteId) => {
    videoDispatch({ type: "DELETE_NOTE", payload: { videoId, noteId } });
  };

  return (
    <div>
      <h1>{video.title}</h1>
      <div className="video-details">
        <div className="video-player">
          <iframe
            title={video.title}
            width="560"
            height="315"
            src={video.src}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-info">
          <p>Views: {video.views}</p>
          <p>Author: {video.creator}</p>
          <button onClick={() => handleWatchLaterToggle(video._id)}>
            {watchLaterList.includes(video._id)
              ? "Remove from Watch Later"
              : "Add to Watch Later"}
          </button>

          <div>
            <h3>Create Playlist</h3>
            <input
              type="text"
              placeholder="Enter playlist name"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
            />
            <button onClick={handleCreatePlaylist}>Create</button>
          </div>
          <div>
            <h3>Add to Playlist</h3>
            {playlists.map((playlist) => (
              <div key={playlist._id}>
                <span>{playlist.name}</span>
                <button onClick={() => handleAddToPlaylist(playlist._id)}>
                  Add
                </button>
                <button onClick={() => handleDeletePlayList(playlist._id)}>
                  DELETE playList
                </button>
              </div>
            ))}
          </div>
          <div>
            <h3>Notes</h3>
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            />
            <button onClick={handleSaveNote}>Save Note</button>
            <div>
              {notes[videoId]?.map((note) => (
                <div key={note.id}>
                  <p>{note.text}</p>
                  <button onClick={() => handleUpdateNote(note.id)}>
                    Update
                  </button>
                  <button onClick={() => handleDeleteNote(note.id)}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVideoPage;
