import express from "express";
import {materialsRouter} from "./materials";

const apiRouters = express.Router();

apiRouters.use("/material", materialsRouter);

export {apiRouters}