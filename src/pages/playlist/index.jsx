import { useNavigate } from "react-router-dom";
import { useVideoData } from "../../context";
import { videos } from "../../data";
import { AddIcon, ModalContenet, PageWrapper, PlayListItem } from "./playlist";
import ClearIcon from "@mui/icons-material/Clear";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: `white`,
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  display: 'block',
  maxWidth: '100%',
  maxHeight: "100%",
  overflow: 'hidden',
};

const PlaylistPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const [playListDescription, setPlayListDescription] = useState("");

  const {
    videoState: { playlists },
    videoDispatch,
  } = useVideoData();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDeletePlaylist = (playlistId) => {
    videoDispatch({ type: "DELETE_PLAYLIST", payload: { playlistId } });
  };
  const handleCreatePlaylist = () => {
    if (playlistName) {
      videoDispatch({
        type: "CREATE_PLAYLIST",
        payload: { name: playlistName,description: playListDescription},
      });
      setPlaylistName("");
      setPlayListDescription("");
      handleClose()

    }
  };

  return (
    <PageWrapper>
      <h1>Playlists</h1>
      <div className="videosContainer">
        {playlists.map((playlist) => {
          const firstVideo = videos.find(
            (video) => video._id.toString() === playlist.videos[0]
          );
          return (
            <div>
              <ClearIcon onClick={() => handleDeletePlaylist(playlist._id)} />
              <PlayListItem
                key={playlist._id}
                onClick={() => navigate(`/playlist-videos/${playlist._id}`)}
              >
                  <img src={ firstVideo?.thumbnail ? firstVideo?.thumbnail:"https://picsum.photos/300/174"} alt={"thumbnail"} />
                <strong>{playlist.name}</strong>
                <p>{playlist?.description}</p>
              </PlayListItem>
            </div>
          );
        })}
        <AddIcon onClick={handleOpen}>
          <AddCircleOutlineOutlinedIcon />
        </AddIcon>
      </div>
      {
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ModalContenet>              
            <h2>Create Playlist</h2>
            <input
              type="text"
              placeholder="Enter playlist name"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter description.."
              value={playListDescription}
              onChange={(e) => setPlayListDescription(e.target.value)}
            />
            <button onClick={handleCreatePlaylist}>Create new playList</button>
            </ModalContenet>
          </Box>
        </Modal>
      }
    </PageWrapper>
  );
};

export default PlaylistPage;
