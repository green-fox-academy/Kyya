class Pirate {
    constructor(type = 'crew') {
        // this.health = 100
        this.alive = true
        this.type = type
        this.rumCounter = 0
    }
    drinkSomeRum() {
        this.rumCounter++
        this.howsItGoingMate()
    }
    howsItGoingMate() {
        if (this.rumCounter >= 0 && this.rumCounter <= 4) {
            console.log("Pour me anudder!")
        } else {
            console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?")
            // passed out
            this.die()
        }
    }
    die() {
        this.alive = false
    }
    brawl(anotherPirate) {
        // this alive
        // another alive
        // both dead
    }
}

module.exports = Pirate
