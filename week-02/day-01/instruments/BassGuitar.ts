import StringedInstrument from './StringedInstrument';

export default class BassGuitar extends StringedInstrument {
  constructor(numOfStrings = 4) {
    super('Bass Guitar', numOfStrings);
  }

  sound(): string {
    return 'Duum-duum-duum';
  }
}
