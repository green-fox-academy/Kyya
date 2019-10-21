import Animal from './Animal';

export default class Bird extends Animal {
  protected colorOfFeather: string;

  protected speedOfFlying: number;

  breed(): string {
    return 'laying eggs';
  }
}
