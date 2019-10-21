class Plant {
  constructor(type, color, water) {
    this.type = type;
    this.color = color;
    this.water = water;
  }

  get needs() {
    return this.water < (this.type === 'Flower' ? 5 : 10);
  }

  state() {
    console.log(`The ${this.color} ${this.type} ${this.needs ? 'needs' : 'doesn\'t need'} water`);
  }

  watered(amount) {
    this.water += (this.type === 'Flower' ? 0.75 : 0.4) * amount;
    this.state();
  }
}

module.exports = Plant;
