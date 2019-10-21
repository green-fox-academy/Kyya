
const Aircraft = require('./Aircraft');

class F16 extends Aircraft {
  constructor() {
    super(30, 8);
  }

  isPriority() {
    return true;
  }
}

module.exports = F16;
