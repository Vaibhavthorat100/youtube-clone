import express from "express";
import {
  addComment,
  getCommentsByVideo,
  deleteComment,
} from "../controllers/comment.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// add comment
router.post("/", protect, addComment);

// get comments for a video
router.get("/:videoId", getCommentsByVideo);

// delete comment
router.delete("/:id", protect, deleteComment);

export default router;
