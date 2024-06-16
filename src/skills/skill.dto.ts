import { Schema, Document } from 'mongoose';
type skills = 'Front End' | 'Back End' | 'Documentacion' | 'Herramienta';
export interface ISkill extends Document {
  name: string;
  category: skills;
}

export const SkillSchema = new Schema<ISkill>({
  name: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ['Front End', 'Back End', 'Documentacion', 'Herramienta'],
  },
});
