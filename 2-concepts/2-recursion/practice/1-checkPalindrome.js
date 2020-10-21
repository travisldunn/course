var isPalindrome = function (str) {
  if (str.length === 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.substr(1, str.length - 2));
};

console.log(isPalindrome("a")); //true
console.log(isPalindrome("motor")); // false
console.log(isPalindrome("rotor")); //true
console.log(isPalindrome("ror")); //true
console.log(isPalindrome("motom")); //true
