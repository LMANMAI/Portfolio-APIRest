import { ProyectsService } from './proyects.service';
import { IProyects } from '../../Interface/proyects.interface';
export declare class ProyectsController {
    private readonly proyectsServide;
    constructor(proyectsServide: ProyectsService);
    getProyect(proyectID: string): Promise<IProyects>;
    getProyects(): Promise<IProyects[]>;
    setProyects(proyect: IProyects): Promise<IProyects>;
}
