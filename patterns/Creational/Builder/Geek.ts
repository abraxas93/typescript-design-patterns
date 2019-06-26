import IPCBuilder from './IPCBuilder';
import PC from './PC';

export default class Geek implements IPCBuilder {
  private pc = new PC();
  assemblePC(): string {
    return this.pc.toString();
  }
  setCPU(cpu: string): void {
    this.pc.setCPU(cpu);
  }
  setMotherboard(mb: string): void {
    this.pc.motherbrd = mb;
  }
  setSSD(ssd: string): void {
    this.pc.setSSD(ssd);
  }
}
