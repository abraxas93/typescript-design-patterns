import ITheme from './ITheme';

export default class DarkTheme implements ITheme {
  getColor() {
    return 'This is Dark theme';
  }
}
