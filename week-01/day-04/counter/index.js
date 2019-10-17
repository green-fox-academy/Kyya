class Counter {
    constructor(number = 0) {
        this.number = number
    }
    add(number) {
        this.number += number
    }
    get() {
        return `${this.number}`
    }
    reset() {
        this.number = 0
    }
}

const c = new Counter() 
c.add(100)
console.log(c.get())
c.reset()
console.log(c.get())
