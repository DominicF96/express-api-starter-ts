import { Router } from "express";
import * as featureFlagController from "../controllers/feature-flag.controller";
import isAuthenticatedUser from "../middlewares/auth-user";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: FeatureFlags
 *   description: Feature flag management
 */

/**
 * @swagger
 * /v1/feature-flags:
 *   get:
 *     summary: Retrieve a list of feature flags
 *     tags: [FeatureFlags]
 *     responses:
 *       200:
 *         description: A list of feature flags
 */
router.get("/", isAuthenticatedUser, featureFlagController.getFeatureFlags);

/**
 * @swagger
 * /v1/feature-flags:
 *   post:
 *     summary: Create a new feature flag
 *     tags: [FeatureFlags]
 *     responses:
 *       201:
 *         description: The created feature flag
 */
router.post("/", isAuthenticatedUser, featureFlagController.createFeatureFlag);

/**
 * @swagger
 * /v1/feature-flags/{id}:
 *   put:
 *     summary: Update an existing feature flag
 *     tags: [FeatureFlags]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The updated feature flag
 */
router.put(
  "/:id",
  isAuthenticatedUser,
  featureFlagController.updateFeatureFlag
);

/**
 * @swagger
 * /v1/feature-flags/{id}:
 *   delete:
 *     summary: Delete a feature flag
 *     tags: [FeatureFlags]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: No content
 */
router.delete(
  "/:id",
  isAuthenticatedUser,
  featureFlagController.deleteFeatureFlag
);

export default router;
