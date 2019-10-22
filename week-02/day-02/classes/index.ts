/**
 * Write with both technologies a class that's named Garden,
 * has width and length as fields and the following functions:
 * area(), circumference() and efficiency().
 * The function called efficiency
 * should return the result of area() / circumference().
 */

export function Garden(width: number, length: number): void {
  this.width = width;
  this.length = length;
}

Garden.prototype.area = function (): number {
  return this.width * this.length;
};

Garden.prototype.circumference = function (): number {
  return (this.width + this.length) * 2;
};

Garden.prototype.efficiency = function (): number {
  return this.area() / this.circumference();
};

export class ES6Garden {
  protected width: number;

  protected length: number;

  constructor(width: number, length: number) {
    this.width = width;
    this.length = length;
  }

  area(): number {
    return this.width * this.length;
  }

  circumference(): number {
    return (this.width + this.length) * 2;
  }

  efficiency(): number {
    return this.area() / this.circumference();
  }
}
