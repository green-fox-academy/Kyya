const Flower = require('./flower')
const Tree = require('./tree')
const Garden = require('./garden')

const garden = new Garden()
garden.addTree(new Tree('purple'))
garden.addTree(new Tree('orange'))

garden.addFlower(new Flower('yellow'))
garden.addFlower(new Flower('blue'))

garden.state()
garden.water(40)
garden.water(70)
