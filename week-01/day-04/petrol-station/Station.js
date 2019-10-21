class Station {
  constructor(gasAmount = 1000) {
    this.gasAmount = gasAmount;
  }

  refill(car) {
    this.gasAmount -= car.capacity;
    car.refill();
  }
}

module.exports = Station;
