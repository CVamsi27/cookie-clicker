import express from "express";
import { incrementScore } from "../jobs/incrementScore.js";
import { getUserData } from "../jobs/getUserData.js";

const router = express.Router();

router.post("/click/:userId", async (req, res) => {
  try {
    const result = await incrementScore(req.params.userId);
    if (!result) {
      return res
        .status(404)
        .json({ error: "User not found or score update failed" });
    }

    res.json(result);
  } catch (e) {
    console.error("Error in /click/:userId:", e);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/user/:userId", async (req, res) => {
  try {
    const result = await getUserData(req.params.userId);
    if (!result) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(result);
  } catch (e) {
    console.error("Error in /user/:userId:", e);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
