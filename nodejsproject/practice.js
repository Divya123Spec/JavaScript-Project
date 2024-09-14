const example = ({ a, b, c }) => {
  console.log(a, b, c);
};
example(0, 1, 2);

var a = Math.max();
var b = Math.min();
console.log(a);
console.log(b);
// The Math.max() method returns -Infinity by default and the Math.min()
// method returns Infinity value by default when passed without any parameters

const set = new Set();
set.add(5);
console.log("set", set);
set.add("Hello");
console.log("set2", set);
set.add({ name: "Scaler" });
console.log("set3", set);
for (let item of set) {
  console.log(item + 6);
}
// First 2 numbers are added as integers, followed by string concatenation.
// Finally, since both are not of string type, JS
// stringifies both the object and the number and concatenates them.
// When an object is stringified it is read as [object Object] and then concatenated.

var a = true + true + true * 3;
console.log(a);
// In Javascript, true is considered as the number 1 when used in any arithmetic expression,
//  hence the expression evaluates to 5 and divideby, multiplication,substraction,addition.

a = [1, 2, 3, 4, 5];
console.log(a.slice(2, 4));
// The slice() function in Javascript slices an array within the given start and end indexes and then returns the values lying in those ranges.
// The indexing done is 0-based indexing.

var a = 1;
var b = 0;
while (a <= 3) {
  a++;
  b += a * 2;
  console.log(b);
}
// The loop will run 3 times, before meeting the exit condition.
// First value of b will be 2 * 2 = 4, followed by 4 + 3 * 2 = 10, and then value of 10 + 4 * 2 = 18.

var a = "Scaler";
var result = a.substring(2, 4);
console.log(result);
// The substring function in javascript slices a substring out of a given string from the start to end indexes(excluding the end index).
// So the 2nd and 3rd characters are taken here(0-based indexing) and the answer is al.

console.log(NaN === NaN);
// In Javascript, NaN is not considered to be equal to NaN even after using the strict equality operator.

const obj1 = { Name: "Hello", Age: 16 };
const obj2 = { Name: "Hello", Age: 16 };
console.log(obj1 === obj2);
// The strict equality operator compares objects by their references so even though the contents of both objects are the same,
// their references don’t match resulting in false.

// reverse the order of the string
let revString = "Divya";
let reversedString = (revString) => revString.split("").reverse().join("");
let results = reversedString(revString);
console.log("reversedString", results);

// Remove duplicates of array of elements
let array1 = ["1", "1", "3", "4", "6", "7", "9"];
let removeDuplicate = [...new Set(array1)];
console.log(removeDuplicate);

// without using new Set and using index
let uniqueArray = array1.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log("uniqueArray", uniqueArray);

// using reduce how to remove duplicate values from array
let uniqueArray2 = array1.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

//  merge the 2 objects without overwriting existing properties?
let object1 = { name: "Divya", language: "english" };
let object2 = { name: "Chinni", study: "same", languages: "telugu" };

let object3 = { ...object1, ...object2 };
console.log("object3", object3);

// Can you write a function in JavaScript to get the current date in the format “YYYY-MM-DD”?
const currentDate = () => {
  return new Date().toISOString().split("T")[0];
};
console.log("currentDate", currentDate());

// Can you write a function in JavaScript to calculate the cumulative sum of an array?
const cumulativeSum = (arr) =>
  arr.reduce(
    (acc, num) => [...acc, acc.length ? acc[acc.length - 1] + num : num],
    []
  );

//  Can you write a function in JavaScript to split an array into chunks of a specified size?
// Can you write a one-liner in JavaScript to find the longest consecutive sequence of a specific element in an array?
const longestConsecutiveSequence = (arr, element) =>
  Math.max(
    ...arr
      .join("")
      .split(element)
      .map((group) => group.length)
  );

console.log(abc);
var abc = 1;

myVar = 5;
console.log(myVar); // Output: undefined

var myVar;

// console.log(myVar); // Output: 5

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [...arr1];
console.log(arr2); // to sread the array or to copy the elemenst from one to aother we can use

function add(a, ...b) {
  const sum = b.reduce((acc, num) => acc + num, a);
  console.log(sum);
}
add(1, 3, 4);

// function currying
function sum(a) {
  return function (b) {
    const sum = a + b;
    console.log(sum);
  };
}

const addition = sum(1);
const add2 = addition(1);

function multiply(a) {
  return function (b) {
    return a * b;
  };
}
console.log(multiply(7)(4));

function addData(data) {
  let convertToString = "" + data;
  console.log(convertToString, "ghj");
  let converttoArray = convertToString.split("").map((data) => {
    return parseInt(data);
  });
  console.log(converttoArray);
  let finaloutput = converttoArray.reduce((a, b) => a + b);
  if (finaloutput > 10) {
    addData(finaloutput);
  } else {
    console.log(finaloutput);
  }
}

addData(3456);

var x = Math.floor(Math.random());
if (x > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x); // 2
// The Math.floor() function returns the largest integer less than or equal to a given number.
