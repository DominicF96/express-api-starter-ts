const { Pool } = require('pg');

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = process.env.DB_PORT;

// The secret connection string you copied earlier
const connectionString =
  `postgresql://${DB_USER}:${DB_PASSWORD}@viaduct.proxy.rlwy.net:${DB_PORT}/railway`;

const pool = new Pool({
  connectionString,
});

module.exports = pool;