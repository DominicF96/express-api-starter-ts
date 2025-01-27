const config = require("./env.config");
const { URL } = require("url");

function parseDatabaseUrl(databaseUrl) {
  const parsedUrl = new URL(databaseUrl);
  return {
    username: parsedUrl.username,
    password: parsedUrl.password,
    database: parsedUrl.pathname.split("/")[1],
    host: parsedUrl.hostname,
    port: parsedUrl.port,
    dialect: parsedUrl.protocol.slice(0, -1), // remove the trailing ':'
  };
}

module.exports = {
  development: {
    username: config.db.user,
    password: config.db.password,
    database: config.db.name,
    host: config.db.host,
    dialect: config.db.protocol,
    define: {
      timestamps: true,
    },
  },
  test: {
    username: config.db.user,
    password: config.db.password,
    database: config.db.name,
    host: config.db.host,
    dialect: config.db.protocol,
    define: {
      timestamps: true,
    },
  },
  production: {
    ...parseDatabaseUrl(process.env.DATABASE_PRIVATE_URL),
    define: {
      timestamps: true,
    },
  },
};
