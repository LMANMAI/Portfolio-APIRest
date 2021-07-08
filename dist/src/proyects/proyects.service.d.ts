import { IProyects } from '../../Interface/proyects.interface';
import { Model } from 'mongoose';
export declare class ProyectsService {
    private readonly proyectModel;
    constructor(proyectModel: Model<IProyects>);
    getOne(proyectID: string): Promise<IProyects>;
    getAll(): Promise<IProyects[]>;
    createOne(proyect: IProyects): Promise<IProyects>;
}
