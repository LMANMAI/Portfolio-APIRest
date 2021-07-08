"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProyectSchema = new mongoose_1.Schema({
    name: { required: true, trim: true, type: String },
    link: { required: true, trim: true, type: String },
    linkGitHub: { required: true, trim: true, type: String },
    technologies: { required: true, trim: true, type: Array },
    image: { required: true, trim: true, type: String },
});
//# sourceMappingURL=proyects.schema.js.map