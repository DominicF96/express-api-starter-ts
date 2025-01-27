const config = require('./env.config');

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
    username: config.db.user,
    password: config.db.password,
    database: config.db.name,
    host: config.db.host,
    dialect: config.db.protocol,
    define: {
      timestamps: true,
    },
  },
};