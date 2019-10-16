const products = {
    'Eggs'   : 200,
    'Milk'   : 200,
    'Fish'   : 400,
    'Apples' : 150,
    'Bread'  : 50,
    'Chicken': 550,
}

// Which products cost less than 201? (just the name)
function findProductCostLessThan(amount) {
    const res = []
    for (const [name, price] of Object.entries(products)) {
        if (price < amount) {
            res.push(name)
        }
    }
    return res
}

// Which products cost more than 150? (name + price)
function findProductCostMoreThan(amount) {
    const res = {}
    for (const [name, price] of Object.entries(products)) {
        if (price > amount) {
            res[name] = price
        }
    }
    return res
}

console.log(findProductCostLessThan(201))
console.log(findProductCostMoreThan(150))
