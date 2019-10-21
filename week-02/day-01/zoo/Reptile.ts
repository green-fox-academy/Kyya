import Animal from './Animal';

export default class Reptile extends Animal {
  protected legs: number;

  protected habitat: string;

  breed(): string {
    return 'laying eggs';
  }
}
