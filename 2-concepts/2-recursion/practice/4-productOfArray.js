productOfArray = (ary) => {
  if (!ary.length) return 1;
  return ary[0] * productOfArray(ary.slice(1));
};
("vin");
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
