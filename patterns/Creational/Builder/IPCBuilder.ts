export default interface IPCBuilder {
  assemblePC(): string;
  setCPU(cpu: string): void;
  setMotherboard(mb: string): void;
  setSSD(ssd: string): void;
}
