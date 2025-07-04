import express from "express";
import { getAllData } from "../controllers/getAllData.js";
import { getDataPathParams } from "../controllers/getDataByPathParams.js";

const apiRouter = express.Router();

apiRouter.get("/", getAllData);
apiRouter.get("/:field/:term", getDataPathParams);

export default apiRouter;
