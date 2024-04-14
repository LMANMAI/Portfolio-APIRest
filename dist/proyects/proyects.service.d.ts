import { IProyect } from '../Schema/proyects.schema';
import { Model } from 'mongoose';
export declare class ProyectsService {
    private readonly proyectModel;
    constructor(proyectModel: Model<IProyect>);
    getAll(): Promise<IProyect[]>;
    getOne(proyectID: string): Promise<IProyect>;
    create(proyect: IProyect): Promise<IProyect>;
    editProyect(proyectID: string, updatedProyect: Partial<IProyect>): Promise<IProyect | null>;
    deleteProyect(proyectID: string): Promise<IProyect | null>;
}
