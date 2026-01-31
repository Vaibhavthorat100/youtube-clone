import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: true, // testing ke liye true
  user: {
    id: "user01",
    name: "Vaibhav",
    email: "vaibhav@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
