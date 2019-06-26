// Theory
// sample
abstract class AbstractProductA {}
abstract class AbstractProductB {}
class ProductA1 extends AbstractProductA {}
class ProductB1 extends AbstractProductB {}
class ProductA2 extends AbstractProductA {}
class ProductB2 extends AbstractProductB {}

abstract class Factory {
  abstract createProductA(): AbstractProductA;
  abstract createProductB(): AbstractProductB;
}

class ConcreteFactory1 extends Factory {
  createProductA(): AbstractProductA {
    return new ProductA1();
  }
  createProductB(): AbstractProductB {
    return new ProductB1();
  }
}

class ConcreteFactory2 extends Factory {
  createProductA(): AbstractProductA {
    return new ProductA2();
  }
  createProductB(): AbstractProductB {
    return new ProductB2();
  }
}
