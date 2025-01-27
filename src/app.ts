import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import api from "./routes";
import errorHandler from "./middlewares/error-handler";

const app = express();

app.use(errorHandler);
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/v1", api);

export default app;
