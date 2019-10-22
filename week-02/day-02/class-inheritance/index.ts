/**
 * Create a Playground class that is extended from the Garden class.
 * Give it an extra toys field which should be a string array.
 * Give it an add(toy) function that stores the new toy in the toys array.
 */
import { Garden, ES6Garden } from '../classes';

export function PlayGround(width: number, length: number, listOfToys: string[]): void {
  Garden.call(this, width, length);
  this.listOfToys = listOfToys;
}

// we need to set the class prototype for inheritance
PlayGround.prototype = Object.create(Garden.prototype);
// we have reassigned the constructor so we need to set it back
PlayGround.prototype.constructor = PlayGround;

PlayGround.prototype.add = function (toy: string): void {
  this.listOfToys.push(toy);
};

const playground = new PlayGround(600, 400, []);

playground.add('demo');

console.log(playground instanceof Garden);
console.log(playground instanceof PlayGround);

export class ES6PlayGround extends ES6Garden {
  protected listOfToys: string[];

  constructor(width: number, length: number, listOfToys: string[]) {
    super(width, length);
    this.listOfToys = listOfToys;
  }

  add(toy: string): void {
    this.listOfToys.push(toy);
  }
}
