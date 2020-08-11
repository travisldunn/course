# Tell Me About Yourself

Should take one minute; minute and a half at most

##### Prompt

Say: "Tell me about yourself"

##### Do you hear these things?

1. Who the interviewee is (interviewee's one liner)

2. How the interviewee became who they are (short statement about why they became a software engineer with a specific story)

3. Their Pitch (why this company). This has 2 sub-parts and includes:

  - Why they are qualified - Did they share a couple
  **specific** highlights about their applicable expertise

  - Why this company - Did they share **specific** reasons
  why they are interested in the company/position
  (showcasing aligned values/mission) and how they plan to
  add value to the team, product, service, mission, etc

# 210 - Queue with Two Stacks

Implement a `Queue` class using two `stacks`. The `Queue` should have the following methods:

`enqueue`: add an item to the end of the collection

`dequeue`: remove an item from the beginning of the collection

```
Input: 		N/A
Output: 	Queue Class
```

# Example

```javascript
enqueue(1)
enqueue(2)
enqueue(3)
dequeue() // => 1
```
# Constraints
```
enqueue:   Time Complexity: O(1),	Auxiliary Space Complexity: O(1)
dequeue:   Time Complexity: O(N),	Auxiliary Space Complexity: O(1)
```

* 1) May not use other data structures other than the two `Stack` instances that are given
* 2) Assume the `Queue` will only take integer values
* 4) `Stack` class has the following methods:

	`push`: add an item to the end of the collection

	`pop`: remove an from the end of the collection

	`size`: return the number of items in the stack

# Solution

* 1) Create two `stacks` named `inbox` and `outbox`
* 2) For the `enqueue` method, `push` the value into the `inbox`
* 3) For the `dequeue` method, check the to see if the `outbox` contains items
* 4) If the `outbox` contains items, `pop` from the `outbox` and return its value
* 5) Otherwise for each item in the `inbox`, `pop` it out and `push` it into the `outbox`, then perform Step 4.

# Code

```javascript
// Assume that we have a Stack class imported
const Stack = require('Stack');

class Queue {
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }

  enqueue(item) {
    this.inbox.push(item);  
  }

  dequeue() {
    if (this.outbox.size() > 0) {
      return this.outbox.pop();
    }

    while (this.inbox.size() > 0) {
      let transfer = this.inbox.pop();
      this.outbox.push(transfer);
    }
    return this.outbox.pop();
  }
}

```

# Notes

Extremely helpful to diagram out the two stacks from the beginning.

Helpful to diagram out the  `Queue` you're building a separate diagram for the two `Stacks` under the hood.

Think about what should happen in both diagrams after perform a `enqueue` or `dequeue`

What do you expect your `Queue` to return?

# Resources

[Queue Using Two Stack on Geeks for Geeks](http://www.geeksforgeeks.org/queue-using-stacks/)
