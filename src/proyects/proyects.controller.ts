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
  constructor(private proyectsService: ProyectsService) {}
  @Get('/')
  async getProyects(@Res() res): Promise<IProyects> {
    const proyects = await this.proyectsService.getAll();
    return res
      .status(HttpStatus.OK)
      .json({ status: 200, msg: 'proyectos', proyects });
  }

  @Get('/:proyectID')
  async getOne(@Res() res, @Param('proyectID') proyectID) {
    const proyect = await this.proyectsService.getOne(proyectID);
    if (!proyect) throw new NotFoundException("proyect doesn't exists");
    return res.status(HttpStatus.OK).json({ proyect });
  }

  @Post('/create')
  async setProyects(
    @Res() res,
    @Body() proyect: IProyects,
  ): Promise<IProyects> {
    const new_proyect = await this.proyectsService.create(proyect);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Proyect insert in DB succesfully', new_proyect });
  }
}
