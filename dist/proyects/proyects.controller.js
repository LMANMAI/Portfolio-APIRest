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
const image_service_1 = require("../image/image.service");
const platform_express_1 = require("@nestjs/platform-express");
let ProyectsController = class ProyectsController {
    constructor(proyectsService, imageService) {
        this.proyectsService = proyectsService;
        this.imageService = imageService;
    }
    async getProyects(res) {
        const proyects = await this.proyectsService.getAll();
        return res
            .status(common_1.HttpStatus.OK)
            .json({ status: 200, msg: 'proyectos', proyects });
    }
    async getOne(res, proyectID) {
        const proyect = await this.proyectsService.getOne(proyectID);
        if (!proyect)
            throw new common_1.NotFoundException('Proyecto no encontrado');
        return res
            .status(common_1.HttpStatus.OK)
            .json({ status: 200, msg: 'proyectos', proyect });
    }
    async setProyects(res, proyect, image) {
        if (!proyect || !image) {
            throw new common_1.BadRequestException('Datos del proyecto y la imagen son requeridos');
        }
        const imagePublicRoute = await this.imageService.uploadImage(image);
        const newProyect = await this.proyectsService.create(JSON.parse(proyect.proyect), imagePublicRoute);
        return res.status(common_1.HttpStatus.OK).json({
            status: 200,
            message: 'Proyecto creado exitosamente',
            data: newProyect,
        });
    }
    async editProyect(res, proyectID, updatedProyect) {
        const editedProyect = await this.proyectsService.editProyect(proyectID, updatedProyect);
        if (!editedProyect)
            throw new common_1.NotFoundException('Proyecto no encontrado');
        return res.status(common_1.HttpStatus.OK).json({
            status: 200,
            message: 'Proyecto actualizado exitosamente',
            data: editedProyect,
        });
    }
    async deleteProyect(res, proyectID) {
        const deletedProyect = await this.proyectsService.deleteProyect(proyectID);
        if (!deletedProyect)
            throw new common_1.NotFoundException('Proyecto no encontrado');
        return res.status(common_1.HttpStatus.OK).json({
            status: 200,
            message: 'Proyecto eliminado exitosamente',
            data: deletedProyect,
        });
    }
};
exports.ProyectsController = ProyectsController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProyectsController.prototype, "getProyects", null);
__decorate([
    (0, common_1.Get)('/:proyectID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('proyectID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProyectsController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProyectsController.prototype, "setProyects", null);
__decorate([
    (0, common_1.Put)('/:proyectID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('proyectID')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProyectsController.prototype, "editProyect", null);
__decorate([
    (0, common_1.Delete)('/:proyectID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('proyectID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProyectsController.prototype, "deleteProyect", null);
exports.ProyectsController = ProyectsController = __decorate([
    (0, common_1.Controller)('proyects'),
    __metadata("design:paramtypes", [proyects_service_1.ProyectsService,
        image_service_1.ImageService])
], ProyectsController);
//# sourceMappingURL=proyects.controller.js.map