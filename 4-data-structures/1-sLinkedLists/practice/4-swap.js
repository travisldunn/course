/**
 * Create a method which swaps the first occurance of the locations of two
 * nodes in the linked list.
 *
 * Input: head {ListNode},
 * Input: a {Integer}
 * Input: b {Integer}
 * Output: {ListNode}
 *
 * Example:
 * let head = generateList([1, 5, 7, 10]);
 * head = swap(head, 5, 10);
 *
 *          (1) --> (5) --> (7) --> (10)
 *          Head
 *
 *          (1) --> (10) --> (7) --> (5)
 *          Head
 */

// Time Complexity: O(N)
// Auxiliary Space Complexity: O(1)
function swap(head, a, b) {
  if (!head || a === b) {
    return head;
  }

  function locate(node, target) {
    let prev = null;
    let current = node;
    while (current) {
      if (current.value === target) {
        return [prev, current];
      }
      prev = current;
      current = current.next;
    }
    return [null, null];
  }

  let [prev1, current1] = locate(head, a);
  let [prev2, current2] = locate(head, b);
  if (!current1 || !current2) {
    return head;
  }
  if (prev1) {
    prev1.next = current2;
  }
  if (prev2) {
    prev2.next = current1;
  }
  [current1.next, current2.next] = [current2.next, current1.next];
  if (prev1 === null) {
    return current2;
  }
  if (prev2 === null) {
    return current1;
  }
  return head;
}
