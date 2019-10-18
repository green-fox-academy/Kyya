class Garden {
    constructor() {
        this.flowers = []
        this.trees = []
    }
    get needers() {
        return this.trees.filter(i=>i.needs).length + this.flowers.filter(i=>i.needs).length
    }
    water(amount) {
        console.log(`Watering with ${amount}`)
        const waterDivided = amount / this.needers
        this.flowers.forEach(flower=>flower.watered(waterDivided))
        this.trees.forEach(tree=>tree.watered(waterDivided))
        console.log()
    }
    addTree(tree) {
        this.trees.push(tree)
    }
    addFlower(flower) {
        this.flowers.push(flower)
    }
    state() {
        this.flowers.forEach(i=>i.state())
        this.trees.forEach(i=>i.state())
        console.log()
    }
}
module.exports = Garden
