'use strict';

class Pirate {
    constructor() {
        // this.health = 100;
        this.isAlive = true;
        this.isPassedOut = false;
        this.numberOfRums = 0;
    }

    isCaptain() {
        return false;
    }

    drinkSomeRum() {
        this.numberOfRums++;
        // return this.numberOfRums;
        // this.howsItGoingMate();
    }

    howsItGoingMate() {
        if (this.numberOfRums >= 0 && this.numberOfRums <= 4) {
            console.log("Pour me anudder!");
        } else {
            console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
            // passed out
            this.isPassedOut = true;
        }
    }

    die() {
        this.isAlive = false;
    }

    brawl(anotherPirate) {
        const pointsOfRoll = Math.floor(Math.random() * 100); // // [0-100]

        if (pointsOfRoll >= 0 && pointsOfRoll < 100 / 3) {
            this.die();
        } else if (pointsOfRoll >= 100 / 3 && pointsOfRoll <= 200 / 3) {
            anotherPirate.die();
        } else if (pointsOfRoll > 200 / 3 && pointsOfRoll <= 100) {
            this.die();
            anotherPirate.die();
        }
    }
}

module.exports = Pirate;
