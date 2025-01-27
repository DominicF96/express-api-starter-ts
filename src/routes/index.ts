import express from "express";

import doc from "./doc.route";
import featureFlag from "./feature-flag.route";
import health from "./health.route";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Scintillar API V1 👋",
  });
});

router.use("/doc", doc);
router.use("/feature-flag", featureFlag);
router.use("/health", health);

export default router;
