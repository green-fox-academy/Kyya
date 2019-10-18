class Aircraft {
    constructor(type, baseDamage, maxAmmo) {
        this.type = type
        this.ammo = 0
        this.maxAmmo = maxAmmo
        this.baseDamage = baseDamage
    }

    fight() {
        this.ammo = 0
        return this.allDamages
    }
    get allDamages() {
        return this.baseDamage * this.ammo
    }

    refill(amount) {
        var needs = this.maxAmmo - this.ammo
        if (amount > needs) {
            this.ammo += needs
            return amount - needs
        } else {
            this.ammo += amount
            return 0
        }
    }

    getType() {
        return this.type
    }
    getStatus() {
        console.log(`Type ${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage}, All Damage: ${this.allDamages}`)
    }
    isPriority() {
        return this.type === 'F35'
    }
}

class Carrier {
    constructor() {
        this.storage = []
        this.ammos = 2300
        this.health = 5000
    }
    add(aircraft) {
        this.storage.push(aircraft)
    }
    get counts() {
        return this.storage.length
    }
    get totalDamage() {
        return this.storage.reduce((accu, current) => accu + current.allDamages)
    }
    fill() {
        this.storage.reduce((accu, current) => {
            console.log(accu)
            return current.refill(this.ammos)
        })
    }

    fight(carrier) {
        carrier.health = Math.max(carrier.health - this.totalDamage, 0)
    }

    getStatus() {
        if (this.health == 0) {
            console.log('It\'s dead Jim :(')
        } else {
            console.log(`HP: ${this.health}, Aircraft count: ${this.counts}, Ammo Storage: ${this.ammos}, Total damage: ${this.totalDamage}`)
            console.log('Aircrafts:')
            this.storage.forEach(i=>i.getStatus())
        }
    }

}

