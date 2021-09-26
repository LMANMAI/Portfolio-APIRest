import { ProyectsService } from './proyects.service';
import { IProyects } from '../Interface/proyects.interface';
export declare class ProyectsController {
    private proyectsService;
    constructor(proyectsService: ProyectsService);
    getProyects(res: any): Promise<IProyects>;
    getOne(res: any, proyectID: any): Promise<any>;
    setProyects(res: any, proyect: IProyects): Promise<IProyects>;
}
