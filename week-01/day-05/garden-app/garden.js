const Plant = require('./plant')

class Garden {
    constructor() {
        this.plants = []
    }
    get needers() {
        return this.plants.filter(i=>i.needs).length
    }
    water(amount) {
        console.log(`Watering with ${amount}`)
        const waterDivided = amount / this.needers
        this.plants.forEach(i=>i.watered(waterDivided))
        console.log()
    }
    addPlant(plant) {
        if (plant instanceof Plant) {
            this.plants.push(plant)
        }
    }
    state() {
        this.plants.forEach(i=>i.state())
        console.log()
    }
}
module.exports = Garden
