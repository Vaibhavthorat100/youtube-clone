import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../features/ui/uiSlice";
import videoReducer from "../features/video/videoSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    video: videoReducer,
    auth: authReducer,
  },
});
