require("dotenv").config();

const config = {
  env: {
    debug: process.env.DEBUG === "true",
    host: {
      protocol: process.env.HOST_PROTOCOL || "http",
      domain: process.env.HOST_DOMAIN || "127.0.0.1",
    },
    node_env: process.env.NODE_ENV || "development",
  },
  port: Number.parseInt(process.env.PORT || "5000"),
  auth0: {
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: "RS256",
  },
  db: {
    protocol: process.env.DB_PROTOCOL,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  },
};

export default config;
