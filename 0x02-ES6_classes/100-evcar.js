import Car from './10-car';

const cloneCarMethod = Symbol('cloneCarMethod');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);

    this._range = range;

    delete this[cloneCarMethod];
  }

  cloneCar() {
    const clonedCar = new Car(this._brand, this._motor, this._color);
    return clonedCar;
  }
}
