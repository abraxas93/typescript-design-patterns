import { IWebPage } from './IWebPage';
import ITheme from './ITheme';

export default class WebPage implements IWebPage {
  theme: ITheme;
  constructor(theme: ITheme) {
    this.theme = theme;
  }
  getContent(content): string {
    return content;
  }
}
