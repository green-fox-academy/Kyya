import Animal from './Animal';

export default class Bird extends Animal {
  protected colorOfFeather: string;
  protected speedOfFlying: number;

  constructor(name: string, colorOfFeather: string, speedOfFlying: number) {
    super(name);
    this.colorOfFeather = colorOfFeather;
    this.speedOfFlying = speedOfFlying;
  }

  breed(): string {
    return 'laying eggs';
  }
}
