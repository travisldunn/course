// Check to see if served is in the correct order

firstServed = (out, dIn, served) => {};

const takeOut = [1, 3, 5];
const dineIn = [2, 4, 6, 7];
const served = [1, 2, 3, 5, 4, 6, 7];

console.log(firstServed(takeOut, dineIn, served)); // true
