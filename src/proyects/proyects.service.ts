import { Injectable, NotFoundException } from '@nestjs/common';
import { IAditionlData, IProyect } from '../Schema/proyects.schema';
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
  async create(proyect: IProyect, imagePublicRoute: any): Promise<IProyect> {
    proyect.posterPath = imagePublicRoute;
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
  async deleteProyectEntrys(
    proyectID: string,
    entryId: string,
  ): Promise<IProyect | null> {
    const proyect = await this.proyectModel.findByIdAndUpdate(
      proyectID,
      { $pull: { aditionalData: { _id: entryId } } },
      { new: true },
    );
    if (!proyect) {
      throw new NotFoundException('Proyecto no encontrado');
    }
    return proyect;
  }
  async editProyectEntry(
    proyectID: string,
    aditionalDataId: string,
    updatedAditionalData: Partial<IAditionlData>,
  ): Promise<IProyect | null> {
    const proyect = await this.proyectModel.findOneAndUpdate(
      { _id: proyectID, 'aditionalData._id': aditionalDataId },
      { $set: { 'aditionalData.$': updatedAditionalData } },
      { new: true },
    );

    if (!proyect) {
      throw new NotFoundException('Proyecto o entrada no encontrada');
    }

    return proyect;
  }

  async addAditionalData(
    proyectID: string,
    entry: IAditionlData,
  ): Promise<any | null> {
    const proyect = await this.proyectModel.findById(proyectID);
    if (!proyect) {
      return null;
    }
    if (proyect.aditionalData.length >= 3) {
      throw new Error('No se puede agregar más de 3 entradas en aditionalData');
    }
    proyect.aditionalData.push(entry);
    try {
      return await this.proyectModel.findByIdAndUpdate(
        proyectID,
        { ...proyect, aditionalData: [...proyect.aditionalData, entry] },
        { new: true },
      );
    } catch (error) {
      console.error('Error guardando el proyecto:', error);
      throw new Error('Error guardando el proyecto: ' + error.message);
    }
  }
  async deleteProyect(proyectID: string): Promise<IProyect | null> {
    const proyect = await this.proyectModel.findByIdAndDelete(proyectID);
    return proyect;
  }
}
