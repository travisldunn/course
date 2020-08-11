getFirst = (str) => {
  return str.slice(0, 1);
};

getLast = (str) => {
  return str.slice(-1);
};

getMid = (str) => {
  return str.slice(1, -1);
};

var isPalindrome = function (str) {
  if (str.length <= 1) return true;
  if (getFirst(str) !== getLast(str)) return false;
  return isPalindrome(getMid(str));
};

console.log(isPalindrome("a")); //true
console.log(isPalindrome("motor")); // false
console.log(isPalindrome("rotor")); //true
console.log(isPalindrome("ror")); //true
console.log(isPalindrome("motom")); //true

//
//
//

function power(num, pow) {
  if (pow === 0) return 1;
  return num * power(num, pow - 1);
}

// console.log(power(2, 0)); // 1
// console.log(power(2, 2)); // 4
// console.log(power(2, 4)); //16

// 2 * power(2, 2) 4
//         2 * power(2, 1) 2
//                2 * power(2, 0) 1

//
//
//

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(4)); // 24
// console.log(factorial(7)); // 5040

//
//
//

productOfArray = (ary) => {
  if (ary.length === 0) return 1;
  return ary[0] * productOfArray(ary.slice(1));
};

// console.log(productOfArray([1, 2, 3])); // 6
// console.log(productOfArray([1, 2, 3, 10])); // 60

//
//
//

// 1 + 2 + 3 + 4 + 5 + 6 = 21
function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(6)); // 21
// console.log(recursiveRange(10)); // 55

//
//
//

function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

// console.log(fib(4)) // 3
// console.log(fib(10)) // 55
// console.log(fib(28)) // 317811
// console.log(fib(35)) // 9227465

//
//
//

// console.log(isPalindrome("motor"));
// console.log(isPalindrome("mor"));
// console.log(isPalindrome("motom"));
// console.log(isPalindrome("m"));
// console.log(isPalindrome("ror"));

//
//
//

const isOdd = (val) => val % 2 !== 0;

function foundOdd(array, callback) {
  if (!array.length) return false;
  if (callback(array[0])) return true;
  return foundOdd(array.slice(1), callback);
}

// console.log(foundOdd([1, 2, 3, 4, 1], isOdd));
// console.log(foundOdd([1,2,3,4], isOdd)) // true
// console.log(foundOdd([4,6,8,9], isOdd)) // true
// console.log(foundOdd([4,6,8], isOdd)) // false

//
//
//

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
  f: { e: true },
};

nestedEvenSum = (obj) => {
  let evenSum = 0;

  for (let key in obj) {
    if (typeof obj[key] === "number" && obj[key] % 2 === 0) evenSum += obj[key];
    if (typeof obj[key] === "object") evenSum += nestedEvenSum(obj[key]);
  }

  return evenSum;
};

// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10

//
//
//

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

collectStrings = (obj) => {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") arr.push(obj[key]);
    if (typeof obj[key] === "object")
      arr = arr.concat(collectStrings(obj[key]));
  }
  return arr;
};

console.log(collectStrings(obj)); // [ 'foo', 'bar', 'baz' ]
