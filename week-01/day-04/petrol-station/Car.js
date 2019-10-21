class Car {
  constructor() {
    this.gasAmount = 0;
    this.capacity = 100;
  }

  refill() {
    this.gasAmount = this.capacity;
  }
}

module.exports = Car;
