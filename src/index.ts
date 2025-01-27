import app from "./app";
import config from "./configs/env.config";

app.listen(config.host.port, config.host.domain, () => {
  console.log(
    `Server is running on http://${config.host.domain}:${config.host.port}`
  );
  // if (config.env.node_env === "development" && config.env.debug) {
  console.log(`With provided configuration`, config);
  // }
});
