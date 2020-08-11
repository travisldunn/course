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

# 261 - Merge K Sorted Arrays

Given an array of sorted arrays of numbers, return the result of merging all those sorted arrays into a single sorted array

```
Input: arrays , Array of Arrays of Ints, [[Int]]
Output: [Int]

```

# Example

```
Input:
[
[1, 10, 11, 15],
[2, 4,  9,  14],
[5, 6,  8,  16],
[3, 7,  12, 13]
]

Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

```


# Constraints
```
Basic:

Time Complexity: O(N K log NK)
Auxiliary Space Complexity: O(NK)

Advanced:

Time Complexity: O(N K log K)
Auxiliary Space Complexity: O(NK)

K = # of Arrays
N = Avg. Length of Arrays

```

Arrays do not necessarily need to be the same length.

Inputs will always be integers, and sorted.

# Hints for Interviewer

Think about where a heap might fit into all this.

There is no guarantee that all the first elements of the different arrays will be the smallest. For example:

```
[
[1, 2, 5]
[3, 4, 6]
[10, 11, 12]
]
```

The first element in the third array is larger than all the elements in the first two.

What if you put all the first elements in a minHeap though?

What would that let you do?

How much space would that mean heap take?

What would be the complexity of removing elements from it?

What about adding to it?

Say you remove the min element from the heap, what takes its spot?

For elements in the heap, you'll need to keep track of which array and what index in that array the element came from.


# Solution


### Basic

Add all the elements from the `K` arrays into a single array, and sort that array.


### Advanced

High level idea:

Toss all the first elements of the array into a minHeap, along with their index, and what array they came from.

Keep removing elements from the top of the minHeap and adding the next element from the array that it came from until all elements have been sorted.



* 1) Create a min heap of size `k`.

* 2) Create a result array.

* 2) Add all of the elements at index `0`, `elementIndex` from the input arrays to the minHeap, along with the index of the array, `arrayIndex` that it came from, and the `value` stored there.

* 3) Remove the top element from the minHeap, and add the `value` to the result array.

* 4) Increment the `elementIndex` and retrieve the item stored there.

* 5) Bubble that item down until it reaches the correct location on the minHeap.

* 6) Repeat steps `3`-`5` until you process all elements in the arrays.

* 6) Once you reach the end of an array, add `Infinity` as the value since that will automatically bubble it down as far as it can go.

* 7) Once the top value of the minHeap is `Infinity`, you know you've processed all the elements and can return the `result` array.


# Resources
[Merge K Sorted Arrays on Geeks for Geeks](https://www.geeksforgeeks.org/merge-k-sorted-arrays/)

# Code

```javascript
// Space: O(NK) (Plus O(K) for the heap)
// Time: O(NK log(K))
function mergeKSorted(arrays) {
  let result = [];

  let minHeap = [];

  arrays.forEach((array, index) => {
    minHeap.push({
      arrayIndex: index,
      elementIndex: 0,
      value: array[0]
    });
  })

  // Heapify the minHeap O(K)
  heapify(minHeap);

  /*
  NOTE: Key Insight

  Each one of the K arrays will have one element in the heap at all times.

  One trick we're using is that once we've added all the elements from a given array
  to the result, we set the value property on its "node" in the heap to Infinity,
  so it bubbles down to the bottom.

  The goal here is to eventually fill the heap up with "nodes" with values of Infinity.

  Once the top node's value is Infinity, we break out of the while loop.
  */

  // Run every element in the arrays through the minHeap         O(NK log(K))

  // While the value at the top is not equal to infinity         O(N K) elements
    // Retrieve the top element in the heap                      O(1)
    // Insert value from top element into result                 O(1)
    // Increment the elementIndex                                O(1)
    // If the elementIndex is greater than the length of the array at arrayIndex:
      // Set the top's value to Infinity                         O(1)
    // Otherwise:
      // Update the value to reflect next element in the array   O(1)

    // Then bubble down the top element                          O(log(K)) for each element

    while(minHeap[0].value !== Infinity) {
      let top = minHeap[0]
      result.push(top.value);
      top.elementIndex += 1;
      if(top.elementIndex >= arrays[top.arrayIndex].length) {
        top.value = Infinity;
      } else {
        top.value = arrays[top.arrayIndex][top.elementIndex];
      }
      bubbleDown(minHeap, 0);
    }

  return result;
}





// Heap Helper functions
// NOTE A lot of these are very similar to the methods used on Djikstra's Algorithm on 07.26

// Simple formula for getting child indices
function getChildIndices(index) {
  return [(2 * index) + 1, (2 * index) + 2];
}

// Returns the index of the smaller child, or undefined if there are no children
function findMinChildIndex(minHeap, leftIndex, rightIndex) {
  let minChildIndex;
  let leftChild = minHeap[leftIndex];
  let rightChild = minHeap[rightIndex];

  if(leftChild !== undefined) {
    if(rightChild === undefined) {
      minChildIndex = leftIndex;
    } else {
      minChildIndex = rightChild.value < leftChild.value ? rightIndex : leftIndex;
    }
  }
  return minChildIndex;
}

// Takes in an index since we want to use it for heapify
// When removing the top, just pass in index 0

function bubbleDown(minHeap, index) {
  let currentIndex = index;
  let current = minHeap[currentIndex];
  let [leftIndex, rightIndex] = getChildIndices(currentIndex);
  let minChildIndex = findMinChildIndex(minHeap, leftIndex, rightIndex);
  let minChild = minChildIndex === undefined ? undefined : minHeap[minChildIndex];

  while(minChild !== undefined && current.value > minChild.value) {
    [minHeap[currentIndex], minHeap[minChildIndex]] = [minHeap[minChildIndex], minHeap[currentIndex]];

    currentIndex = minChildIndex;

    [leftIndex, rightIndex] = getChildIndices(currentIndex);

    minChildIndex = findMinChildIndex(minHeap, leftIndex, rightIndex);

    minChild = minChildIndex === undefined ? undefined : minHeap[minChildIndex];
  }
}

// Just calls bubble down for every element in the heap, starting from the back
function heapify(minHeap) {
  for(let i = minHeap.length - 1; i >= 0; i--) {
    bubbleDown(minHeap, i);
  }
}



let arrs = [
[5, 6,  8,  16],
[3, 7,  12, 13],
[1, 10, 11, 15],
[2, 4,  9,  14],
]

console.log(mergeKSorted(arrs))

```
