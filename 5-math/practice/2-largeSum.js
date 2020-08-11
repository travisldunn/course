// # Large Sum

// In all languages there is a limit to the size of integers numbers.This can create problems when adding large numbers together:

// ```javascript
// //javascript example
// let a = 100038029087777777007777777777777838299982982983984
// let b = a + 100000000000000000000000000000
// console.log(a === b) // returns true
// ```
// Your task is to solve this problem using strings.

// Given two very large integers(> 50 digits), represented as strings, return the value of their sum as a string

//     ```
// Input: {String, String}
// Output: {String}
// ```
// # Example
//     ```
// Input: str1 = “3333311111111111”
// Input: str2 = “44422222221111”
// Output: “3377733333332222”

// Input: str1 = “999999”
// Input: str2 = “1”
// Output: “1000000”
// ```

// # Constraints
//     ```
// Time Complexity: O(max(m,n))
// Auxiliary Space Complexity: O(max(m,n))
// ```

//     * The strings will contain only integers(no spaces, punctuation, or letters)
//         * They do not necessarily have to same the length
//             * This function should work with strings of numbers of any length

// # Solution

//     * 1) Initialize a`result` string you will be building up
//         * 2) Reverse both`strings`
//             * 3) Iterate through both`strings` simultaneously up until the length of the shorter string
//                 * a) Keep track of a`carry`, initialized to`0`
//                     * b) Going index by index, convert that character in both strings into a number and add them together.
//   * c) Add the`carry` to this `sum`
//     * d) If this produces a number greater than`10`
//         * i) Set the`carry` equal to`1`
//             * e) Add the`number % 10` to the string
//                 * 4) Iterate through the longer string from the index representing the end of the shorter until
// the end
//     * a) Repeat the process above, but only adding the`carry` if there is one
//         * 5) If there is a`carry` at the end, concatenate it to the result
//             * 6) Return the result reversed

// # Resources
// [Sum Two Large Numbers on Geeks for Geeks](http://www.geeksforgeeks.org/sum-two-large-numbers/)

//     ```javascript
// // Javascript solution
// function addLarge(str1, str2) {
//   let result = "";
//   let smallIndex = Math.min(str1.length, str2.length);
//   let largeIndex = Math.max(str1.length, str2.length);
//   let newStr1 = str1.split("").reverse().join("")
//   let newStr2 = str2.split("").reverse().join("")
//   let longString;

//   if(newStr1 > newStr2) {
//     longString = newStr1;
//     } else {
//     longString = newStr2;
//   }

//   let carry = 0;

//   for(let i = 0; i < smallIndex; i++){
//     let sum = Number(newStr1[i]) + Number(newStr2[i]) + carry;
//     if(sum >= 10) {
//       carry = 1;
//     } else {
//       carry = 0;
//     }
//     result += sum % 10
//   }
//   for(let i = smallIndex; i < largeIndex; i++) {
//     let sum = Number(longString[i]) + carry
//     if(sum >= 10) {
//       carry = 1;
//     } else {
//       carry = 0;
//     }
//     result += sum % 10
//   }

//   if(carry) {
//     result += 1;
//   }
//   return result.split("").reverse().join("")
// }
