import { Helicopter, Bird } from './flyable'

const h = new Helicopter()
const b = new Bird('Hummer')

h.takeOff()
h.fly()
h.land()

b.takeOff()
b.fly()
b.land()
