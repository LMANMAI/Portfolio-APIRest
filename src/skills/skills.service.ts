import { Injectable } from '@nestjs/common';
import { ISkill } from './skill.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SkillsService {
  constructor(
    @InjectModel('Skill') private readonly skillModel: Model<ISkill>,
  ) {}

  async create(skillDto: ISkill): Promise<ISkill> {
    const newSkill = new this.skillModel(skillDto);
    return newSkill.save();
  }

  async findAll(): Promise<ISkill[]> {
    return this.skillModel.find();
  }

  async remove(id: string): Promise<ISkill | null> {
    const proyect = await this.skillModel.findByIdAndDelete(id);
    return proyect;
  }
}
