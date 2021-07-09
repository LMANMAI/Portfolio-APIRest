import { ProyectsService } from './proyects.service';
import { IProyects } from '../../Interface/proyects.interface';
export declare class ProyectsController {
    private proyectsServide;
    constructor(proyectsServide: ProyectsService);
    getProyect(res: any, proyectID: any): Promise<IProyects>;
    getProyects(res: any): Promise<IProyects>;
    setProyects(res: any, proyect: IProyects): Promise<IProyects>;
}
