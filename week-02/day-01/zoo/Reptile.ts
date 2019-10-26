import Animal from './Animal';

export default class Reptile extends Animal {
  protected legs: number;
  protected habitat: string;

  constructor(name: string, legs: number, habitat: string) {
    super(name);
    this.legs = legs;
    this.habitat = habitat;
  }

  breed(): string {
    return 'laying eggs';
  }
}
