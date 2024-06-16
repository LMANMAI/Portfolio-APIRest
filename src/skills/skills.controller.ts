import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { ISkill } from './skill.dto';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Post('/create')
  async create(@Body() createSkillDto: ISkill, @Res() res) {
    try {
      console.log(createSkillDto, 'createSkillDto');
      const newSkill = await this.skillsService.create(createSkillDto);
      return res.status(HttpStatus.OK).json({
        status: 200,
        message: 'Habilidad o herramienta creada exitosamente',
        data: newSkill,
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: error.message,
        data: error,
      });
    }
  }

  @Get()
  async findAll(@Res() res) {
    try {
      const skills = await this.skillsService.findAll();
      return res
        .status(HttpStatus.OK)
        .json({ status: 200, msg: 'skills almacenadas.', skills });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: error.message,
        data: error,
      });
    }
  }

  @Delete('/:id')
  async remove(@Res() res, @Param('id') id: string) {
    try {
      const deletedSkill = await this.skillsService.remove(id);
      return res.status(HttpStatus.OK).json({
        status: 200,
        message: 'Proyecto eliminado exitosamente',
        data: deletedSkill,
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: error.message,
        data: error,
      });
    }
  }
}
