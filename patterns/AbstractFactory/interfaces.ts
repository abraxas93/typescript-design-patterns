interface INoteBook {
  getInfo(): string;
}
export interface ILightNoteBook extends INoteBook {
  lightFeature: number;
}
export interface IMediumNoteBook extends INoteBook {
  mediumFeature: number;
}
