/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Schema, Document } from 'mongoose';
export interface IAditionlData {
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
export declare const ProyectSchema: Schema<IProyect, import("mongoose").Model<IProyect, any, any, any, Document<unknown, any, IProyect> & IProyect & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IProyect, Document<unknown, {}, import("mongoose").FlatRecord<IProyect>> & import("mongoose").FlatRecord<IProyect> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export default ProyectSchema;
