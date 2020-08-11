// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
//
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrixSpiral(n) {}

console.log(matrixSpiral(5));

// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.

function fib(n) {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) result.push(result[i - 1] + result[i - 2]);
  return result[n];
}

console.log(fib(4)); // 3

memoize = (fn) => {
  const cache = {};
  return (...args) => {
    if (cache[args]) return cache[args];
    cache[args] = fn(...args);
    return fn(...args);
  };
};

slowFib = (n, m) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const fib = memoize(slowFib);

console.log(fib(15, 3)); // 610
