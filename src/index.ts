import app from "./app";
import config from "./config";

const port = config.port;

app.listen(port, config.env.host.domain, () => {
  /* eslint-disable no-console */
  console.log(
    `Environment: ${config.env.node_env}\nListening  : ${config.env.host.protocol}://${config.env.host.domain}:${port}`
  );
});
