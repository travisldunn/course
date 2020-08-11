// what is the max profit that you can make when buying
// one day and selling on another day

appleStocks = (prices) => {
  let max = prices[1] - prices[0],
    temp;

  for (let i = 2; i < prices.length; i++) {
    temp = prices[i] - prices[i - 1];
    if (temp > temp + max) max = temp;
    else max = Math.max(max, temp + max);
  }

  return max;
};

console.log(appleStocks([10, 7, 5, 8, 11, 9]));

// Returns 6 (buying for $5 and selling for $11)
