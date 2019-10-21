'use strict';

const Ship = require('./Ship');

class BattleApp {
    constructor() {
        this.host = new Ship();
        this.challenger = new Ship();
    }
    ready() {
        this.host.fillShip();
        this.challenger.fillShip();
    }
    battle() {
        this.host.battle(this.challenger);
        this.host.greatPrint();
        this.challenger.greatPrint();
    }
}

module.exports = BattleApp;









module.exports = BattleApp;
