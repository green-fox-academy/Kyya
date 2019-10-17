class Thing {

  constructor(name) {
    this.name = name;
    this.completed = false;
  }

  complete() {
    this.completed = true;
  }

  getName() {
    return this.name;
  }

  getCompleted() {
    return this.completed;
  }
}

module.exports = Thing;
