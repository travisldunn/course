appleStocks = (prices) => {
  let max = -Infinity,
    current;

  for (let i = 1; i < prices.length; i++) {
    current = prices[i] - prices[i - 1];
    if (current > current + max) max = current;
    else max = Math.max(max, current + max);
  }
  return max;
};

console.log(appleStocks([10, 7, 5, 8, 11, 9]));

// Returns 6 (buying for $5 and selling for $11)
