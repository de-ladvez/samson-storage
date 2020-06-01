import mongoose from "mongoose";

const materialsSchema = mongoose.Schema({
    barcode: {
        type: String,
        unique: true
    },
    name: String,
    description: String,
    weight: String,
    length: String,
    width: String,
    volume: String,
    depth: String,
    nexttestdate: String,
    status: Boolean,
    affiliation: String,
    workingstage: String,
    customer: String,
    manufacturer: String,
    manufacturerdate: String
});

const MaterialModel = mongoose.model("materials", materialsSchema);

export default MaterialModel;

