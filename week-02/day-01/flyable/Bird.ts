import { Flyable } from './Flyable';
import Animal from '../zoo/Animal';

export default class Bird extends Animal implements Flyable {
    protected colorOfFeather: string;

    protected speedOfFlying: number;

    breed(): string {
      return 'laying eggs';
    }

    land(): void {
      console.log(`The ${this.name} is Landing.`);
    }

    fly(): void {
      console.log(`The ${this.name} is Flying.`);
    }

    takeOff(): void {
      console.log(`The ${this.name} is Taking off.`);
    }
}
