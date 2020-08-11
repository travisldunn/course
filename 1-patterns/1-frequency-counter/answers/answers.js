// ****************Frequency Counter******************

sameFrequency = (num1, num2) => {
  num1 = num1.toString();
  num2 = num2.toString();

  if (num1.length !== num2.length) return false;
  let num1Hash = {};
  let num2Hash = {};
  for (let el of num1) {
    num1Hash[el] = ++num1Hash[el] || 1;
  }
  for (let el of num2) {
    num2Hash[el] = ++num2Hash[el] || 1;
  }
  for (let num in num1Hash) {
    if (num1Hash[num] !== num2Hash[num]) return false;
  }

  return true;
};

sameFrequency = (num1, num2) => {
  let str1 = num1.toString(),
    str2 = num2 + "",
    hash = {};

  if (str1.length !== str2.length) return false;

  for (let char of str1) {
    hash[char] = ++hash[char] || 1;
  }

  for (let char of str2) {
    if (hash[char]) --hash[char];
    else return false;
  }

  return true;
};

function sameFrequency(num1, num2) {
  let collection = {};
  num1 += "";
  num2 += "";

  for (let char of num1) {
    collection[char] = ++collection[char] || 1;
  }
  for (let char of num2) {
    if (!collection[char]) return false;
    --collection[char];
  }
  return true;
}

function sameFrequency(num1, num2) {
  let nums = {};
  for (let num of num1 + "") nums[num] = ++nums[num] || 1;

  for (let num of num2 + "") {
    if (!nums[num]) return false;
    --nums[num];
  }
  return true;
}

// console.log(sameFrequency(1821, 2811));

function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return collection;
}

function areThereDupelicates() {
  let collection = {};

  for (let el in arguments) {
    if (!collection[arguments[el]]) collection[arguments[el]] = 1;
    else return true;
  }
  return collection;
}

function areThereDupelicates() {
  let collection = {};
  for (let arg of arguments) {
    if (collection[arg]) return true;
    collection[arg] = 1;
  }
  return collection;
}

function areThereDupelicates() {
  let set = new Set();
  for (let a of arguments) {
    if (set.has(a)) return true;
    set.add(a);
  }
  return set;
}

// console.log(areThereDuplicates(1, 2, 3));
// console.log(areThereDupelicates(1, 2, 1));

isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let str1Hash = {};
  let str2Hash = {};

  for (let char of str1) {
    str1Hash[char] = ++str1Hash[char] || 1;
  }

  for (let char of str2) {
    str2Hash[char] = ++str2Hash[char] || 1;
  }

  for (let char in str1Hash) {
    if (str1Hash[char] !== str2Hash[char]) return false;
  }

  return true;
};

isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let collection = {};
  for (let char of str1) {
    collection[char] = ++collection[char] || 1;
  }

  for (let char of str2) {
    if (collection[char]) --collection[char];
    else return false;
  }

  return true;
};

isAnagram = (str1, str2) => {
  return str1.split("").sort().join() === str2.split("").sort().join();
};

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let chars1 = {},
    chars2 = {};
  for (let c of str1) chars1[c] = ++chars1[c] || 1;
  for (let c of str2) chars2[c] = ++chars2[c] || 1;
  for (let c in chars1) if (chars1[c] !== chars2[c]) return false;
  return true;
}

// console.log(isAnagram("ttttratvis", "stivart")); // false
// console.log(isAnagram("travisz", "sivartt")); // false
// console.log(isAnagram("dog", "god")); // true

//count the number of charactrers and numbers in a string

numChar = (str) => {
  let count = {};

  for (let c of str.toLowerCase()) {
    if (/[a-z0-9 _]/.test(c)) count[c] = ++count[c] || 1;
  }

  return count;
};

// console.log(numChar("Travisss lennin 765 Dunn!!!! "));

// Check to see if ary2 contains the squared numbers of ary1 with the same frequency

squaredArray = (ary1, ary2) => {
  if (ary1.length !== ary2.length) return false;

  let collection = {};

  for (let el of ary2) {
    collection[el] = ++collection[el] || 1;
  }

  for (let el of ary1) {
    if (collection[el * el]) --collection[el * el];
    else return false;
  }

  return true;
};

function squaredArray(ary1, ary2) {
  let count = {};
  for (let n of ary2) {
    count[n] = ++count[n] || 1;
  }
  for (let n of ary1) {
    if (!count[n * n]) return false;
    --count[n];
  }
  return true;
}

function squaredArray(ary1, ary2) {
  const nums = {};
  for (let n of ary2) nums[n] = ++nums[n] || 1;
  for (let n of ary1) {
    if (!nums[n ** 2]) return false;
    --nums[n ** 2];
  }
  return true;
}
// console.log(squaredArray([1, 2, 3], [1, 4, 9])); // true
// console.log(squaredArray([1, 2, 3], [1, 9])); // false
// console.log(squaredArray([1, 2, 1], [4, 4, 1])); // false

// Given an array of integers, return an array with all duplicates removed.

function unique(arr) {
  let hash = {};
  let singles = [];
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = ++hash[arr[i]] || 1;
  }
  for (let key in hash) {
    singles.push(Number(key));
  }
  return singles;
}

function unique(arr) {
  const collection = {};
  const singles = [];

  for (let num of arr) {
    if (!collection[num]) {
      singles.push(num);
      collection[num] = true;
    }
  }

  return singles;
}

function unique(arr) {
  const set = new Set(arr);
  const ary = [];
  for (let n of set) ary.push(n);
  return ary;
}

const unique = (arr) => [...new Set(arr)];

// console.log(unique([1, 2, 4, 4, 5, 6])); // [1, 2, 4, 5, 6]
// console.log(unique([1, 1, 2, 2, 3, 3])); // [1, 2, 3]
// console.log(unique([1, 2, 3, 1, 2])); // [1, 2, 3]

/**
 * Word Count
 *
 * Given an body of text, return a hash table of the frequency of each word.
 *
 * Parameters
 * Input: text {String}
 * Output: {Hash Table}
 *
 * Constraints
 *
 * Capital and lower case versions of the same word should be counted as the same word.
 *
 * Remove punctuations from all words.
 *
 * Time: O(N)
 * Space: O(N)
 * Where N is the number of characters in the string.
 *
 * **Examples**
 * 'The cat and the hat.' --> '{ the: 2, cat: 1, and: 1, hat: 1 }'`
 * 'As soon as possible.' --> '{ as: 2, soon: 1, possible: 1 }'`
 * 'It's a man, it's a plane, it's superman!' --> '{ its: 3, a: 2, man: 1, plane: 1, superman: 1 }'`
 */

function wordCount(sentence) {
  if (sentence.length < 1) return {};
  let hash = {};
  let tempString = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      hash[tempString] = ++hash[tempString] || 1;
      tempString = "";
    }
    if (/[a-z1-9]/.test(sentence[i].toLowerCase())) {
      tempString += sentence[i].toLowerCase();
    }
  }
  hash[tempString] = ++hash[tempString] || 1;
  return hash;
}

function wordCount(sentence) {
  let punctuations = new Set(["?", "!", ".", "'", ","]);
  let filteredSentence = "";
  let char = 0;
  let wordCounts = {};

  if (sentence === "") {
    return {};
  }
  while (char < sentence.length) {
    if (punctuations.has(sentence[char]) === false) {
      filteredSentence += sentence[char].toLowerCase();
    }
    char += 1;
  }
  let words = filteredSentence.split(" ");
  for (let word = 0; word < words.length; word++) {
    if (wordCounts[words[word]] === undefined) {
      wordCounts[words[word]] = 1;
    } else {
      wordCounts[words[word]] += 1;
    }
  }
  return wordCounts;
}

function wordCount(sentence) {
  const punctuations = new Set(["?", "!", ".", "'", ","]);
  let cleanSentence = "";
  const wordArr = sentence.split("");

  for (let char of wordArr) {
    if (!punctuations.has(char)) cleanSentence += char;
  }

  const wordCount = {};

  for (let word of cleanSentence.toLowerCase().split(" ")) {
    wordCount[word] = ++wordCount[word] || 1;
  }
  return wordCount;
}

function wordCount(sentence) {
  let clean = "";
  const count = {};
  for (let c of sentence.toLowerCase()) {
    if (/[a-z0-9 _]/.test(c)) clean += c;
  }
  const arr = clean.split(" ");
  for (let w of arr) {
    count[w] = ++count[w] || 1;
  }

  return count;
}

function wordCount(sentence) {
  let cleaned = "";
  const count = {};
  for (let c of sentence.toLowerCase()) if (/[a-z1-9 _]/.test(c)) cleaned += c;
  for (let w of cleaned.split(" ")) count[w] = ++count[w] || 1;
  return count;
}

/**
 * RGB Set
 *
 * Given a string of characters where each character is either 'r', 'g', or 'b',
 * determine the number of complete sets of 'rgb' that can be made with the
 * characters.
 *
 * Parameters
 * Input: str {String}
 * Output: {Integer}
 *
 * Constraints
 * Time: O(N)
 * Space: O(1)
 *
 * Examples
 * `'rgbrgb' --> 2`
 * `'rbgrbrgrgbgrrggbbbbrgrgrgrg' --> 7`
 * `'bbrr' --> 0`
 */

function rgb(string) {
  if (string.length < 3) return 0;
  let hash = {
    r: 0,
    g: 0,
    b: 0,
  };
  for (let el of string) {
    hash[el] = ++hash[el] || 1;
  }
  let least = Infinity;
  for (let key in hash) {
    if (hash[key] < least) least = hash[key];
  }
  if (least < 1) return 0;
  return least;
}

function rgb(string) {
  let count = {};
  for (let i = 0; i < string.length; i++) {
    if (count[string[i]] === undefined) {
      count[string[i]] = 1;
    } else {
      count[string[i]] += 1;
    }
  }
  let numOfPairs = Infinity;
  if (Object.keys(count).length < 3) {
    return 0;
  }
  for (let char in count) {
    if (count[char] < numOfPairs) {
      numOfPairs = count[char];
    }
  }
  return numOfPairs;
}

function rgb(string) {
  const count = { r: 0, g: 0, b: 0 };
  for (let c of string) ++count[c];
  let max = Infinity;
  for (let key in count) if (count[key] < max) max = count[key];
  return max;
}

/**
 * Missing Number
 *
 * Given range of 1 to N and an array of unique integers that are within that
 * range, return the missing integers not found in the array
 *
 * Parameters
 * Input: n {Integer}
 * Input: arr {Array of Integers}
 * Output: {Array of Integers}
 *
 * Constraints
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * `4, [1, 4, 2] --> [3]`
 * `8, [4, 7, 1, 6] --> [2, 3, 5, 8]`
 * `6, [6, 4, 2, 1] --> [3, 5]`
 */

function missingNumber(n, arr) {
  let hashAll = {},
    missingAry = [];
  for (let i = 1; i <= n; i++) {
    hashAll[i] = 1;
  }
  for (let el of arr) {
    if (hashAll[el]) --hashAll[el];
  }
  for (let key in hashAll) {
    if (hashAll[key] > 0) missingAry.push(Number(key));
  }
  return missingAry;
}

function missingNumber(n, arr) {
  let count = {};
  let result = [];
  for (let char = 0; char < arr.length; char++) {
    if (count[arr[char]] === undefined) {
      count[arr[char]] = 1;
    } else {
      count[arr[char]] += 1;
    }
  }
  for (let i = 1; i < n + 1; i++) {
    if (count[i] === undefined) {
      result.push(i);
    }
  }
  return result;
}

function missingNumber(n, arr) {
  const numbers = new Set(arr);
  const missing = [];

  for (let i = 1; i <= n; i++) {
    if (!numbers.has(i)) missing.push(i);
  }
  return missing;
}

function missingNumber(n, arr) {
  const nums = {};
  const missing = [];

  for (let n of arr) nums[n] = ++nums[n] || 1;

  for (let i = n; i > 0; i--) {
    if (!nums[i]) missing.push(i);
  }

  return missing;
}

function missingNumber(n, arr) {
  const set = new Set(arr),
    missing = [];
  for (let i = n; i > 0; i--) if (!set.has(i)) missing.push(i);
  return missing;
}
/**
 * Letter Sort
 *
 * Given a string of letters, return the letters in sorted order.
 *
 * Parameters
 * Input: str {String}
 * Output: {String}
 *
 * Constraints
 * Time: O(N)
 * Space: O(1)
 *
 * Examples
 * `hello --> ehllo`
 * `whiteboard --> abdehiortw`
 * `one --> eno`
 */

function letterSort(string) {
  let chars = new Array(26).fill(0);
  let sortedString = "";
  for (let c = 0; c < string.length; c++) {
    chars[string[c].charCodeAt() - 97] += 1;
  }
  for (let i = 0; i < chars.length; i++) {
    sortedString += String.fromCharCode(97 + i).repeat(chars[i]);
  }
  return sortedString;
}

function letterSort(string) {
  let chars = new Array(26).fill(0);
  let sorted = "";
  for (let char of string) {
    ++chars[char.charCodeAt() - 97];
  }
  for (let i = 0; i < chars.length; i++) {
    sorted += String.fromCharCode(97 + i).repeat(chars[i]);
  }
  return sorted;
}

function letterSort(string) {
  const arr = new Array(26).fill(0);
  for (let c of string) ++arr[c.charCodeAt() - 97];

  let revString = "";
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    while (n > 0) {
      revString += String.fromCharCode(97 + i);
      --n;
    }
  }
  return revString;
}

const letterSort = (s) => {
  const arr = new Array(26).fill(0);
  let str = "";
  for (let c of s) ++arr[c.charCodeAt() - 97];
  for (let i = 26; i >= 0; i--) {
    str += String.fromCharCode(97 + i).repeat(arr[i]);
  }
  return str;
};

/**
 * Character Mode
 *
 * Given a string, find the most frequent occurring letter(s) in the string
 *
 * Parameters
 * Input: str {String}
 * Output: {String}
 *
 * Constraints
 * If more than one letter is tied for the most frequent, return a string of all
 * the letters in one string.
 *
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * 'hello' --> 'l'
 * 'A walk in the park' --> 'a'
 * 'noon' --> 'no'
 */

function characterMode(string) {
  let chars = new Array(26).fill(0);
  let result = "";
  for (let c = 0; c < string.length; c++) {
    if (string[c] !== " ") {
      chars[string[c].toLowerCase().charCodeAt() - 97] += 1;
    }
  }
  let max_frequency = 0;
  for (let c = 0; c < chars.length; c++) {
    if (chars[c] > max_frequency) {
      max_frequency = chars[c];
    }
  }
  for (let c = 0; c < chars.length; c++) {
    if (chars[c] === max_frequency) {
      result += String.fromCharCode(c + 97);
    }
  }
  return result;
}

function characterMode(string) {
  const count = {};
  for (let c of string.toLowerCase()) {
    if (/[a-z]/.test(c)) count[c] = ++count[c] || 1;
  }
  let result = "",
    most = 0;
  for (let key in count) {
    if (count[key] > most) {
      result = key;
      most = count[key];
    } else if (count[key] === most) result += key;
  }
  return result;
}

/**
 * Sort Digits
 *
 * Given an integer, sort the digits in ascending order and return the new integer.
 * Ignore leading zeros.
 *
 * Parameters
 * Input: num {Integer}
 * Output: {Integer}
 *
 * Constraints
 * Do not convert the integer into a string or other data type.
 *
 * Time: O(N) where N is the number of digits.
 * Space: O(1)
 *
 * Examples
 * 8970 --> 789
 * 32445 --> 23445
 * 10101 --> 111
 */

function sortDigits(n) {
  let digitCounts = {};
  let result = 0;
  while (n > 0) {
    let digit = n % 10;
    if (digitCounts[digit] === undefined) {
      digitCounts[digit] = 1;
    } else {
      digitCounts[digit] += 1;
    }
    n = parseInt(n / 10);
  }
  let power = 0;
  for (let i = 10; i >= 0; i--) {
    if (digitCounts[i] !== undefined) {
      while (digitCounts[i] >= 1) {
        result += i * Math.pow(10, power);
        power += 1;
        digitCounts[i] -= 1;
      }
    }
  }
  return result;
}

function sortDigits(n) {
  const digitCount = {};
  let result = 0,
    digit;

  while (n) {
    digit = n % 10;
    digitCount[digit] = ++digitCount[digit] || 1;
    n = parseInt(n / 10);
  }

  let power = 0;

  for (let i = 9; i > 0; i--) {
    if (digitCount[i]) {
      while (digitCount[i] >= 1) {
        result += i * Math.pow(10, power);
        ++power;
        --digitCount[i];
      }
    }
  }

  return result;
}

function sortDigits(n) {
  const count = {};
  let digit,
    result = 0,
    power = 0;

  while (n) {
    digit = n % 10;
    count[digit] = ++count[digit] || 1;
    n = parseInt(n / 10);
  }

  for (let i = 9; i > 0; i--) {
    while (count[i] > 0) {
      result += i * Math.pow(10, power);
      ++power;
      --count[i];
    }
  }
  return result;
}

/**
 *  Get Duplicates
 *
 *  Given an array of values, return only the values that have duplicates in the
 *  array
 *
 *  Parameters
 *  Input: arr {Array}
 *  Output: {Array}
 *
 *  Constraints
 *  Time: O(N)
 *  Space: O(N)
 *
 *  Examples
 *  [1, 2, 4, 2] --> [2]
 *  [3, 2, 3, 2, 3, 3, 4] --> [3, 2]
 *  [1, 2, 3, 4] --> []
 */

function getDuplicates(arr) {
  let count = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]] === undefined) {
      count[arr[i]] = 1;
    } else {
      count[arr[i]] += 1;
    }
  }
  for (let num in count) {
    if (count[num] > 1) {
      result.push(parseInt(num));
    }
  }
  return result;
}

function getDuplicates(arr) {
  const collection = {};
  const results = [];
  for (let n of arr) {
    collection[n] = ++collection[n] || 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) results.push(key);
  }
  return results;
}

function getDuplicates(arr) {
  const dupes = {};
  let results = [];
  for (let n of arr) dupes[n] = ++dupes[n] || 1;
  for (let key in dupes) if (dupes[key] > 1) results.push(key);
  return results;
}

// rearange the scores from highest to lowest

sortScores = (unsorted, high) => {
  const fill = new Array(high + 1).fill(0);

  for (let score of unsorted) {
    fill[score]++;
  }

  const sorted = [];

  for (let i = fill.length; i >= 0; i--) {
    if (fill[i] > 0) sorted.push(i);
  }
  return sorted;
};

sortScores = (unsorted, high) => {
  const scores = new Array(high + 1).fill(0),
    sorted = [];

  for (let n of unsorted) ++scores[n];
  for (let i = scores.length; i > 0; i--) if (scores[i] > 0) sorted.push(i);
  return sorted;
};

const unsortedScores = [37, 89, 41, 65, 91, 53, 100];
const HIGHEST_POSSIBLE_SCORE = 100;

console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));
// returns [91, 89, 65, 53, 41, 37]

isPermPal = (s) => {
  const set = new Set();
  for (let c of s) {
    if (set.has(c)) set.delete(c);
    else set.add(c);
  }
  return set.size <= 1;
};

isPermPal = (s) => {
  let set = new Set();
  for (let c of s) set.has(c) ? set.delete(c) : set.add(c);
  return set.size <= 1;
};

// console.log(isPermPal("civic")); // true
// console.log(isPermPal("ivicc")); // true
// console.log(isPermPal("civil")); // false
// console.log(isPermPal("livci")); // false
// console.log(isPermPal("ttttt")); // true
