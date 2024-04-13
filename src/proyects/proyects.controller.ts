import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  Body,
  Param,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { ProyectsService } from './proyects.service';
import { IProyect } from '../Schema/proyects.schema';
@Controller('proyects')
export class ProyectsController {
  constructor(private proyectsService: ProyectsService) {}
  @Get('/')
  async getProyects(@Res() res): Promise<IProyect> {
    const proyects = await this.proyectsService.getAll();
    return res.status(HttpStatus.OK).json({ proyects });
  }

  @Get('/:proyectID')
  async getOne(@Res() res, @Param('proyectID') proyectID) {
    const proyect = await this.proyectsService.getOne(proyectID);
    if (!proyect) throw new NotFoundException("proyect doesn't exists");
    return res.status(HttpStatus.OK).json({ proyect });
  }

  @Post('/create')
  async setProyects(@Res() res, @Body() proyect: IProyect): Promise<IProyect> {
    const new_proyect = await this.proyectsService.create(proyect);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Proyect insert in DB succesfully', new_proyect });
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
    if (!editedProyect) throw new NotFoundException("Proyect doesn't exist");
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Proyect updated successfully', editedProyect });
  }

  @Delete('/:proyectID')
  async deleteProyect(@Res() res, @Param('proyectID') proyectID) {
    const deletedProyect = await this.proyectsService.deleteProyect(proyectID);
    if (!deletedProyect) throw new NotFoundException("Proyect doesn't exist");
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Proyect deleted successfully', deletedProyect });
  }
}
