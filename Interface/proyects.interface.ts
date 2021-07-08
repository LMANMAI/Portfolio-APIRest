import { Document } from 'mongoose';
export interface IProyects extends Document {
  readonly name: String;
  readonly link: String;
  readonly linkGitHub: String;
  readonly technologies: Array<String>;
  readonly image: String;
}
