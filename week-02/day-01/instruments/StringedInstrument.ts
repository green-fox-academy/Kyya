import Instrument from './Instrument';

export default abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;

  constructor(name: string, numOfStrings: number) {
    super();
    this.name = name;
    this.numberOfStrings = numOfStrings;
  }

  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }

  abstract sound(): string;
}
