export default abstract class Vehicle {
  protected wheels: number;

  protected speed: number;

  constructor(wheels: number, speed: number) {
    this.wheels = wheels;
    this.speed = speed;
  }
}
