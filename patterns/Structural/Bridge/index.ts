import About from './About';
import Contact from './Contact';
import LightTheme from './LightTheme';
import DarkTheme from './DarkTheme';

export default () => {
  console.log('Bridge pattern');
  const about: About = new About(new LightTheme());
  const contacts: Contact = new Contact(new DarkTheme());
  console.log(about.getContent());
  console.log(contacts.getContent());
};
