
import IPCBuilder from './IPCBuilder';

export class Manufacturer {
  public static manufacture(builder: IPCBuilder):string {
    builder.setMotherboard('ASUS');
    builder.setSSD('Sandisk Plus SSD');
    builder.setCPU('Intel Core i7');
    return builder.assemblePC();
  }
}
