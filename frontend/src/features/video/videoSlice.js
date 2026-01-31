import { createSlice } from "@reduxjs/toolkit";
import { videos as mockVideos } from "../../data/mockVideos";

const initialState = {
  videos: mockVideos,   // all videos
  search: "",           // search text
  likes: {},
  selectedVideo: null,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    // 🔍 update search text
    setSearch: (state, action) => {
      state.search = action.payload;
    },

    likeVideo: (state, action) => {
      const id = action.payload;
      state.likes[id] = (state.likes[id] || 0) + 1;
    },

    setSelectedVideo: (state, action) => {
      state.selectedVideo = action.payload;
    },

    addVideo: (state, action) => {
      state.videos.unshift(action.payload);
    },

    deleteVideo: (state, action) => {
      state.videos = state.videos.filter(
        (v) => v.id !== action.payload
      );
    },
  },
});

export const {
  setSearch,
  likeVideo,
  setSelectedVideo,
  addVideo,
  deleteVideo,
} = videoSlice.actions;

export default videoSlice.reducer;
