import {
  Controller,
  Get,
  Post,
  Res,
  Body,
  Param,
  HttpStatus,
  NotFoundException,
  Put,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { ProyectsService } from './proyects.service';
import { IProyect } from '../Schema/proyects.schema';

@Controller('proyects')
export class ProyectsController {
  constructor(private proyectsService: ProyectsService) {}
  @Get('/')
  async getProyects(@Res() res): Promise<IProyect> {
    const proyects = await this.proyectsService.getAll();
    return res
      .status(HttpStatus.OK)
      .json({ status: 200, msg: 'proyectos', proyects });
  }

  @Get('/:proyectID')
  async getOne(@Res() res, @Param('proyectID') proyectID) {
    const proyect = await this.proyectsService.getOne(proyectID);
    if (!proyect) throw new NotFoundException('Proyecto no encontrado');
    return res
      .status(HttpStatus.OK)
      .json({ status: 200, msg: 'proyectos', proyect });
  }

  @Post('/create')
  async setProyects(@Res() res, @Body() proyect: IProyect): Promise<IProyect> {
    if (!proyect) {
      throw new BadRequestException('Datos del proyecto requeridos');
    }
    const newProyect = await this.proyectsService.create(proyect);
    return res.status(HttpStatus.OK).json({
      status: 200,
      message: 'Proyecto creado exitosamente',
      data: newProyect,
    });
  }

  @Put('/:proyectID')
  async editProyect(
    @Res() res,
    @Param('proyectID') proyectID,
    @Body() updatedProyect: Partial<IProyect>,
  ) {
    const editedProyect = await this.proyectsService.editProyect(
      proyectID,
      updatedProyect,
    );
    if (!editedProyect) throw new NotFoundException('Proyecto no encontrado');
    return res.status(HttpStatus.OK).json({
      status: 200,
      message: 'Proyecto actualizado exitosamente',
      data: editedProyect,
    });
  }

  @Delete('/:proyectID')
  async deleteProyect(@Res() res, @Param('proyectID') proyectID) {
    const deletedProyect = await this.proyectsService.deleteProyect(proyectID);
    if (!deletedProyect) throw new NotFoundException('Proyecto no encontrado');
    return res.status(HttpStatus.OK).json({
      status: 200,
      message: 'Proyecto eliminado exitosamente',
      data: deletedProyect,
    });
  }
}
