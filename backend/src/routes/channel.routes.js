import express from "express";

const router = express.Router();

// test channel route
router.get("/test", (req, res) => {
  res.json({ message: "Channel route working ✅" });
});

export default router;
