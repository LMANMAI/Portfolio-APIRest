import { Injectable } from '@nestjs/common';
import { ISkill } from './skill.dto';

@Injectable()
export class SkillsService {
  private readonly skills: ISkill[] = [];

  create(skillDto: ISkill) {
    this.skills.push(skillDto);
    return skillDto;
  }

  findAll() {
    return this.skills;
  }
  remove(id: string) {
    const index = this.skills.findIndex((skill) => skill.id === id);
    if (index !== -1) {
      const removedSkill = this.skills[index];
      this.skills.splice(index, 1);
      return removedSkill;
    }
    return null;
  }
}
