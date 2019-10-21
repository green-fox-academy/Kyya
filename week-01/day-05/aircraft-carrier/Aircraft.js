
class Aircraft {
  constructor(baseDamage, maxAmmo) {
    this.ammo = 0;
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
  }

  get totalDamage() {
    return this.baseDamage * this.ammo;
  }

  fight() {
    this.ammo = 0;
    return this.totalDamages;
  }

  refill(amount) {
    const needs = this.maxAmmo - this.ammo;
    if (amount > needs) {
      this.ammo += needs;
      return amount - needs;
    }
    this.ammo += amount;
    return 0;
  }

  getStatus() {
    console.log(`Type ${this.constructor.name}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage}, All Damage: ${this.totalDamage}`);
  }
}

module.exports = Aircraft;
