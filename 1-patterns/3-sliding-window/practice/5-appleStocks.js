// what is the max profit that you can make when buying
// one day and selling on another day

function appleStocks(p) {
  let min = p[0],
    maxP = p[1] - p[0];

  for (let i = 1; i < p.length; i++) {
    min = Math.min(min, p[i]);
    maxP = Math.max(maxP, p[i] - min);
  }
  return maxP;
}

console.log(appleStocks([10, 4, 7, 5, 8, 11, 9, 100])); // 96
