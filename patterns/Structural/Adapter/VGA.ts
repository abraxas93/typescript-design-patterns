import { IAnalogue } from './IAnalogue';

export default class VGA implements IAnalogue {
  handleAnalogueSignal(): string {
    return 'this is analogue signal';
  }
}
