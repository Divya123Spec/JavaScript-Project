// Recursion
// Recursion is a technique for iterating over an operation by having a function call itself
//  repeatedly until it arrives at a result.
// Most loops can be rewritten in a recursive style, and in some functional languages this is the default way to work with list structures.

// example
function countDown(fromNumber) {
  console.log(fromNumber);
  let nextNumber = fromNumber - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}
countDown(3); // 3 2 1 here the function is calling itself until the condition is met

let input = [1, 1, 4, 2, 2, 2, 6, 6, 1];

// how to get below output add duplicates and return the array

// Output: [ 2, 4, 6, 12, 1 ]
const countMap = new Map(); // create a map here count map is a map, new map is created
input.forEach((num) => {
  countMap.set(num, (countMap.get(num) || 0) + 1); // set the value in map, here get the value from map and set the value in map
});
console.log(countMap); // Map { 1 => 3, 4 => 1, 2 => 3, 6 => 2 }

let result = [];
countMap.forEach((count, num) => {
  result.push(num * count); // push the value in result array
});

console.log(result); // [ 2, 4, 6, 12, 1 ]
