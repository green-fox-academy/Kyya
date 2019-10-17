'use strict';

class DiceSet {

    constructor() {
        this.numOfDices = 6;
        this.dice = [];
        console.log(`----- Round 00 -----`);
        this.roll();
        console.log(this.dice)
        console.log('--------------------\n')
    }

    roll() {
        for (let i = 0; i < this.numOfDices; i++) {
            this.dice.push(Math.floor(Math.random() * 6 + 1));
        }
        // return this.dice;
    }

    reroll(index) {
        if (index === undefined) {
            for (let i = 0; i < this.numOfDices; i++) {
                this.dice[i] = Math.floor(Math.random() * 6 + 1);
            }
        } else {
            this.dice[index] = Math.floor(Math.random() * 6 + 1);
        }
    }

    getCurrent(index) {
        if (index === undefined) {
            for (let i = 0; i < this.numOfDices; i++) {
                return this.dice;
            }
        } else {
            return this.dice[index];
        }
    }
    needReroll() {
        return this.dice.reduce((a,b)=>a+b) !== 36
    }
    execEffectiveReroll() {
        const indexesNeedReroll = this.dice.map((dice, index) => dice != 6 ? index : -1).filter(i=>i!=-1)
        indexesNeedReroll.forEach(i=>this.reroll(i))
    }

    magicReroll() {
        var round = 0
        while(this.needReroll()) {
            round++
            let formatedRound = round.toString().padStart(2, '0')
            console.log(`----- Round ${formatedRound} -----`);
            this.execEffectiveReroll()
            console.log(this.dice)
            console.log('--------------------\n');
        }
  }
}

// You have a `DiceSet` class which has a list for 6 dice
// You can roll all of them with roll(), do this first to get your array of dices
// Check the current rolled numbers with getCurrent()
// You can reroll with reroll()
// Your task is to roll the dice until all of the dice are 6

const diceSet = new DiceSet();

// magic reroll if need
if (diceSet.needReroll()) {
    diceSet.magicReroll();
}

// show result
console.log(`Aha, you got 36 points.`)
console.log(diceSet.getCurrent())
