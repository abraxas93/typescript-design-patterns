export default class PC {
  private motherboard: string;
  private cpu: string;
  private ssd: string;
  get motherbrd():string {
    return this.motherboard;
  }
  set motherbrd(mb: string) {
    this.motherboard = mb;
  }
  public getSSD(): string {
    return this.ssd;
  }
  public setSSD(ssd: string) {
    this.ssd = ssd;
  }
  public getCPU(): string {
    return this.cpu;
  }
  public setCPU(cpu: string) {
    this.cpu = cpu;
  }
  public toString(): string {
    return `This motherboard: ${this.motherboard}, ssd: ${this.ssd} and have CPU: ${this.cpu}`;
  }
}
