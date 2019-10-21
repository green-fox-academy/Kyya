abstract class Instrument {
    protected name: string;
    abstract play(): void;
}

abstract class StringedInstrument extends Instrument {
    protected numberOfStrings: number;

    constructor(name: string, numOfStrs: number) {
        super();
        this.name = name;
        this.numberOfStrings = numOfStrs;
    }

    play(): void {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    }

    abstract sound(): string;
}

class ElectricGuitar extends StringedInstrument {
    constructor(numOfStrs: number = 6) {
        super('Electric Guitar', numOfStrs);
    }

    sound(): string {
        return 'Twang';
    }
}
class BassGuitar extends StringedInstrument {
    constructor(numOfStrs: number = 4) {
        super('Bass Guitar', numOfStrs);
    }

    sound(): string {
        return 'Duum-duum-duum';
    }
}
class Violin extends StringedInstrument {
    constructor(numOfStrs: number = 4) {
        super('Violin', numOfStrs);
    }
    
    sound(): string {
        return 'Screech';
    }
}

export {
    ElectricGuitar, 
    BassGuitar,
    Violin
}
