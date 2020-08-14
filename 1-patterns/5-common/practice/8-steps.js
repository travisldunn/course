// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
//
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, step = "") {
  if (row === n) return;
  if (step.length === n) {
    console.log(step);
    return steps(n, row + 1);
  }
  const add = step.length <= row ? "#" : " ";
  steps(n, row, step + add);
}

steps(15);
