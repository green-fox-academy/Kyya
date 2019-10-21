import { Animal } from '../zoo/animals';

interface IFlyable {
    land(): void;
    fly(): void;
    takeOff(): void;
}

abstract class Vehicle {
    protected wheels: number;
    protected speed: number;

    constructor(wheels: number, speed: number) {
        this.wheels = wheels;
        this.speed = speed;
    }
}

class Helicopter extends Vehicle implements IFlyable {
    constructor() {
        super(0, 300);
    }

    land() {
        console.log('The Helicopter is landing.');
    }

    fly() {
        console.log('The Helicopter is Flying.');
    }
    
    takeOff() {
        console.log('The Helicopter is Taking off.');
    }
}

class Bird extends Animal implements IFlyable {
    protected colorOfFeather: string;
    protected speedOfFlying: number;

    constructor(name: string) {
        super(name);
    }

    breed() {
        return 'laying eggs';
    }

    land() {
        console.log(`The ${this.name} is Landing.`);
    }

    fly() {
        console.log(`The ${this.name} is Flying.`);
    }

    takeOff() {
        console.log(`The ${this.name} is Taking off.`);
    }
}

export {
    Helicopter,
    Bird
}
