//  Flatten a nested array

function flatten(arr) {
  let flat = [];
  function traverse(arr) {
    if (!arr.length) return;
    if (typeof arr[0] === "object") traverse(arr[0]);
    else flat.push(arr[0]);
    traverse(arr.slice(1));
  }
  traverse(arr);
  return flat;
}

// flatten = (arr) => {
//   let flat = [];
//   for (let el of arr) {
//     if (typeof el === "object") flat = flat.concat(flatten(el));
//     else flat.push(el);
//   }
//   return flat;
// };

// flatten = (arr, flat = []) => {
//   for (let el of arr) {
//     if (typeof el === "object") flatten(el, flat);
//     else flat.push(el);
//   }
//   return flat;
// };

console.log(flatten([1, [2, 3, [4]], 5, [[6]]])); //  [1, 2, 3, 4, 5, 6]
