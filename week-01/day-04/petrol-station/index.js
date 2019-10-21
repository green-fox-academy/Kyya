const Station = require('./Station');
const Car = require('./Car');

const station = new Station();
const car = new Car();

station.refill(car);
console.log(car);
console.log(station);
