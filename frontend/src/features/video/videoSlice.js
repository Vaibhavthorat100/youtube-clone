import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

// Backend se videos fetch
export const fetchVideos = createAsyncThunk(
  "video/fetchVideos",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/videos");
      return res.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch videos");
    }
  }
);

const initialState = {
  videos: [],
  search: "",          // 🔴 SEARCH STATE (IMPORTANT)
  loading: false,
  error: null,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    // 🔍 PURANA SEARCH LOGIC
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSearch } = videoSlice.actions;
export default videoSlice.reducer;
