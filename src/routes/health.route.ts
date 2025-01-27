import express from "express";
import db from "../services/database.service";
import isAuthenticatedUser from "../middlewares/auth-user";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: HealthChecks
 *   description: Health check endpoints
 */

/**
 * @swagger
 * /v1/health/db:
 *   get:
 *     summary: Check the health of the database
 *     tags: [HealthChecks]
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
router.get("/db", isAuthenticatedUser, async (req, res) => {
  try {
    await db.query("SELECT 1;");
    res.send({ status: "healthy" });
  } catch (error: any) {
    res.status(500).send({ status: "unhealthy", error });
  }
});

export default router;
