import { Injectable } from '@nestjs/common';
import { IProyect } from '../Schema/proyects.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class ProyectsService {
  constructor(
    @InjectModel('Proyects') private readonly proyectModel: Model<IProyect>,
  ) {}

  async getAll(): Promise<IProyect[]> {
    const proyects = await this.proyectModel.find();
    return proyects;
  }
  async getOne(proyectID: string): Promise<IProyect> {
    const proyect = await this.proyectModel.findById(proyectID);
    return proyect;
  }
  async create(proyect: IProyect): Promise<IProyect> {
    const new_proyect = await new this.proyectModel(proyect);
    return await new_proyect.save();
  }

  async editProyect(
    proyectID: string,
    updatedProyect: Partial<IProyect>,
  ): Promise<IProyect | null> {
    const proyect = await this.proyectModel.findByIdAndUpdate(
      proyectID,
      updatedProyect,
      { new: true },
    );
    return proyect;
  }

  async deleteProyect(proyectID: string): Promise<IProyect | null> {
    const proyect = await this.proyectModel.findByIdAndDelete(proyectID);
    return proyect;
  }
}
