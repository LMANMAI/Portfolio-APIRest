"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectSchema = void 0;
const mongoose_1 = require("mongoose");
const AditionlDataSchema = new mongoose_1.Schema({
    text: { required: true, type: String },
    img: { required: true, type: String },
});
exports.ProyectSchema = new mongoose_1.Schema({
    name: { required: true, trim: true, type: String },
    productionUrl: { required: true, trim: true, type: String },
    repositoryUrl: { required: true, trim: true, type: String },
    technologyStack: { required: true, trim: true, type: [String] },
    posterPath: { trim: true, type: String },
    proyectType: { required: true, trim: true, type: String },
    description: { type: String },
    aditionalData: { type: [AditionlDataSchema], default: [] },
});
exports.default = exports.ProyectSchema;
//# sourceMappingURL=proyects.schema.js.map