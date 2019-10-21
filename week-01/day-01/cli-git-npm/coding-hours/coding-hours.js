
// An attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
const daysOfSemester = 17 * 5;
console.log(`${daysOfSemester * 6} hours was spent with coding in a semester`);
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52
const number = 52 / (5 * 24) / 0.01;
const percent = `${Number(number).toFixed(2)}%`;
console.log(percent);
