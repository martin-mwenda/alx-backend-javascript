import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range; // Getter for range
  }

  set range(value) {
    this._range = value;
  }

  cloneCar() {
    const Species = super.constructor[Symbol.species]; // Override cloneCar method return inst Car

    return new Species();
  }
}
