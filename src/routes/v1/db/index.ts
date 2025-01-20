import express from "express";
import authenticateUser from "../../../middlewares/auth-user";
import db from "../../../config/database";
import config from "../../../config";

const router = express.Router();

router.use(authenticateUser);

/**
 * @swagger
 * /v1/db/health:
 *   get:
 *     description: Check the health of the database
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Database is healthy.
 *       401:
 *          description: Unauthorized.
 *       500:
 *         description: Database is unhealthy.
 */
router.get("/health", async (req, res) => {
  try {
    console.log(
      `DB_HOST`,
      config.db.host,
      `DB_NAME`,
      config.db.name,
      `POSTGRES`,
      config.db.user,
      `DB_PASSWORD`,
      config.db.password,
      `DB_PORT`,
      config.db.port
    );
    await db.query("SELECT 1;");
    res.send({ status: "healthy" });
  } catch (error: any) {
    res.status(500).send({ status: "unhealthy", error });
  }
});

export default router;
