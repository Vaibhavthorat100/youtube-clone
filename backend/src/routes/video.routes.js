import express from "express";
import {
  createVideo,
  getAllVideos,
  getVideoById,
  deleteVideo,
} from "../controllers/video.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// upload video
router.post("/", protect, createVideo);

// home page videos + search + filter
router.get("/", getAllVideos);

// single video page
router.get("/:id", getVideoById);

// delete video
router.delete("/:id", protect, deleteVideo);

export default router;
