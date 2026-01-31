import express from "express";

const router = express.Router();

// test comment route
router.get("/test", (req, res) => {
  res.json({ message: "Comment route working ✅" });
});

export default router;
