export class Singleton {
  private static instance: Singleton;
  constructor(param1: number, param2: string) {

  }
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(23, 'Queen');
    }
    return Singleton.instance;
  }
}
