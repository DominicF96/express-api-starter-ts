import express from "express";
import authenticateUser from "../../../middlewares/auth-user";
import pool from "../../../db";

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
    await pool.query("SELECT 1;");
    res.send({ status: "healthy" });
  } catch (error: any) {
    res.status(500).send({ status: "unhealthy", error: error.message });
  }
});

export default router;
