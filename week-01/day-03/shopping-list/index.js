const products = {
  // name : price
  Milk: 1.07,
  Rice: 1.59,
  Eggs: 3.14,
  Cheese: 12.60,
  'Chicken Breasts': 9.40,
  Apples: 2.31,
  Tomato: 2.58,
  Potato: 1.75,
  Onion: 1.10,
};

const BobList = {
  // name : amount
  Milk: 3,
  Rice: 2,
  Eggs: 2,
  Cheese: 1,
  'Chicken Breasts': 4,
  Apples: 1,
  Tomato: 2,
  Potato: 1,
};

const AliceList = {
  // name : amount
  Rice: 1,
  Eggs: 5,
  'Chicken Breasts': 2,
  Apples: 1,
  Tomato: 10,
};

function calcListPrice(list) {
  let sum = 0;
  for (const [name, amount] of Object.entries(list)) {
    sum += products[name] * amount;
  }
  return sum;
}

function checkoutWhoBuySomethingMore(something) {
  const alice = AliceList[something] === undefined ? 0 : AliceList[something];
  const bob = BobList[something] === undefined ? 0 : BobList[something];
  return alice > bob ? 'Alice' : 'Bob';
}

// How much does Bob pay?
console.log(calcListPrice(BobList));
// How much does Alice pay?
console.log(calcListPrice(AliceList));

// Who buys more Rice?
console.log(checkoutWhoBuySomethingMore('Rice'));
// Who buys more Potato?
console.log(checkoutWhoBuySomethingMore('Potato'));

// Who buys more different products?
function diff(a, b) {
  const one = a.filter((i) => !b.includes(i)).length;
  const two = b.filter((i) => !a.includes(i)).length;
  return one > two;
}
if (diff(Object.keys(AliceList), Object.keys(BobList))) {
  console.log('Alice');
} else {
  console.log('Bob');
}

// Who buys more products? (piece)
function findWhoBuyMoreProducts() {
  const alice = Object.values(AliceList).reduce((accu, current) => accu + current);
  const bob = Object.values(BobList).reduce((accu, current) => accu + current);
  return alice > bob ? 'Alice' : 'Bob';
}
console.log(findWhoBuyMoreProducts());
