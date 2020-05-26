import Joi from "@hapi/joi";

const boolean = Joi.boolean().truthy("1").truthy("yes").truthy("true").truthy(1).falsy("0").falsy("no").falsy("false").falsy(1);

const barcode = Joi.number().integer().required();
const name = Joi.string().required();
const description = Joi.string().empty("");
const weight = Joi.number();
const length = Joi.number();
const width = Joi.number();
const volume = Joi.number();
const depth = Joi.number();
const nexttestdate = Joi.string().empty("");
const status = boolean;
const affiliation = Joi.string().empty("");
const workingstage = Joi.string().empty("");
const customer = Joi.string().empty("");
const manufacturer = Joi.string().empty("");
const manufacturerdate = Joi.string().empty("");

export const materials = Joi.object().keys({
    barcode,
    name,
    description,
    weight,
    length,
    width,
    volume,
    depth,
    nexttestdate,
    status,
    affiliation,
    workingstage,
    customer,
    manufacturer,
    manufacturerdate
});