// # Dynamic Programming - Best Time to Buy and Sell Stock

// #### Prompt

// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction(ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// #### Examples

// Input: `[7, 1, 5, 3, 6, 4]`
// Output: `5`

// Min buying Price = 1
// Max selling Price = 6
// Max Profit = Max selling Price - Min buying Price = 6 - 1  = 5

// Note: 7 - 1 does not count, because buying price MUST come before selling price.

//     Input: `[7, 6, 4, 3, 1]`
// Output: `0`

// In this case, no transaction is done.Max Profit = 0.

// #### Constraints

// Time Complexity: O(N)
// Space Complexity: O(1)

// #### Hints

// Think of how you would solve the[largest subarray sum problem](http://www.geeksforgeeks.org/largest-sum-contiguous-subarray/).
//     You can use a similar approach here.

//     Say you start with an array for prices that is only one element long ? How do you determine the max profit of that single price ? What if we increase the prices array size to 2 ? to 3 ?

// #### Solution

//     ```python
// from math import inf

// def max_profit(prices):

//   max_profit = 0
//   min_price = inf

//   for i in range(len(prices)):
//     min_price =  min(min_price, prices[i])
//     max_profit = max(max_profit, prices[i] - min_price)

//   return max_profit
// ```
