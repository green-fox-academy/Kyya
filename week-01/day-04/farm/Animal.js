class Animal {
  constructor(hunger = 50, thirst = 50) {
    this.hunger = hunger;
    this.thirst = thirst;
  }

  eat() {
    this.hunger--;
  }

  drink() {
    this.thirst--;
  }

  play() {
    this.hunger++;
    this.thirst++;
  }
}

module.exports = Animal;
