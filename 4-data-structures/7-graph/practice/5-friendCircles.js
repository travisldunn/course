/*
 *  Friend Circles
 *
 *  A friend circle is a group of people who are direct or indirect friends.
 *  Given a NxN bitset matrix, where a 1 in the i,j coordinate signifies a
 *  friendship between person i and person j, determine how many circles of
 *  friends there are.
 *
 *  Parameters:
 *
 *  Input: Graph: [[Integer]] (adjacency matrix)
 *  Output: Integer
 *
 *  Example:
 *
 *  Input: `{{1,1,0}, {1,1,0}, {0,0,1}}`
 *  Output: 2
 *
 *  Input: `{{1,1,0}, {1,1,1}, {0,1,1}}`
 *  Output: 1
 *
 *  Resources:
 *  - https://leetcode.com/problems/friend-circles/description/
 *
 */

function friendCircles(matrix) {
  let seen = new Set();
  let circles = 0;
  let queue = [];

  for (let row = 0; row < matrix.length; row++) {
    let person = row;

    if (!seen.has(person)) {
      queue.push(person);
      seen.add(person);
      circles += 1;
    }

    while (queue.length) {
      let current = queue.shift();
      for (let friend = 0; friend < matrix[current].length; friend++) {
        if (matrix[current][friend] === 1 && !seen.has(friend)) {
          seen.add(friend);
          queue.push(friend);
        }
      }
    }
  }
  return circles;
}
