class Flower {
    constructor(color) {
        this.color = color
        this.water = 4
    }
    get needs() {
        return this.water < 5
    }
    state() {
        console.log(`The ${this.color} Flower ${this.needs?'needs':'doesnt need'} water`)
    }
    watered(amount) {
        this.water += 0.75 * amount
        this.state()
    }
}

module.exports = Flower
