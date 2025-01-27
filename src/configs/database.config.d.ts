interface DatabaseConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: string;
  define: {
    timestamps: boolean;
  };
}

interface ProductionConfig {
  use_env_variable: string;
  define: {
    timestamps: boolean;
  };
}

interface Config {
  development: DatabaseConfig;
  test: DatabaseConfig;
  production: ProductionConfig;
}

declare const config: Config;
export = config;
