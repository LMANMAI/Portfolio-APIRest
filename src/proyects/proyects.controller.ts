import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  Body,
  Param,
  HttpStatus,
} from '@nestjs/common';
import { ProyectsService } from './proyects.service';
import { IProyects } from '../../Interface/proyects.interface';
@Controller('proyects')
export class ProyectsController {
  constructor(private readonly proyectsServide: ProyectsService) {}

  @Get('/:id')
  async getProyect(
    @Res() res,
    @Param('proyectId') proyectID: string,
  ): Promise<IProyects> {
    const proyect = this.proyectsServide.getOne(proyectID);
    return res.status(HttpStatus.OK).json({ proyect });
  }
  @Get('/')
  async getProyects(@Res() res): Promise<IProyects> {
    const proyects = await this.proyectsServide.getAll();
    return res.status(HttpStatus.OK).json({ proyects });
  }
  @Post('/create')
  async setProyects(
    @Res() res,
    @Body() proyect: IProyects,
  ): Promise<IProyects> {
    const new_proyect = await this.proyectsServide.create(proyect);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Proyect insert in DB succesfully', new_proyect });
  }
}
