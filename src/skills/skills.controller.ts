import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { ISkill } from './skill.dto';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Post()
  create(@Body() createSkillDto: ISkill) {
    return this.skillsService.create(createSkillDto);
  }

  @Get()
  findAll() {
    return this.skillsService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillsService.remove(id);
  }
}
