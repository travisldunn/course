// # Unique Binary Search Trees

// Given`n`, how many structurally unique BSTs(binary search trees) that store values`1` through`n` ?
//     ```
// Input: {Integer}
// Output: {Integer}
// ```
// # Example
//     ```
// Input: 3

// 1        3     2     1          3
//  \      /     / \     \        /
//   3    2     1   3     2      1
//  /    /                 \      \
// 2    1                   3      2

// Output: 5
// ```
// # Constraints
//     ```
// Time Complexity:
// Intermediate: O(N^2); Advanced: O(N)

// Auxiliary Space Complexity:
// Intermediate: O(N); Advanced: O(1)
// ```

// # Solution

// Intermediate Solution:

// * 1) Create an array that is`n + 1` elements long.

// * 2) Set the zeroth and first value in the array to be`1`.

// * 3) Create an outer loop with an iterator`i` that represents the root from`2` to`n + 1`.

// * 4) Create an inner loop with another iterator`j`, that represents the number of unique binary
// search trees formed from the left and right subtrees, with respect to root`i`.

// * 5) Calculate each value in the ith index of the array as the product of having`j - 1` nodes(left
// subtree) and`i - j` nodes(right subtree).With each iteration of`j`, be sure to add the new
//     product to the value.

// * 6) Return the value at the nth index of the array.

// # Resources

// [Intermediate Solution on Leetcode](https://discuss.leetcode.com/topic/5673/dp-problem-10-lines-with-comments)

//     [Advanced Solution on Leetcode](https://discuss.leetcode.com/topic/19670/python-solutions-dp-catalan-number)

//         # Python Solution

// # Intermediate (using dynamic programming):
// def unique_bst(n):
// num_of_bst = [0] * (n + 1)
// num_of_bst[0] = num_of_bst[1] = 1

// for i in range(2, n + 1):
//     for i in range(1, i + 1):
//         num_of_bst[i] += num_of_bst[j ­ 1] * num_of_bst[i ­ j]

// return num_of_bst[n]

// # Advanced(using the Catalan formula):
// def unique_bst(n):
// ans = math.factorial(2 * n) / (math.factorial(n) * math.factorial(n + 1))
// return ans
