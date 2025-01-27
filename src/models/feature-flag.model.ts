import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../services/database.service";

export interface FeatureFlagAttributes {
  id: number;
  name: string;
  description?: string;
  isEnabled: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface FeatureFlagCreationAttributes
  extends Optional<FeatureFlagAttributes, "id" | "createdAt" | "updatedAt"> {}

/**
 * Sequelize model for FeatureFlag.
 */
export class FeatureFlag
  extends Model<FeatureFlagAttributes, FeatureFlagCreationAttributes>
  implements FeatureFlagAttributes
{
  public id!: number;
  public name!: string;
  public description?: string;
  public isEnabled!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Model initialization
FeatureFlag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isEnabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "FeatureFlags",
  }
);
