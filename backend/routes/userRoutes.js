import express from "express";
import { incrementScore } from "../jobs/incrementScore.js";
import User from "../models/User.js";

const router = express.Router();

router.post("/click/:userId", async (req, res) => {
  const result = await incrementScore(req.params.userId);
  res.json(result);
});

router.get("/user/:userId", async (req, res) => {
  const user = await User.findById(req.params.userId);
  res.json(user);
});

export default router;
