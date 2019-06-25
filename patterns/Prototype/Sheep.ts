import IAbstractSheep  from './IAbstractSheep';

export default class Sheep implements IAbstractSheep {
  private name: string;
  private color: string;
  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
  clone(): IAbstractSheep {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
  getName():string {
    return this.name;
  }
  getColor():string {
    return this.color;
  }
}
