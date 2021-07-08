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
exports.ProyectsController = void 0;
const common_1 = require("@nestjs/common");
const proyects_service_1 = require("./proyects.service");
let ProyectsController = class ProyectsController {
    constructor(proyectsServide) {
        this.proyectsServide = proyectsServide;
    }
    getProyect(proyectID) {
        return this.proyectsServide.getOne(proyectID);
    }
    getProyects() {
        return this.proyectsServide.getAll();
    }
    setProyects(proyect) {
        return this.proyectsServide.createOne(proyect);
    }
};
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('proyectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProyectsController.prototype, "getProyect", null);
__decorate([
    common_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProyectsController.prototype, "getProyects", null);
__decorate([
    common_1.Post('/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProyectsController.prototype, "setProyects", null);
ProyectsController = __decorate([
    common_1.Controller('proyects'),
    __metadata("design:paramtypes", [proyects_service_1.ProyectsService])
], ProyectsController);
exports.ProyectsController = ProyectsController;
//# sourceMappingURL=proyects.controller.js.map