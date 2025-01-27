require("dotenv").config({ path: process.env.ENV_PATH || ".env" });

const config = {
  auth0: {
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: "RS256",
  },
  db: {
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    port: Number.parseInt(process.env.DB_PORT || "5432"),
    protocol: process.env.DB_PROTOCOL || "postgres",
    password: process.env.POSTGRES_PASSWORD,
    user: process.env.POSTGRES_USER,
  },
  env: {
    debug: process.env.DEBUG === "true",
    node_env: process.env.NODE_ENV || "development",
  },
  host: {
    domain: process.env.HOST_DOMAIN || "0.0.0.0",
    port: Number.parseInt(process.env.PORT || "5000"),
    protocol: process.env.HOST_PROTOCOL || "http",
  },
};

module.exports = config;
