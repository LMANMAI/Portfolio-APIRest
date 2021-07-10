import { Schema } from 'mongoose';
export const ProyectSchema = new Schema({
  name: { required: true, trim: true, type: String },
  link: { required: true, trim: true, type: String },
  linkGitHub: { required: true, trim: true, type: String },
  technologies: { required: true, trim: true, type: Array },
  image: { required: true, trim: true, type: String },
});
