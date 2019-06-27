import WebPage from './WebPage';
import ITheme from './ITheme';

export default class Contact extends WebPage {
  constructor(theme: ITheme) {
    super(theme);
  }
  getContent() {
    return `Contact page with theme: ${this.theme.getColor()}`;
  }
}
