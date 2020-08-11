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

# 209 - Stack with a Queue

Implement a `Stack` class using only a single `Queue` instance. The `Stack` should have the following methods:

`push`: add an item to the top of the stack

`pop`: remove an item from the top of the stack

```
Input:     N/A
Output:    Queue Class   
```

# Example

```javascript
push(1)
push(2)
push(3)
pop() //=> 3
```

# Constraints

```
push: Time Complexity: O(1), Auxiliary Space Complexity: O(1)

pop: Time Complexity: O(N), Auxiliary Space Complexity: O(1)

```

* 1) Assume the `Stack` will only take integer values
* 2) May use only one instance of the `Queue` class
* 3) `Queue` class has the following methods:

`enqueue`: add an item to the end of the `Queue`

`dequeue`: remove an item from the front of the `Queue`

# Notes

Helpful to diagram out the  `Stack` you're building a separate diagram for the `Queue` under the hood.

Think about what should happen in both diagrams after perform a `push` or `pop`

What do you expect your `Stack` to return?

# Code

```javascript
// Assume that we have a Queue class imported
const Queue = require('Queue');

class Stack {
  constructor() {
    this.storage = new Queue();
    this.size = 0;
  }

  push(item) {
    this.storage.enqueue(item);
    this.size++;  
  }

  pop() {
    let i = 0;
    while (i < this.size - 1) {
      let transfer = this.storage.dequeue();
      this.storage.enqueue(transfer);
      i++;
    }    
    this.size--;
    return this.storage.dequeue();
  }
}
```


# Resources

[Stack Using a Single Queue on Geeks for Geeks](https://www.geeksforgeeks.org/implement-a-stack-using-single-queue/)
