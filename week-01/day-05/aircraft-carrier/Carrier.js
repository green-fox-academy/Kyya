
class Carrier {
  constructor() {
    this.storage = [];
    this.ammos = 2300;
    this.health = 5000;
  }

  add(aircraft) {
    this.storage.push(aircraft);
  }

  get numberOfAircrafts() {
    return this.storage.length;
  }

  get totalDamage() {
    return this.storage
      .map((i) => i.totalDamage)
      .reduce((accumulation, current) => accumulation + current);
  }

  fill() {
    this.storage.forEach((i) => i.refill(this.ammos));
  }

  setHealth(amount) {
    this.health = amount;
  }

  fight(carrier) {
    carrier.setHealth(Math.max(carrier.health - this.totalDamage, 0));
    this.storage.forEach((i) => i.fight());
  }

  getStatus() {
    if (this.health === 0) {
      console.log('It\'s dead Jim :(');
    } else {
      console.log(this.totalDamage);
      console.log(`HP: ${this.health}, Aircraft count: ${this.numberOfAircrafts}, Ammo Storage: ${this.ammos}, Total damage: ${this.totalDamage}`);
      console.log('Aircrafts:');
      this.storage.forEach((i) => i.getStatus());
    }
  }
}

module.exports = Carrier;
