
import { ILightNoteBook, IMediumNoteBook } from './interfaces';
import MacBookFactory from './MacBookFactory';
import Factory from './Factory';

export default () => {
  const factory = <Factory>new MacBookFactory();
  const notebook = <ILightNoteBook>factory.createLightBook();
  const mediumBook = <IMediumNoteBook>factory.createMediumBook();
  notebook.getInfo();
  mediumBook.getInfo();
};
