import ITheme from './ITheme';

export default class LightTheme implements ITheme {
  getColor() {
    return 'This is light theme';
  }
}
