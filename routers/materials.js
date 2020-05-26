import express from "express";
import MaterialModel from "../models/materials";
import {materials} from "../validation/materials"
import Joi from "@hapi/joi"
import {parseError} from "../util/helper"

const materialsRouter = express.Router();

materialsRouter.post("", async (req, res) => {
        try {
            const arr = req.body;
            await Joi.validate({...arr}, materials);
            const saveMaterials = new MaterialModel(arr);
            saveMaterials.save();
            res.send("success saved");
        }
        catch
            (err) {
            res.status(500).send(parseError(err));
        }
    }
);

materialsRouter.get("", async (req, res) => {
    try {
        const obj = req.body;

        await MaterialModel.find(obj).then(answer => {
            res.send(answer);
        })
    } catch (err) {
        res.status(500).send(parseError(err));
    }
});

export {materialsRouter};