const words = [
  "ptolemaic",
  "retrograde",
  "supplant",
  "undulate",
  "xenoepist",
  "asymptote", // <-- rotates here!
  "babka",
  "banoffee",
  "engender",
  "karpatka",
  "othellolagkage",
];

wordTurn = (arr) => {
  let mid,
    left = 0,
    right = arr.length,
    first = arr[0];

  while (left < right) {
    mid = Math.floor((right - left) / 2);
    if (arr[mid] < arr[mid + 1] && arr[mid] < arr[mid - 1]) return arr[mid];
    else if (arr[mid] < first) left = mid + 1;
    else {
      right = mid - 1;
      first = left;
    }
  }
};

console.log(wordTurn(words));
