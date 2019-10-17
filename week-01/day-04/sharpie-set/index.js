class Sharpie {
    constructor(color, width, inkAmount = 100) {
        this.color = color
        this.width = width
        this.inkAmount = inkAmount
    }

    use() {
        this.inkAmount--
    }
}

class SharpieSet {
    constructor(sharpieList) {
        this.list = sharpieList
    }
    countUsable() {
        return this.list.filter(i=>i.inkAmount>0).length
    }
    removeTrash() {
        this.list = this.list.filter(i=>i.inkAmount>0)
    }
}

const set = new SharpieSet([
    new Sharpie('black', 10, 40),
    new Sharpie('blue', 11, 0),
    new Sharpie('red', 12, 40)
])

console.log(set.countUsable())
set.removeTrash()
console.log(set.list)
