
const lineCount = 6;


// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is
for (let i = 1; i <= lineCount; i++) {
  if (i === 1 || i === lineCount) { console.log('%'.repeat(lineCount)); } else {
    let targetLine = `%${' '.repeat(lineCount - 2)}%`;
    targetLine = `${targetLine.substr(0, i - 1)}%${targetLine.substr(i - 1 + 1)}`;
    console.log(targetLine);
  }
}
