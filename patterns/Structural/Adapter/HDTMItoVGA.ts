import IDigital from './IDigital';
import VGA from './VGA';

export class HDTMItoVGA implements IDigital {
  private vga: VGA = new VGA();
  handleDigitalSignal(): string {
    return this.vga.handleAnalogueSignal();
  }
}
