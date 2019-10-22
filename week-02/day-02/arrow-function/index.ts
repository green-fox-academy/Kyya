function getSquare(number: number): number {
  return number * number;
}

const getSquareUsingArrow = (number): number => number * number;

console.log(getSquare(3));
console.log(getSquareUsingArrow(3));

function getName(firstName: string, lastName: string): string {
  return firstName === '' ? lastName : `${firstName} ${lastName}`;
}

const getNameUsingArrow = (
  firstName: string,
  lastName: string,
): string => (firstName === '' ? lastName : `${firstName} ${lastName}`);


console.log(getName('John', 'Smith'));
console.log(getNameUsingArrow('', 'Bond'));
