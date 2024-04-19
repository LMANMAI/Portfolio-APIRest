import { Schema, Document } from 'mongoose';

export interface IAditionlData {
  text: string;
  img: string;
}

const AditionlDataSchema = new Schema<IAditionlData>({
  text: { required: true, type: String },
  img: { required: true, type: String },
});

export interface IProyect extends Document {
  name: string;
  productionUrl: string;
  repositoryUrl: string;
  technologyStack: string[];
  posterPath: string;
  proyectType: string;
  description?: string;
  aditionalData: IAditionlData[];
}

export const ProyectSchema = new Schema<IProyect>({
  name: { required: true, trim: true, type: String },
  productionUrl: { required: true, trim: true, type: String },
  repositoryUrl: { required: true, trim: true, type: String },
  technologyStack: { required: true, trim: true, type: [String] },
  posterPath: { required: true, trim: true, type: String },
  proyectType: { required: true, trim: true, type: String },
  description: { type: String },
  aditionalData: { type: [AditionlDataSchema], default: [] },
});

export default ProyectSchema;
