const products = {
    'Eggs'   : 200,
    'Milk'   : 200,
    'Fish'   : 400,
    'Apples' : 150,
    'Bread'  : 50,
    'Chicken': 550,
}
// How much is the fish? It's an awesome video :)
console.log(products['Fish'])

// What is the most expensive product?
const maxPrice = Math.max(...Object.values(products))
for ( const [ name, price ] of Object.entries(products)) {
    if (price == maxPrice) {
        console.log(name)
        break
    }
}

// What is the average price?
const length = Object.values(products).length
const totalPrice = Object.values(products).reduce((accu, current)=>accu+current)
console.log(Number(totalPrice / length).toFixed(2))

// How many products' price is below 300?
console.log(Object.values(products).filter(price=>price<300).length)

// Is there anything we can buy for exactly 125?
console.log(Object.values(products).filter(price=>price<=125).length > 0)

// What is the cheapest product?
const cheapestPrice = Math.min(...Object.values(products))
for ( const [name, price] of Object.entries(products)) {
    if (price == cheapestPrice) {
        console.log(name)
        break
    }
}
