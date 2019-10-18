const Flower = require('./flower')
const Tree = require('./tree')
const Garden = require('./garden')

const garden = new Garden()

garden.addPlant(new Flower('yellow'))
garden.addPlant(new Flower('blue'))

garden.addPlant(new Tree('purple'))
garden.addPlant(new Tree('orange'))

garden.state()
garden.water(40)
garden.water(70)
