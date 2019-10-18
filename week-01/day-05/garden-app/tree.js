class Tree {
    constructor(color) {
        this.color = color
        this.water = 0
    }
    get needs() {
        return this.water < 10
    }
    state() {
        console.log(`The ${this.color} Tree ${this.needs?'needs':'doesnt need'} water`)
    }
    watered(amount) {
        this.water += 0.4 * amount
        this.state()
    }
}
module.exports = Tree
