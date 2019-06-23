import Factory from './Factory';
import { ILightNoteBook, IMediumNoteBook } from './interfaces';

class MacBookAir implements ILightNoteBook {
  lightFeature: number;
  constructor(lightFeature: number = 0) {
    this.lightFeature = lightFeature;
  }
  getInfo(): string {
    const message: string = 'MacBookAir';
    console.log(message);
    return message;
  }
}

class MacBookPro implements IMediumNoteBook {
  mediumFeature: number;
  getInfo(): string {
    const message: string = 'MacBookPro';
    console.log(message);
    return message;
  }
}
export default class MacBookFactory implements Factory {
  createLightBook() {
    return new MacBookAir();
  }
  createMediumBook() {
    return new MacBookPro();
  }
}
