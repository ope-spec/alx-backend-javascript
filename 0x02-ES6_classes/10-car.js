// Implement a class named Car:

const cloneCarMethod = Symbol('cloneCarMethod');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    this[cloneCarMethod] = this[cloneCarMethod].bind(this);
  }

  [cloneCarMethod]() {
    const clonedCar = new this.constructor(this._brand, this._motor, this._color);
    return clonedCar;
  }

  cloneCar() {
    return this[cloneCarMethod]();
  }
}
