const Plant = require('./plant');

class Flower extends Plant {
  constructor(color, water = 4) {
    super('Flower', color, water);
  }
}

module.exports = Flower;
