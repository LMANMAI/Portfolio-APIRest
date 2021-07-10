import {
  Controller,
  Get,
  Post,
  Res,
  Body,
  Param,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { ProyectsService } from './proyects.service';
import { IProyects } from '../Interface/proyects.interface';
@Controller('proyects')
export class ProyectsController {
  constructor(private proyectsServide: ProyectsService) {}
  @Get('/')
  async getProyects(@Res() res): Promise<IProyects> {
    const proyects = await this.proyectsServide.getAll();
    return res.status(HttpStatus.OK).json({ proyects });
  }
  @Get('/:id')
  async getProyect(
    @Res() res,
    @Param('proyectId') proyectID,
  ): Promise<IProyects> {
    const proyect = this.proyectsServide.getOne(proyectID);
    if (!proyect) throw new NotFoundException('Proyect does not exists');
    return res.status(HttpStatus.OK).json({ proyect });
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
