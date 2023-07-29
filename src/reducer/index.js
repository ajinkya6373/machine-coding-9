import { v4 as uuid } from 'uuid'
const videoReducer = (state, action) => {
  switch (action.type) {
    case "HYDRATE_STATE":
      return { ...state, ...action.payload };
    case "ADD_TO_WATCH_LATER":
      return {
        ...state,
        watchLaterList: [...state.watchLaterList, action.payload],
      };

    case "REMOVE_FROM_WATCH_LATER": {
      return {
        ...state,
        watchLaterList: state.watchLaterList.filter(
          (id) => id !== action.payload
        ),
      };
    }

    case "CREATE_PLAYLIST":
      const newPlaylist = {
        _id: uuid(),
        name: action.payload.name,
        description:action.payload.description,
        videos: [],
      };
      return {
        ...state,
        playlists: [...state.playlists, newPlaylist],
      };
    case "DELETE_PLAYLIST": {
      const { playlistId } = action.payload;
      const updatedPlaylists = state.playlists.filter((playlist) => playlist._id !== playlistId);
      return {
        ...state,
        playlists: updatedPlaylists,
      };

    }
    case "ADD_TO_PLAYLIST":
      const { playlistId, videoId } = action.payload;
      const updatedPlaylists = state.playlists.map((playlist) =>
        playlist._id === playlistId ? { ...playlist, videos: [...playlist.videos, videoId] } : playlist
      );
      return {
        ...state,
        playlists: updatedPlaylists,
      };
    case "REMOVE_FROM_PLAYLIST": {
      const { playlistId, videoId } = action.payload;
      const updatedPlaylists = state.playlists.map((playlist) => {
        if (playlist._id === playlistId) {
          console.log(playlist);
          return { ...playlist, videos: playlist.videos.filter((id) => id !== videoId.toString()) }
        } else {
          return playlist
        }
      }
      );
      return {
        ...state,
        playlists: updatedPlaylists,
      };
    }
    case "ADD_NOTE": {
      const { videoId, noteText } = action.payload;
      const newNote = {
        id: uuid(),
        text: noteText,
      };
      return {
        ...state,
        notes: {
          ...state.notes,
          [videoId]: [...(state.notes[videoId] || []), newNote],
        },
      };
    }

    case "UPDATE_NOTE": {
      const { videoId, noteId, updatedNoteText } = action.payload;
      const updatedNotes = (state.notes[videoId] || []).map((note) =>
        note.id === noteId ? { ...note, text: updatedNoteText } : note
      );
      return {
        ...state,
        notes: {
          ...state.notes,
          [videoId]: updatedNotes,
        },
      };
    }

    case "DELETE_NOTE": {
      const { videoId, noteId } = action.payload;
      const updatedNotes = (state.notes[videoId] || []).filter((note) => note.id !== noteId);
      return {
        ...state,
        notes: {
          ...state.notes,
          [videoId]: updatedNotes,
        },
      };
    }

    default:
      return state;
  }
};

export default videoReducer;
