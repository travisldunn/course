/*
 * ## Multiplication Using Russian Peasant [Extra Credit]
 *
 * *Given two positive integers, return its product using Russian Peasant method of multiplication*
 *
 * Read up on how to apply the Russian Peasant method [here](https://en.wikipedia.org/wiki/Ancient_Egyptian_multiplication). It is also referred to as the Egyptian multiplication.
 *
 * **Parameters**
 * Input: a {Integer}
 * Input: b {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 * Assume a <= b, and the value of a is N.
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `734, 487 --> 357458`
 * `846, 908--> 768168`
 */

function multiplicationRussianPeasant(a, b) {
  let finalSum = 0;
  while (b >= 1) {
    if (b % 2 != 0) {
      finalSum += a;
    }
    if (b === 1) {
      break;
    }
    a *= 2;
    b = parseInt(b / 2);
  }
  return finalSum;
}
