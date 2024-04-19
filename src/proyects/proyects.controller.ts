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
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProyectsService } from './proyects.service';
import { ImageService } from '../image/image.service';
import { IProyect } from '../Schema/proyects.schema';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('proyects')
export class ProyectsController {
  constructor(
    private proyectsService: ProyectsService,
    private imageService: ImageService,
  ) {}
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
  @UseInterceptors(FileInterceptor('image'))
  async setProyects(
    @Res() res,
    @Body() proyect: any,
    @UploadedFile() image: Express.Multer.File,
  ) {
    if (!proyect || !image) {
      throw new BadRequestException(
        'Datos del proyecto y la imagen son requeridos',
      );
    }

    const imagePublicRoute = await this.imageService.uploadImage(image);
    const newProyect = await this.proyectsService.create(
      JSON.parse(proyect.proyect),
      imagePublicRoute,
    );

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
