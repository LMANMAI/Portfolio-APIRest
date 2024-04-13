import { Schema, Document } from 'mongoose';
interface IAditionlData {
    text: string;
    img: string;
}
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
export declare const ProyectSchema: Schema<IProyect, import("mongoose").Model<any, any, any>, undefined, any>;
export default ProyectSchema;
