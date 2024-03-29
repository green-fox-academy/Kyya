import Reptile from './Reptile';
import Mammal from './Mammal';
import Bird from './Bird';

const reptile = new Reptile('Crocodile', 4, 'Africa');
const mammal = new Mammal('Koala', 'run', 5);
const bird = new Bird('Parrot', 'colorful', 30);

console.log('How do you breed?');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}.`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}.`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}.`);
