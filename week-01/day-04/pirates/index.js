const Ship = require('./Ship')

class BattleApp {

    constructor() {

        this.ships = []
        const s1 = new Ship()
        const s2 = new Ship()

        s1.fillShip()
        s2.fillShip()
        //console.log(s1)
        //console.log(s2)
        s1.battle(s2)
        s1.greatPrint()
        s2.greatPrint()
    }
}

new BattleApp()

module.exports = BattleApp
