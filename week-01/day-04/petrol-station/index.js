class Station {
    constructor(gasAmount = 1000) {
        this.gasAmount = gasAmount
    }

    refill(car) {
        this.gasAmount -= car.capacity
        car.gasAmount = car.capacity
    }
}

class Car {
    constructor() {
        this.gasAmount = 0
        this.capacity = 100
    }
}

const station = new Station()
const car = new Car()

station.refill(car)
console.log(car)
console.log(station)
