import express from "express";
import {stories} from "../data/stories.js";

const router = express.Router();

router.get("/",(req,res) => {
  res.json(stories);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const story = stories.find(s => s.id === id);
  if (!story) return res.status(404).json({ message: "Story not found" });
  res.json(story);
});

export default router;