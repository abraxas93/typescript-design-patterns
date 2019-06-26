
import Geek from './Geek';
import { PC } from './PC';
import { Manufacturer } from './Manufacturer';

export default () => {
  const geek: Geek = new Geek();
  const pc: string = Manufacturer.manufacture(geek);
  console.log(pc);
  console.log('Builder Pattern');
};
