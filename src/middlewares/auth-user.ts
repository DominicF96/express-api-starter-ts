import { auth } from "express-oauth2-jwt-bearer";
import config from "../config";
import { NextFunction, Request, Response } from "express";

const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
  auth({
    audience: config.auth0.audience,
    issuerBaseURL: config.auth0.issuerBaseURL,
    tokenSigningAlg: config.auth0.tokenSigningAlg,
  })(req, res, (err) => {
    if (err) {
      return res
        .status(err.status || 500)
        .json({ code: err.status, error: err.name });
    }
    next();
  });
};

export default authenticateUser;
