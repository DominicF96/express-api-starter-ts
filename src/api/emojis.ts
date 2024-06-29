import express from "express";
const pool = require("../../db");

const router = express.Router();

type EmojiResponse = string[];

router.get("/emojis", async (req, res) => {
  const posts = await pool.query("SELECT * FROM test;");
  res.send({ posts });
});

export default router;
