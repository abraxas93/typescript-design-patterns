import WebPage from './WebPage';
import ITheme from './ITheme';

export default class About extends WebPage {
  constructor(theme: ITheme) {
    super(theme);
  }
  getContent() {
    return `About page with theme: ${this.theme.getColor()}`;
  }
}
