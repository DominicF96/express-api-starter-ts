import { Dialect, Sequelize } from "sequelize";
import path from "path";
import config from "../configs/env.config";

const env = config.env.node_env;

const connection = config.db;

const sequelizeConnection = new Sequelize(
  connection.name,
  connection.user,
  connection.password,
  {
    host: connection.host,
    dialect: connection.protocol as Dialect,
    define: {
      timestamps: true,
    },
  }
);

export default sequelizeConnection;
