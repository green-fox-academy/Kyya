import Vehicle from './Vehicle';
import { Flyable } from './Flyable';

export default class Helicopter extends Vehicle implements Flyable {
  constructor() {
    super(0, 300);
  }

  land(): void {
    console.log('The Helicopter is landing.');
  }

  fly(): void {
    console.log('The Helicopter is Flying.');
  }

  takeOff(): void {
    console.log('The Helicopter is Taking off.');
  }
}
