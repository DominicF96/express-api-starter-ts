import { Dialect, Sequelize } from "sequelize";
import dbConf from "../configs/database.config";
import config from "../configs/env.config";

const env = config.env.node_env;

const connection = dbConf[env as "development" | "test" | "production"] as any;

const sequelizeConnection = new Sequelize(
  connection.name,
  connection.user,
  connection.password,
  {
    host: connection.host,
    dialect:
      connection.protocol === "postgresql"
        ? "postgres"
        : (connection.protocol as Dialect),
    define: {
      timestamps: true,
    },
  }
);

export default sequelizeConnection;
