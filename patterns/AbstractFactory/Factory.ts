import { ILightNoteBook, IMediumNoteBook } from './interfaces';

export default abstract class Factory {
  abstract createLightBook(): ILightNoteBook;
  abstract createMediumBook(): IMediumNoteBook;
}
