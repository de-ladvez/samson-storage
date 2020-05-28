import express from "express";
import {materialsRouter} from "./materials";
import {containerRouter} from "./containers";

const apiRouters = express.Router();

apiRouters.use("/material", materialsRouter);
apiRouters.use("/container", containerRouter);

export {apiRouters}