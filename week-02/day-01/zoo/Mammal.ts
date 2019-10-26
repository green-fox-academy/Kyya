import Animal from './Animal';

export default class Mammal extends Animal {
  protected modeOfMovement: string;
  protected numbersOfSensor: number;

  constructor(name: string, modeOfMovement: string, numbersOfSensor: number) {
    super(name);
    this.modeOfMovement = modeOfMovement;
    this.numbersOfSensor = numbersOfSensor;
  }

  breed(): string {
    return 'pushing miniature versions out';
  }
}
