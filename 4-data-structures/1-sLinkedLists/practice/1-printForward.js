/**
 * Create a method which prints the value of each node until the tail
 *
 * Input: node {ListNode}
 * Output: {undefined}
 *
 * Example: (1) --> (5) --> (7) --> (10)
 *
 *          1
 *          5
 *          7
 *          10
 */

// Time Complexity: O(N)
// Auxiliary Space Complexity: O(1)
function printForward(node) {
  let current = node;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}
