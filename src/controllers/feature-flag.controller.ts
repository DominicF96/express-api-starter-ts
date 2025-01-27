import { Request, Response } from "express";
import * as featureFlagService from "../services/feature-flag.service";
import { z } from "zod";

const FeatureFlagSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  isEnabled: z.boolean(),
});

/**
 * Get all feature flags.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
export const getFeatureFlags = async (req: Request, res: Response) => {
  try {
    const flags = await featureFlagService.getAllFeatureFlags();
    res.status(200).json(flags);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An error occurred" });
    }
  }
};

/**
 * Create a new feature flag.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
export const createFeatureFlag = async (req: Request, res: Response) => {
  try {
    const validatedData = FeatureFlagSchema.parse(req.body);

    const flag = await featureFlagService.createFeatureFlag(validatedData);
    res.status(201).json(flag);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An error occurred" });
    }
  }
};

/**
 * Update an existing feature flag.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
export const updateFeatureFlag = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const flag = await featureFlagService.updateFeatureFlag(
      Number(id),
      req.body
    );
    res.status(200).json(flag);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An error occurred" });
    }
  }
};

/**
 * Delete a feature flag.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
export const deleteFeatureFlag = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await featureFlagService.deleteFeatureFlag(Number(id));
    res.status(204).send();
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An error occurred" });
    }
  }
};
