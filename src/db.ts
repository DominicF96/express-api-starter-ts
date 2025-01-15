import { Pool } from "pg";
import config from "./config";

// The secret connection string you copied earlier
const connectionString = `${config.db.protocol}://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/railway`;

const pool = new Pool({
  connectionString,
});

export default pool;
