// Es6 features
// 1.let and const
// 2.Arrow functions
// 3.Template literals
// 4.Default parameters
// 5.Rest parameters and spread operator
// 6.Destructuring assignment
// 7.Classes
// 8.Modules
// 9.Promises
// 10.Async/Await , MAP,set, weekmap, weekset
// 11.Iterators and generators

// difference between  map and set
// Set is a collection of unique values. Map is a collection of key-value pairs where each key is unique.
// Map is iterable while Set is not.
// Map has a size property while Set has a size() method.

// Pass by value and pass by reference
// Pass by value: When we pass a primitive data type to a function, it is passed by value.
// Pass by reference: When we pass datatypes such as object, array, or function to a function, it is passed by reference.

// what is difference  between for in and for of
// for in is used to iterate over the enumerable properties of an object.
// it can be used with objects and arrays.
// example
let obj = { a: 1, b: 2, c: 3 };
for (let prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}
// for of is used to iterate over the values of an iterable object like an array, string, map, set, etc.
// example
let arr = [1, 2, 3];
for (let val of arr) {
  console.log(val);
}
// Key Differences
// for...in: Iterates over the keys (or properties) of an object.
// for...of: Iterates over the values of an iterable object (like arrays, strings, etc.)
