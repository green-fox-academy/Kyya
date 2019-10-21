const Plant = require('./plant');

class Tree extends Plant {
  constructor(color, water = 0) {
    super('Tree', color, water);
  }
}
module.exports = Tree;
