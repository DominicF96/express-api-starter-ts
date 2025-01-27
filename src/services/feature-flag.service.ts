import {
  FeatureFlag,
  FeatureFlagCreationAttributes,
} from "../models/feature-flag.model";

/**
 * Retrieve all feature flags.
 * @returns {Promise<FeatureFlag[]>} A promise that resolves to an array of feature flags.
 */
export const getAllFeatureFlags = async () => {
  return await FeatureFlag.findAll();
};

/**
 * Retrieve a feature flag by its name.
 * @param {string} name - The name of the feature flag.
 * @returns {Promise<FeatureFlag | null>} A promise that resolves to the feature flag or null if not found.
 */
export const getFeatureFlagByName = async (name: string) => {
  return await FeatureFlag.findOne({ where: { name } });
};

/**
 * Create a new feature flag.
 * @param {FeatureFlagCreationAttributes} data - The data to create the feature flag.
 * @returns {Promise<FeatureFlag>} A promise that resolves to the created feature flag.
 */
export const createFeatureFlag = async (
  data: FeatureFlagCreationAttributes
) => {
  return await FeatureFlag.create(data);
};

/**
 * Update an existing feature flag.
 * @param {number} id - The ID of the feature flag to update.
 * @param {Partial<FeatureFlag>} data - The data to update the feature flag.
 * @returns {Promise<FeatureFlag>} A promise that resolves to the updated feature flag.
 * @throws {Error} If the feature flag is not found.
 */
export const updateFeatureFlag = async (
  id: number,
  data: Partial<FeatureFlag>
) => {
  const flag = await FeatureFlag.findByPk(id);
  if (!flag) {
    throw new Error("Feature flag not found");
  }
  return await flag.update(data);
};

/**
 * Delete a feature flag.
 * @param {number} id - The ID of the feature flag to delete.
 * @returns {Promise<void>} A promise that resolves when the feature flag is deleted.
 * @throws {Error} If the feature flag is not found.
 */
export const deleteFeatureFlag = async (id: number) => {
  const flag = await FeatureFlag.findByPk(id);
  if (!flag) {
    throw new Error("Feature flag not found");
  }
  return await flag.destroy();
};
