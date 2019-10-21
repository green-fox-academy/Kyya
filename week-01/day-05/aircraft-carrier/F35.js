
const Aircraft = require('./Aircraft');

class F35 extends Aircraft {
  constructor() {
    super(50, 12);
  }

  isPriority() {
    return true;
  }
}

module.exports = F35;
