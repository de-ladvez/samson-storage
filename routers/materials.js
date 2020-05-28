import express from "express";
import MaterialModel from "../models/materials";
import {materials} from "../validation/materials"
import Joi from "@hapi/joi"
import {parseError} from "../util/helper"

const materialsRouter = express.Router();

materialsRouter.put("", async (req, res) => {
        try {
            const arr = req.body;
            await Joi.validate({...arr}, materials);
            const saveMaterials = new MaterialModel(arr, { versionKey: false });
            saveMaterials.save();
            res.send(saveMaterials);
        }
        catch
            (err) {
            res.status(500).send(parseError(err));
        }
    }
);

materialsRouter.get("", async (req, res) => {
    try {
        const obj = req.query;

        await MaterialModel.find(obj).then(answer => {
            res.send(answer);
        })
    } catch (err) {
        res.status(500).send(parseError(err));
    }
});

materialsRouter.delete("", async (req, res) => {
    try {
        const id = req.body.id;
        await MaterialModel.deleteOne({_id: id}).then(result => {
            res.send(result);
        });
    } catch (e) {
        res.status(500).send(parseError(e));
    }
});

export {materialsRouter};