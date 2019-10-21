// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
const lineCount = 8;
const columnCount = 8;

for (let i = 0; i <= lineCount; i++) {
  console.log(`${i % 2 === 0 ? ' ' : ''}${'% '.repeat(columnCount)}`);
}
