import { Controller, Get, Post, Req, Res, Body, Param } from '@nestjs/common';
import { ProyectsService } from './proyects.service';
import { IProyects } from '../../Interface/proyects.interface';
@Controller('proyects')
export class ProyectsController {
  constructor(private readonly proyectsServide: ProyectsService) {}

  @Get('/:id')
  getProyect(@Param('proyectId') proyectID: string): Promise<IProyects> {
    return this.proyectsServide.getOne(proyectID);
  }
  @Get('/')
  getProyects(): Promise<IProyects[]> {
    return this.proyectsServide.getAll();
  }
  @Post('/')
  setProyects(@Body() proyect: IProyects): Promise<IProyects> {
    return this.proyectsServide.createOne(proyect);
  }
}
