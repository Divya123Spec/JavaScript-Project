// What are arrays in Js? How to get ,add & remove elements from arrays?
// An array is a datatype that allows you to store the multiple values in asingle variable.
// Arrays are used to store the structured data.

const { difference, spread } = require("lodash");

// example
let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); // apple

// ArrayMethods
// Get - indexof(),find(),slice(),fliter()
// Add - push(),concat(),unshift()
// remove - pop(),splice(),shift()
//Modify - map(),foreach()
// Others - sort(),reverse(),join(),reduce(),includes(),every(),some(),sort(),length()

// what is the indexOf() method of an Array in JavaScript?
// IndexOf()method gets the index of a specified element in the array
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
const array = [1, 2, 3, 4, 5];
console.log(array.indexOf(2)); //1 ,here to get indexOf of any array of element we use the IndexOf() method.

// GET elements from an array
// what is difference between find() ,fliter() and slice() method of an array?(get methods of an array)
// Find()
// the find method get the first element that satisfies the condition.
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.
const array1 = [1, 2, 3, 4, 5];
const found = array1.find((num) => num % 2 === 0);
console.log(found); //2

// Filter()
// The filter methods retruns the all the elements which satisfy the condition.
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const flitered = array1.fliter((num) => num % 2 == -0);
console.log("flitered", flitered); //[2,4]

// Slice()
// slice methos is used to get a subset of the array from start index to end index(end not included).
// The slice() method returns a shallow copy of a portion of an array into a new array object
// selected from begin to end (end not included) where begin and end represent the index of items in that array.
// end index is not include
const sliced = array1.slice(1, 3);
console.log("sliced", sliced); //[2,3]

// ADD elements to an array
// What is the difference between push(),concat() and unshift() method of an array?(Add methods of an array)
// push()
// The push method is used to add the elements into exissting array,
// it adds the elmements at the end of the array.
array1.push(6, 7);
console.log(array1); //[1,2,3,4,5,6,7]

// concat()
// Contat() method will create the new array and will not modify the original array.
// The concat() method is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.
let array2 = [8, 9];
let newArray = array1.concat(array2);
console.log(newArray); //[1,2,3,4,5,6,7,8,9]

// unshift()
// The unshift() method is used to add the elements into the existing array,
// it adds the elements at the start of the array.
array1.unshift(0);
console.log(array1); //[0,1,2,3,4,5,6,7]

// Remove elements from an array
// What is the difference between pop(),splice() and shift() method of an array?(Remove methods of an array)

// pop()
// The pop method is used to remove the last element from the array.
let poped = array1.pop();
console.log(poped); //7 here it will remove the last element from the array
console.log(array1); //[0,1,2,3,4,5,6]

// Shift()
// The shift() method is used to remove the first element from the array.
let shifted = array1.shift();
console.log(shifted); //0 here it will remove the first element from the array
console.log(array1); //[1,2,3,4,5,6]

// splice()
// The splice() method is used to add ,remove or replace the elements in an array.
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// Splice methods takes 3 arugemnts 1st is start index, 2nd is number of elements to remove, 3rd is elements to add.
// splice method creates the new array and modifies the original array.
let spliced = array1.splice(2, 2);
console.log(spliced); //[3,4] here it will remove the 2 elements from the index 2
console.log(array1); //[1,2,5,6]
let spliced1 = array1.splice(2, 0, 3, 4);
console.log(array1); //[1,2,3,4,5,6] here it will add the 2 elements from the index 2

// difference between slice() and splice() method of an array
// slice methods is to get the elements from an array from the start index to an end endex(end not encluded)
// splice method is used to add, remove or replace the elements in an array.

// what is difference between map() and foreach() method of an array?
// map()
// The map() method is used when you want to modify each element of an array and create a new array with modified values
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const array3 = [1, 2, 3, 4, 5];
const mapped = array3.map((num) => num * 2);
console.log(mapped); //[2,4,6,8,10] // map maethod will retrun the new array with modified values.

// foreach()
// The forEach method is used when you want to perfom some opertaion on each element of an array without creating an new array.
// The forEach() method executes a provided function once for each array element.
const array4 = [1, 2, 3, 4, 5];
array.forEach((num) => console.log(num * 2)); //2,4,6,8,10 //foreach method will not return the new array.

// how to sort and reverse an array in javascript?
// sort()
// The sort() method is used to sort the elements of an array in ascending order.
// The sort() method sorts the elements of an array in place and returns the sorted array.
const array5 = [a, g, c, o, n, t];
console.log(array5.sort()); // [a,c,g,n,o,t]

// sorting will work differently with the numbers
const array6 = [1, 10, 2, 5, 4];
console.log("sort", array6.sort()); //[1,10,2,4,5] // it will not sort the numbers in ascending order.
// to get the correct sorting order we can use the compare function
array6.sort((a, b) => a - b);
console.log("sort", array6); //[1,2,4,5,10] it will sort the numbers in ascending order.

// reverse()
// The reverse() method is used to reverse the elements of an array.
// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
console.log(array6.reverse()); //[10,5,4,2,1]

// What is array destructing in javascript?
// Array destructuring is a way to unpack the values from an array and assign them to individual variables in a single statement.
// Array destrcuturing is introcuded in ES6.
const fruits1 = ["apple", "banana", "mango"];
const [first, second, third] = fruits1;
console.log(first); //apple
console.log(second); //banana
console.log(third); //mango

// Wat are array like objects in Js?
// Array like objects are the objects that have indexed elements and a length property, similar to arrays.
// but they may not have all methods of arrays like push(),pop() etc.

// types od array like objects
// 1. arguments object
// 2. Strings
// 3.HTML collections

// Strings
const str = "hello";
console.log(str[0]); //h
console.log(str.length); //5 here string is array like object.

// Arugement object
function sum() {
  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments[0]);
}
sum(1, 2, 3); // [1,2,3] 3 1

// HTML collections
var boxes = docment.getElementByClassName("box");
console.log(boxes[0]); // accesing the first element of the box
console.log(boxes.length); // getting the length of the box.

// How to convert an array like object to an array in javascript?
var arraylike = { 0: "apple", 1: "banana", 2: "mango", length: 3 };

// using Array.from()
var arr = Array.from(arraylike);
console.log(arr); //["apple","banana","mango"]

// using spread operator
var arr2 = [...arraylike];
console.log(arr2); //["apple","banana","mango"]

// using Array.prototype.slice.call
var arr3 = Array.prototype.slice.call(arraylike);
console.log(arr3); //["apple","banana","mango"]

// some() method of an array
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false.
const array9 = [1, 2, 3, 4, 5];
const hasEven = array9.some((num) => num % 2 === 0);
console.log(hasEven); //true

// every() method of an array
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// It returns a Boolean value.
const array10 = [1, 2, 3, 4, 5];
const allEven = array10.every((num) => num % 2 === 0);
console.log(allEven); //false

// flat() method of an array
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const array11 = [1, [2, 3], [4, [5, 6]]];
const flat = array11.flat(3);
console.log(flat); //[1,2,3,4,5,6]

// Examples on arrays
// 1. Write a program to find the sum of all elements of an array?
const array7 = [1, 2, 3, 4, 5];
const sum = array7.reduce((acc, curr) => acc + curr, 0);
console.log(sum); //15

// 2. Write a program to find the largest element of an array?
const array8 = [1, 2, 3, 4, 5];
const largest = array8.reduce((acc, curr) => (acc > curr ? acc : curr));
console.log(largest); //5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = numbers
  .map((num) => num * 2) // [2, 4, 6, 8, 10, 12, 14, 16, 18]
  .filter((num) => num > 10) // [12, 14, 16, 18]
  .sort((a, b) => b - a); // [18, 16, 14, 12]
console.log(result); //  [18, 16, 14, 12]

const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const result2 = arrays.reduce((acc, curr) => acc.concat(curr), []);
console.log(result2); //[1,2,3,4,5,6] it flattens the array of arrays into a single array by concatenating each sub-array into the accumulator.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];
const names = people
  .filter((person) => person.age > 30)
  .map((person) => person.name)
  .sort();
console.log(names); // ['Charlie', 'David'] it filters the people who are older than 30, then maps the names of those people, and finally sorts the names alphabetically.

const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];
const result3 = data
  .flatMap((item) => item.values)
  .reduce((acc, value) => acc + value, 0);
console.log(result3); //45 it flattens the array of objects into a single array of values, and then calculates the sum of all values.

const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 6, 7);
console.log(arr); //[1,2,6,7,4,5,6,7] it removes one element at index 2 and adds two elements (6 and 7) in its place.
const result4 = arr.slice(1, 4);
console.log(result4); //[2,6,7] it extracts a portion of the array from index 1 to 4 (end index not included).

const items = [
  { name: "Apple", quantity: 10 },
  { name: "Banana", quantity: 0 },
  { name: "Cherry", quantity: 5 },
];
const hasOutOfStock = items.some((item) => item.quantity === 0);
console.log(hasOutOfStock); //true it checks if any item is out of stock (quantity is 0).

const numbe = [1, 2, 3, 4];
const doubled = numbe.map((num) => num * 2);
doubled.forEach((num) => console.log(num)); //2,4,6,8 it doubles each number in the array and then logs the doubled numbers.

let x = false;
let y = "0";
let z = 0;
console.log(x == y); //true
console.log(x == z); //true

let x1 = "5";
let y1 = 2;
console.log(x1 + y1); //52
console.log(x1 - y1);

let x2 = "hello";
let y2 = new String("hello");
console.log(x2 == y2); //true
console.log(x2 === y2); //false

let x3 = true;
let y3 = false;
let z2 = x3 + y3 && x3 * y3;
console.log(z2); //0

// useeffect
// immv
// rest spread
// reverse string

// imediate invoke function
let greeting = "Hellow World"(function () {
  console.log("greetin", greeting);
})();
