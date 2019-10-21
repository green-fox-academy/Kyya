'use strict';

const Pirate = require('./Pirate');

class Captain extends Pirate {
    constructor() {
        super();
    }

    isCaptain() {
        return true;
    }
}

module.exports = Captain;
