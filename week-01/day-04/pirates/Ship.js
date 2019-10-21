'use strict';

const Pirate = require('./Pirate');
const Captain = require('./Captain');

class Ship {
    constructor(rums=0) {
        this.listOfPirates = [];
        this.rums = rums;
    }

    fillShip() {
        this.captain = new Captain();
        this.listOfPirates.push(this.captain);

        const numberOfPirates = Math.ceil(Math.random() * 10);
        for(let i = 0; i < numberOfPirates; i++)
            this.listOfPirates.push(new Pirate());
    }

    getScore() {
        return (this.getAlivePirates() - this.captain.numberOfRums);
    }
    haveParty() {
        this.rums += Math.ceil(Math.random() * 30);
        if (this.rums > this.getAlivePirates()) {
            this.listOfPirates.forEach(i=>i.drinkSomeRum());
        } else {
            console.log('There is not enough rums.');
        }
        
    }
    battle(otherShip) {
        console.log('\nBattle starting...');
        const isWinner = this.getScore() > otherShip.getScore();

        if (isWinner) {
            this.haveParty();
        } else {
            otherShip.listOfPirates.forEach(
                i => {
                    if (Math.ceil(Math.random() * 100) > 30) {
                        i.die();
                    }
                }
            );
        }
       return isWinner;
    }

    getAlivePirates() {
        return this.listOfPirates.filter(i=>i.isAlive).length;
    }

    greatPrint() {
        console.log('----- INFO ---------');
        console.log(`| Captain:\n|    consumed rum: ${this.captain.numberOfRums}\n|    status: ${this.captain.isAlive?'alive':'dead'}`);
        console.log(`| Pirates:\n|    alive:${this.getAlivePirates()}`);
        console.log('------ END ---------\n');
    }
}

module.exports = Ship;
