import { createContext, useContext, useEffect, useReducer } from "react";
import videoReducer from "../reducer";
const VideoContext = createContext();
const storedState = localStorage.getItem('videoLibraryState');
const INITIAL_STATE = storedState ? JSON.parse(storedState) : {
    watchLaterList: [],
    playlists: [],
    notes: [],
};

export const VideoProvider = ({ children }) => {
    const [videoState, videoDispatch] = useReducer(videoReducer, INITIAL_STATE)
    useEffect(() => {
        const storedState = localStorage.getItem('videoLibraryState');
        if (storedState) {
            videoDispatch({ type: 'HYDRATE_STATE', payload: JSON.parse(storedState) });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('videoLibraryState', JSON.stringify(videoState));
    }, [videoState]);
    return (
        <VideoContext.Provider value={{ videoState, videoDispatch }}>
            {children}
        </VideoContext.Provider>
    )
}
export const useVideoData = () => useContext(VideoContext)
