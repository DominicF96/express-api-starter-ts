import express from "express";

import docs from "./docs";
import db from "./db";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Scintillar API V1 👋",
  });
});

router.use("/docs", docs);
router.use("/db", db);

export default router;
