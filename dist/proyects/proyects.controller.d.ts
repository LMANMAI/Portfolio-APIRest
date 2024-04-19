/// <reference types="multer" />
import { ProyectsService } from './proyects.service';
import { ImageService } from '../image/image.service';
import { IProyect } from '../Schema/proyects.schema';
export declare class ProyectsController {
    private proyectsService;
    private imageService;
    constructor(proyectsService: ProyectsService, imageService: ImageService);
    getProyects(res: any): Promise<IProyect>;
    getOne(res: any, proyectID: any): Promise<any>;
    setProyects(res: any, proyect: any, image: Express.Multer.File): Promise<any>;
    editProyect(res: any, proyectID: any, updatedProyect: Partial<IProyect>): Promise<any>;
    deleteProyect(res: any, proyectID: any): Promise<any>;
}
