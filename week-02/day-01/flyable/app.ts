import { Helicopter, Bird } from './flyable';

const helicopter = new Helicopter();
const bird = new Bird('Hummer');// a tiny bird fly very fast

helicopter.takeOff();
helicopter.fly();
helicopter.land();

bird.takeOff();
bird.fly();
bird.land();
