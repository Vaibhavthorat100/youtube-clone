import express from "express";

const router = express.Router();

// test video route
router.get("/test", (req, res) => {
  res.json({ message: "Video route working ✅" });
});

export default router;
