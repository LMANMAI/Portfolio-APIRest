"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProyectsService = class ProyectsService {
    constructor(proyectModel) {
        this.proyectModel = proyectModel;
    }
    async getAll() {
        const proyects = await this.proyectModel.find();
        return proyects;
    }
    async getOne(proyectID) {
        const proyect = await this.proyectModel.findById(proyectID);
        return proyect;
    }
    async create(proyect, imagePublicRoute) {
        proyect.posterPath = imagePublicRoute;
        const new_proyect = await new this.proyectModel(proyect);
        return await new_proyect.save();
    }
    async editProyect(proyectID, updatedProyect) {
        const proyect = await this.proyectModel.findByIdAndUpdate(proyectID, updatedProyect, { new: true });
        return proyect;
    }
    async deleteProyect(proyectID) {
        const proyect = await this.proyectModel.findByIdAndDelete(proyectID);
        return proyect;
    }
};
exports.ProyectsService = ProyectsService;
exports.ProyectsService = ProyectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Proyects')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProyectsService);
//# sourceMappingURL=proyects.service.js.map