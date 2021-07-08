import { ProyectsService } from './proyects.service';
export declare class ProyectsController {
    private readonly proyectsServide;
    constructor(proyectsServide: ProyectsService);
    getProyect(): string;
    getProyects(): string[];
    setProyects(): string;
}
