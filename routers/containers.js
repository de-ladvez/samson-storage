import express from "express";
import ContainerModel from "../models/containers";
import {container} from "../validation/containers"
import Joi from "@hapi/joi"
import {parseError} from "../util/helper"

const containerRouter = express.Router();

containerRouter.put("", async (req, res) => {
        try {
            const arr = req.body;
            await Joi.validate({...arr}, container);
            const saveContainer = new ContainerModel (arr, { versionKey: false });
            saveContainer.save();
            res.send(saveContainer);
        }
        catch
            (err) {
            res.status(500).send(parseError(err));
        }
    }
);

containerRouter.get("", async (req, res) => {
    try {
        const obj = req.query;
        await ContainerModel.find(obj).then(answer => {
            res.send(answer);
        })
    } catch (err) {
        res.status(500).send(parseError(err));
    }
});

containerRouter.delete("", async (req, res) => {
    try {
        const id = req.body.id;
        await ContainerModel.deleteOne({_id: id}).then(result => {
            res.send(result);
        });
    } catch (e) {
        res.status(500).send(parseError(e));
    }
});

export {containerRouter};