import StringedInstrument from './StringedInstrument';

export default class ElectricGuitar extends StringedInstrument {
  constructor(numOfStrings = 6) {
    super('Electric Guitar', numOfStrings);
  }

  sound(): string {
    return 'Twang';
  }
}
