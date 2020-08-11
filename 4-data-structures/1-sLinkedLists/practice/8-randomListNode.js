// # Linked Lists - Probability

// #### Prompt

// Given the head node of a linked list with integer values, return a random value
// from that linked list.Note that you must do this in linear runtime with only a
// single pass through the linked list, and also in constant auxiliary space.

// #### Examples:

// ```

// Input:

// (5) -> (3) -> (22) -> (4) -> (71)

// Output:

// If we were to run this one hundred times, we would expect there to be an almost
// even distribution of twenty 5s, twenty 3s, twenty 22s, twenty 4s, and twenty 71s
// returned.
// ```

// #### Input:

// ```
// class ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
// ```

// #### Output
//     `node.value` = `integer`

// #### Constraints:

// ** Time **: `O(N)`

//     ** Space **: `O(1)`

// Only ** one ** pass is allowed through the linked list

// #### Hints:

// How would you do this if you didn't have a constant auxiliary space constraint?

// How would you do this if you were allowed a second pass through the linked list ?

//     What would the answer be if you had a single - element linked list ? Two elements
//         in your linked list ?

// #### Extra Credit

// Use the ListNode class from your homework / target practice to create the linked
// list from above.Can you prove that your solution is evenly random ?

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let head = new ListNode(5);
head.next = new ListNode(3);
head.next.next = new ListNode(22);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(71);

function randomNodeVal(head) {
  let count = 0;
  let result;
  let current = head;

  while (current !== null) {
    count++;
    if (Math.random() < 1 / count) {
      result = current.value;
    }
    current = current.next;
  }

  return result;
}

// console.log(randomNodeVal(head));

function proof(head, rounds) {
  let result = {};
  let current = head;
  while (current !== null) {
    result[current.value] = 0;
    current = current.next;
  }

  while (rounds--) {
    let ex = randomNodeVal(head);
    result[ex]++;
  }

  return result;
}

console.log(proof(head, 100));
// each element of linked list should appear a fifth of the time
