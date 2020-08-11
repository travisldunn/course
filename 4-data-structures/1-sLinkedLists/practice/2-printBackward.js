/**
 * Print the value of each node backwards from the tail to the input node
 * using recursion.
 *
 * Input: node {ListNode}
 * Output: {undefined}
 *
 * Example: (1) --> (5) --> (7) --> (10)
 *
 *          10
 *          7
 *          5
 *          1
 */

// Time Complexity: O(N)
// Auxiliary Space Complexity: O(N)
function printBackward(node) {
  if (node === null) {
    return;
  }
  printBackward(node.next);
  console.log(node.value);
}
