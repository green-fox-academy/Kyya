abstract class Animal {
    protected name: string;
    protected age: number;

    protected gender: string;
    protected hunger: number;

    run() {
        console.log(`${this.name} is running.`);
    }
    
    abstract breed(): string;

    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

}
class Mammal extends Animal {
    protected modeOfMovement: string;
    protected numsOfSensor: number;

    constructor(name: string) {
        super(name);
    }

    breed() {
        return 'pushing miniature versions out';
    }
}
class Bird extends Animal {
    protected colorOfFeather: string;
    protected speedOfFlying: number;

    constructor(name: string) {
        super(name);
    }

    breed() {
        return 'laying eggs';
    }
}
class Reptile extends Animal {
    protected legs: number;
    protected habitat: string;

    constructor(name: string) {
        super(name);
    }
    
    breed() {
        return 'laying eggs';
    }
}

export {
    Animal,
    Reptile,
    Bird,
    Mammal
}
