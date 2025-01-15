import { Router } from "express";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const router = Router();

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.1",
    info: {
      title: "Scintillar API",
      version: "1.0.0",
      description: "Scintillar API Documentation",
    },
    basePath: "/",
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: [`${__dirname}/../**/*.ts`],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

router.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

export default router;
export { swaggerOptions, swaggerDocs };
