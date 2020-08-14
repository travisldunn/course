capWords = (str) => {
  let cleanStr = "";

  for (let char of str.toLowerCase()) {
    if (/[a-z\s]/.test(char)) cleanStr += char;
  }

  cleanStr = cleanStr.split(" ");
  let arr = [];

  for (let word of cleanStr) {
    arr.push(word[0].toUpperCase() + word.substr(1));
  }
};

let one = "After beating the eggs, Dana read the next step:";
let two = "Add milk and eggs, then add flour and sugar.";
console.log(capWords(two));
