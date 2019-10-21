const Pirate = require('./Pirate');

class Captain extends Pirate {
  isCaptain() {
    return true;
  }
}

module.exports = Captain;
