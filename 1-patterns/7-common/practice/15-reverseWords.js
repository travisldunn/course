stringReversal = (ary) => {
  let left = 0,
    right = ary.length - 1,
    temp;

  while (left < right) {
    temp = ary[right];
    ary[right] = ary[left];
    ary[left] = temp;
    left++;
    right--;
  }
  return ary;
};

// console.log(stringReversal(["a", "p", "p", "l", "e"]));

const message = [
  "c",
  "a",
  "k",
  "e",
  " ",
  "p",
  "o",
  "u",
  "n",
  "d",
  " ",
  "s",
  "t",
  "e",
  "a",
  "l",
];

// reverseWords = (message) => {
//   return message.join("").split(" ").reverse().join(" ").split("");
// };

reverseLetters = (left = 0, right = message.length - 1) => {
  let current;
  while (left < right) {
    current = message[left];
    message[left] = message[right];
    message[right] = current;
    left++;
    right--;
  }
};

reverseWords = () => {
  reverseLetters();

  let start = 0,
    end = 0;

  while (end < message.length) {
    if (message[end] == " ") {
      reverseLetters(start, end - 1);
      start = end + 1;
    }
    end++;
  }

  reverseLetters(start, end - 1);
};

reverseWords(message);
console.log(message);
