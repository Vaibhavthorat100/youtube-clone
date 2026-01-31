import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// routes
import authRoutes from "./routes/auth.routes.js";
import channelRoutes from "./routes/channel.routes.js";
import videoRoutes from "./routes/video.routes.js";
import commentRoutes from "./routes/comment.routes.js";

const app = express();

// 🔑 ES module __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middlewares
app.use(cors());
app.use(express.json());

// 🔥 STATIC VIDEOS (IMPORTANT FIX)
app.use(
  "/videos",
  express.static(path.join(__dirname, "../public/videos"))
);

// routes
app.use("/api/auth", authRoutes);
app.use("/api/channels", channelRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

// test route
app.get("/", (req, res) => {
  res.send("YouTube Clone Backend API Running 🚀");
});

export default app;
