import { Sequelize } from "sequelize";
import config from "../config";

const db = new Sequelize(config.db.name, config.db.user, config.db.password, {
  host: config.db.host,
  dialect: "postgres",
  port: config.db.port,
});

export default db;
