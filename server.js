// server.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

import storyRoutes from "./routes/stories.js";

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Bedtime Stories API 🎉");
});

// Serve images and audio statically
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/audio", express.static(path.join(__dirname, "audio")));

// API routes
app.use("/api/stories", storyRoutes);


// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
