// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.

function capitalize(str) {
  let capped = "";
  for (let w of str.split(" ")) capped += w[0].toUpperCase() + w.slice(1) + " ";
  return capped.trim();
}

console.log(capitalize("a short sentence")); // 'A Short Sentence'
console.log(capitalize("a lazy fox")); // 'A Lazy Fox'
console.log(capitalize("look, it is working!")); // 'Look, It Is Working!'
