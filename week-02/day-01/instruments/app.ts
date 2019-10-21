import { ElectricGuitar, BassGuitar, Violin } from './Instruments';

const guitar = new ElectricGuitar();
const bassGuitar = new BassGuitar();
const violin = new Violin();
  
console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();
  
console.log('Test 2, create Electric, Bass Guitar with 7 and 5 strings.');
const guitar2 = new ElectricGuitar(7);
const bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();
