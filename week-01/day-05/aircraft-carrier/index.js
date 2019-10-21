
const Carrier = require('./Carrier');
const F16 = require('./F16');
const F35 = require('./F35');

const carrier1 = new Carrier();
carrier1.add(new F35());
carrier1.add(new F35());
carrier1.add(new F35());
carrier1.add(new F16());
carrier1.add(new F16());
carrier1.fill();
carrier1.getStatus();
