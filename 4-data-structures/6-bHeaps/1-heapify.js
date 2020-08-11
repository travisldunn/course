// # Binary Heap - Random Array to Maxheap

// #### Prompt:

// Given an array of randomly sorted integers, rearrange the elements so that the
// array is a maxheap.

// What is the Big O runtime of this algorithm ? Please provide your rationale
// as well

// #### Examples:

// ```
// Example 1:
// arr = [3, 6, 4, 2, 7, 5, 1]
// return [7, 6, 5, 2, 3, 4, 1]

// Example 2:
// arr = [1, 2, 3, 4, 5, 6, 7, 8]
// return [8, 5, 7, 4, 1, 6, 3, 2]
// ```

// #### Input:
// `arr` = `Array of Integers`

// #### Output:
// `result` = `Array of Integers`

// #### Constraints

//     ** Time **: `??`

//         ** Space **: `O(1)`

// Where`n` is the length of the`arr` array

// Perform the algorithm in place on the input array, and then return this
// input array

// #### Resources:

// [Binary Heaps](http://eloquentjavascript.net/1st_edition/appendix2.html)

// #### Hints:

//     Refer back to the Minheap implementation from your homework

// When proving the Big O runtime, consider drawing out the binary tree
// representation of a maxheap versus the array representation

// #### Solution:

function convert(arr) {
  function getChild(parent) {
    let child1 = 2 * parent + 1;
    let child2 = 2 * parent + 2;

    if (child1 >= arr.length) {
      return child1;
    } else if (child2 >= arr.length) {
      return child1;
    } else if (arr[child1] > arr[child2]) {
      return child1;
    } else {
      return child2;
    }
  }

  function bubbleDown(parent) {
    let child = getChild(parent);

    while (child < arr.length && arr[parent] < arr[child]) {
      [arr[child], arr[parent]] = [arr[parent], arr[child]];
      parent = child;
      child = getChild(parent);
    }
  }

  let i = arr.length;
  while (i--) {
    bubbleDown(i);
  }

  return arr;
}
