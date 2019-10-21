import StringedInstrument from './StringedInstrument';

export default class Violin extends StringedInstrument {
  constructor(numOfStrings = 4) {
    super('Violin', numOfStrings);
  }

  sound(): string {
    return 'Screech';
  }
}
