import { IProyects } from '../Interface/proyects.interface';
import { Model } from 'mongoose';
export declare class ProyectsService {
    private readonly proyectModel;
    constructor(proyectModel: Model<IProyects>);
    getAll(): Promise<IProyects[]>;
    getOne(proyectID: string): Promise<IProyects>;
    create(proyect: IProyects): Promise<IProyects>;
}
