/*
 *  Dynamic Programming
 *
 *  Instructions: Dynammic programming takes a lot of practice to recognize as
 *                well as develop algorithms. Thus we will be working on a few
 *                different problems using dynammic programming.
 *
 *                As a reminder, here are the two dynamic programing approaches:
 *
 *      			(1) Overlapping subproblems - Memoization
 *      				  Recursion sometimes call subproblems repeatedly. These repeated
 *                calls lead to inefficient computations and an exponential time
 *                complexity.
 *
 *      			(2) Optimal substructure - Tabulation
 *      					The solution of a larger problem can be solved using
 *      					solutions of its subproblems.
 *
 *
 *  Problem:  Coin Sum
 *
 *            Given an array of coins and a target total, return how many
 *            unique ways there are to use the coins to make up that total.
 *
 *  Input:    coins {Integer Array}, total {Integer}
 *  Output:   {Integer}
 *
 *
 *  Example:  Input:  [1,2,3], 4
 *
 *                    1+1+1+1
 *                    1+3
 *                    1+1+2
 *                    2+2
 *
 *            Output: 4
 *
 *
 *            Input:  [2,5,3,6], 10
 *
 *                    2+3+5
 *                    5+5
 *                    2+3+2+3
 *                    2+2+6
 *                    2+2+2+2+2
 *
 *
 *            Output: 5
 *
 *    Note:   You have an unlimited number of each coin type. All coins in the
 *            coin array will be unique
 *            Order does not matter. Ex: One penny and one nickel to create six
 *            cents is equivalent to one nickel and one penny
 *
 */

// Time Complexity: O(NK)
// Auxiliary Space Complexity: O(N)
// where N refers to the target total, and K refers to the length of the coins
// array
function coinSum(coins, total) {}
