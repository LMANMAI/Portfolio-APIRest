import { ProyectsService } from './proyects.service';
import { IProyect } from '../Schema/proyects.schema';
export declare class ProyectsController {
    private proyectsService;
    constructor(proyectsService: ProyectsService);
    getProyects(res: any): Promise<IProyect>;
    getOne(res: any, proyectID: any): Promise<any>;
    setProyects(res: any, proyect: IProyect): Promise<IProyect>;
    editProyect(res: any, proyectID: any, updatedProyect: Partial<IProyect>): Promise<any>;
    deleteProyect(res: any, proyectID: any): Promise<any>;
}
