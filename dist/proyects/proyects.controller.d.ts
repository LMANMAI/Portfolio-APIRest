/// <reference types="multer" />
import { ProyectsService } from './proyects.service';
import { ImageService } from '../image/image.service';
import { IAditionlData, IProyect } from '../Schema/proyects.schema';
export declare class ProyectsController {
    private proyectsService;
    private imageService;
    constructor(proyectsService: ProyectsService, imageService: ImageService);
    getProyects(res: any): Promise<IProyect>;
    getOne(res: any, proyectID: any): Promise<any>;
    setProyects(res: any, proyect: any, image: Express.Multer.File): Promise<any>;
    editProyect(res: any, proyectID: any, proyect: Partial<IProyect>): Promise<any>;
    editProyectEntry(res: any, proyectID: any, entryId: any, proyect: Partial<IAditionlData>, image: Express.Multer.File): Promise<any>;
    deleteProyectEntrys(res: any, proyectID: any, entryId: any): Promise<any>;
    setAditionalData(res: any, proyectID: any, description: any, image: Express.Multer.File): Promise<any>;
    deleteProyect(res: any, proyectID: any): Promise<any>;
}
