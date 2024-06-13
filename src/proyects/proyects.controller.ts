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
import { IAditionlData, IProyect } from '../Schema/proyects.schema';
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
    try {
      if (!proyect && !image) {
        throw new BadRequestException(
          'Datos del proyecto y la imagen son requeridos',
        );
      } else if (proyect && !image) {
        throw new BadRequestException('La imagen es requerida');
      } else if (!proyect && image) {
        throw new BadRequestException('El proyecto es requerido');
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
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: error.message,
        data: error,
      });
    }
  }

  @Put('editproyect/:proyectID')
  async editProyect(
    @Res() res,
    @Param('proyectID') proyectID,
    @Body() proyect: Partial<IProyect>,
  ) {
    const editedProyect = await this.proyectsService.editProyect(
      proyectID,
      proyect,
    );
    if (!editedProyect) throw new NotFoundException('Proyecto no encontrado');
    return res.status(HttpStatus.OK).json({
      status: 200,
      message: 'Proyecto actualizado exitosamente',
      data: editedProyect,
    });
  }

  @Put('edit/:proyectID/:entryId')
  @UseInterceptors(FileInterceptor('image'))
  async editProyectEntry(
    @Res() res,
    @Param('proyectID') proyectID,
    @Param('entryId') entryId,
    @Body() proyect: Partial<IAditionlData>,
    @UploadedFile() image: Express.Multer.File,
  ) {
    let imagePublicRoute = null;
    if (image) {
      imagePublicRoute = await this.imageService.uploadImage(image);
    } else {
      imagePublicRoute = proyect.image;
    }

    const editedProyect = await this.proyectsService.editProyectEntry(
      proyectID,
      entryId,
      { img: imagePublicRoute, text: proyect.text },
    );
    if (!editedProyect) throw new NotFoundException('Proyecto no encontrado');
    return res.status(HttpStatus.OK).json({
      status: 200,
      message: 'Entrada editada exitosamente',
      data: editedProyect,
    });
  }

  @Put('deleteentry/:proyectID/:entryId')
  async deleteProyectEntrys(
    @Res() res,
    @Param('proyectID') proyectID,
    @Param('entryId') entryId,
  ) {
    const editedProyect = await this.proyectsService.deleteProyectEntrys(
      proyectID,
      entryId,
    );
    if (!editedProyect) throw new NotFoundException('Proyecto no encontrado');
    return res.status(HttpStatus.OK).json({
      status: 200,
      message: 'Entrada eliminada exitosamente',
      data: editedProyect,
    });
  }
  @UseInterceptors(FileInterceptor('image'))
  @Put('/aditionalData/:proyectID')
  async setAditionalData(
    @Res() res,
    @Param('proyectID') proyectID,
    @Body() description: any,
    @UploadedFile() image: Express.Multer.File,
  ) {
    const currentProject = await this.proyectsService.getOne(proyectID);
    if (!currentProject) throw new NotFoundException('Proyecto no encontrado');

    // Verificar la longitud de aditionalData
    if (currentProject.aditionalData.length >= 3) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        status: 400,
        message: 'No se puede agregar más de 3 entradas.',
      });
    }
    const imagePublicRoute = await this.imageService.uploadImage(image);
    const entry = {
      img: imagePublicRoute,
      text: JSON.parse(description.description),
    };

    const editedProyect = await this.proyectsService.addAditionalData(
      proyectID,
      entry,
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
