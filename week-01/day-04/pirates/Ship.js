const Pirate = require('./Pirate')

class Ship {
    constructor() {
        this.pList = []
        this.rums = 100
    }
    fillShip() {
        this.captain = new Pirate('captain')
        const pirates = Math.ceil(Math.random() * 10)
        for(let i=0; i<pirates; i++)
            this.pList.push(new Pirate)
    }
    get score() {
        return this.pList.filter(i=>i.alive).length - this.captain.rumCounter
    }

    battle(otherShip) {
        console.log('\nBattle starting...')
        const isWin = this.score > otherShip.score

        if (isWin) {
            this.rums += Math.ceil(Math.random() * 30)
        } else {
            this.pList.forEach(
                i => {
                    if (Math.ceil(Math.random() * 100) > 30) {
                        i.die()
                    }
                }
            )
        }
       return isWin
    }
    get alivePirates() {
        return this.pList.filter(i=>i.alive).length
    }
    greatPrint() {
        console.log('----- INFO ------')
        console.log(`Captain:\n    consumed rum: ${this.captain.rumCounter}\n    status: ${this.captain.alive?'alive':'dead'}`)
        console.log(`Pirates:\n    alive:${this.alivePirates}`)
        console.log('------ END ------\n')
    }
}

module.exports = Ship
