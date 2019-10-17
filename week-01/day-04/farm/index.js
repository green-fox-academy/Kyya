class Animal {
    constructor(hunger=50, thirst=50) {
        this.hunger = hunger
        this.thirst = thirst
    }

    eat() {
        this.hunger--
    }

    drink() {
        this.thirst--
    }

    play() {
        this.hunger++
        this.thirst++
    }
}

class Farm {

    constructor(animalList, slots=100) {
        this.list = animalList
        this.slots = slots
    }
    breed() {
        if (this.slots > 0) {
            this.list.push(new Animal())
            this.slots--
        }
    }
    slaughter() {
        var leastHungryIndex = 0
        for (const [index, value] of this.list.entries()) {
            if (value.hunger < this.list[leastHungryIndex].hunger) {
                leastHungryIndex = index
            }
        }
        this.list.splice(leastHungryIndex, 1)

        this.slots++
    }
}

const f = new Farm([
    new Animal(60, 60),
    new Animal(47, 50),
    new Animal(31, 50),
])

f.breed()
console.log(f.list)
f.slaughter()
console.log(f.list)
