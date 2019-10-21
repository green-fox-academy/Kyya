import Animal from './Animal';

export default class Mammal extends Animal {
  protected modeOfMovement: string;

  protected numbersOfSensor: number;

  breed(): string {
    return 'pushing miniature versions out';
  }
}
