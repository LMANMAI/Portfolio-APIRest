import { Schema, Document } from 'mongoose';

export interface ISkill extends Document {
  name: string;
  category: string;
}

export const SkillSchema = new Schema<ISkill>({
  name: { required: true, trim: true, type: String },
  category: { required: true, trim: true, type: String },
});
