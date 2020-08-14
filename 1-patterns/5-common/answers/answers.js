// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.

isPal = (str) => {
  let l = 0,
    r = str.length - 1;
  while (l < r) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }
  return true;
};

isPal = (str) => str.split("").reverse().join("") === str;
isPal = (str) => str.split("").every((c, i) => c === str[str.length - i - 1]);

// console.log(isPal("civic")); // true
// console.log(isPal("fucks")); // false
// console.log(isPal("tit")); // true
// console.log(isPal("racecar")); // true
// console.log(isPal("fred")); // false

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

// console.log(capWords(two));

// Given a string, return a new string with the reversed
// order of characters

reverseString = (str) => {
  let reversed = "";
  for (let c of str) reversed = c + reversed;
  return reversed;
};

reverseString = (str) => str.split("").reverse().join("");

reverseString = (str) => str.split("").reduce((rev, char) => char + rev, "");

// console.log(reverseString("travis"));
// console.log(reverseString("doitforthegram"));
// console.log(reverseString("fucks"));
// console.log(reverseString("trippinballs"));

// Given an integer, return an integer that is the reverse
// ordering of numbers.

reverseNum = (n) => {
  reversed = parseInt(n.toString().split("").reverse().join(""));
  if (n < 0) return reversed * -1;
  return reversed;
};

reverseNum = (n) =>
  parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);

// console.log(reverseNum(-5));
// console.log(reverseNum(456));
// console.log(reverseNum(-899));
// console.log(reverseNum(40));

// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.

fizzbuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("fizzbuzz");
    else if (i % 3 === 0) console.log("fizz");
    else if (i % 5 === 0) console.log("buzz");
    else console.log(i);
  }
};

// fizzbuzz(15);

// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.

function capitalize(str) {
  let capped = "";
  for (let w of str.split(" ")) capped += w[0].toUpperCase() + w.slice(1) + " ";
  return capped.trim();
}

// console.log(capitalize("a short sentence")); // 'A Short Sentence'
// console.log(capitalize("a lazy fox")); // 'A Lazy Fox'
// console.log(capitalize("look, it is working!")); // 'Look, It Is Working!'

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
  while (row < n) {
    for (let i = 0; i < row; i++) step += "#";
    for (let i = row; i < n; i++) step += " ";
    console.log(step);
    row++;
    step = "";
  }
}

function steps(n, row = 0, step = "") {
  if (row > n) return;
  for (let i = 0; i < row; i++) step += "#";
  for (let i = row; i < n; i++) step += " ";
  console.log(step);
  steps(n, ++row);
}

function steps(n, row = 0, step = "") {
  if (row === n) return;
  if (step.length === n) {
    console.log(step);
    return steps(n, row + 1);
  }
  const add = step.length <= row ? "#" : " ";
  steps(n, row, step + add);
}

function steps(n) {
  let step;
  for (let i = 0; i < n; i++) {
    step = "";
    for (let j = 0; j < n; j++) {
      if (j <= i) step += "#";
      else step += " ";
    }
    console.log(step);
  }
}

steps(15);

// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
//
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, lev = "") {
  if (row === n) return;

  if (lev.length === 2 * n - 1) {
    console.log(lev);
    return pyramid(n, row + 1);
  }

  const mid = Math.floor((2 * n - 1) / 2);
  let add;
  if (mid - row <= lev.length && mid + row >= lev.length) {
    add = "#";
  } else add = " ";

  pyramid(n, row, lev + add);
}

function pyramid(n) {
  const mid = Math.floor((n * 2 - 1) / 2);
  for (let row = 0; row < n; row++) {
    let lev = "";
    for (let i = 0; i < n * 2 - 1; i++) {
      if (mid - row <= i && mid + row >= i) lev += "#";
      else lev += " ";
    }
    console.log(lev);
  }
}

// pyramid(5);

// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.

function vowels(str) {
  const vowel = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  for (let c of str.toLowerCase()) if (vowel.has(c)) ++count;
  return count;
}

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return str.match(/[aeiou]/gi) ? matches.length : 0;
}

// console.log(vowels("Hi There!")); // 3
// console.log(vowels("Why do you ask?")); // 4
// console.log(vowels("Why?")); // 0

// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
//
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const spiral = [];
  for (let i = 0; i < n; i++) spiral.push([]);

  let row = 0,
    endRow = n - 1,
    col = 0,
    endCol = n - 1,
    count = 1;

  while (count <= n * n) {
    // top
    for (let i = col; i <= endCol; i++) {
      spiral[row][i] = count;
      count++;
    }
    row++;
    // right
    for (let i = row; i <= endRow; i++) {
      spiral[i][endCol] = count;
      count++;
    }
    endCol--;
    // bottom
    for (let i = endCol; i >= col; i--) {
      spiral[endRow][i] = count;
      count++;
    }
    endRow--;
    // left
    for (let i = endRow; i >= row; i--) {
      spiral[i][col] = count;
      count++;
    }
    col++;
  }

  return spiral;
}

// console.log(matrix(5));
