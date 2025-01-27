interface Config {
  auth0: {
    audience: string;
    issuerBaseURL: string;
    tokenSigningAlg: string;
  };
  db: {
    host: string;
    name: string;
    port: number;
    protocol: string;
    password: string;
    user: string;
  };
  env: {
    debug: boolean;
    node_env: string;
  };
  host: {
    domain: string;
    port: number;
    protocol: string;
  };
}

declare const config: Config;
export default config;
