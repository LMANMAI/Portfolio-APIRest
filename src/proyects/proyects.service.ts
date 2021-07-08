import { Injectable } from '@nestjs/common';
import { IProyects } from '../../Interface/proyects.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class ProyectsService {
  constructor(
    @InjectModel('Proyects') private readonly proyectModel: Model<IProyects>,
  ) {}

  async getOne(proyectID: string): Promise<IProyects> {
    const proyect = await this.proyectModel.findById(proyectID);
    return proyect;
  }
  async getAll(): Promise<IProyects[]> {
    const proyects = await this.proyectModel.find();
    return proyects;
  }
  async createOne(proyect: IProyects): Promise<IProyects> {
    const new_proyect = await new this.proyectModel(proyect);
    return await new_proyect.save();
  }
}
