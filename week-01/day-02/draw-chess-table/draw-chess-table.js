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
const lineCout = 8;
const columnCount = 8;

for (let i=0; i<=lineCout; i++) 
    console.log(`${i%2==0?' ':''}${'% '.repeat(columnCount)}`)
