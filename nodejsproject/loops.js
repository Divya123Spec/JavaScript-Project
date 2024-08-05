//  what is loop? What are the types of loops in JavaScript?
// A loop is a programming way to run the code repeatedly. Until a certain condition is met.
// There are four types of loops in JavaScript:
// 1. for loop
// 2. while loop
// 3. do-while loop
// 4. for-in loop

const { difference } = require("lodash");
const { example } = require("yargs");

// 1. for loop
// The for loop is used when you know the number of iterations you want to run the loop.
// For loop allows to iterarte a block of code multiple times.
// Syntax:
// for (initialization; condition; increment/decrement) {}
// Example:
for (let i = 0; i < 5; i++) {
  console.log(i); //0,1,2,3,4
}

// 2. while loop
// While loop executes block of code while certain condition is ture.
// while is better when only condition, no initialization and increment/decrement.
// Syntax:
// while (condition) {}
// Example:
let i = 0;
while (i < 5) {
  console.log(i); //0,1,2,3,4
}

// 3. do-while loop
// The do while loop is similar to the while loop, but  the block of code executed at least once, even if the condition is false,
// because the code block is executed before the condition is tested.
// Syntax:
// do {} while(condition);
// Example:
let a = 0;
do {
  console.log(a);
  a++; //0
} while (a > 0);

// What is the difference between while and do-while loop?
// BREAK
//The break statement is used to terminate the loop.
// example
for (let i = 0; i < 5; i++) {
  if (i == 3) {
    break;
  }
  console.log("i: ", i); //0,1,2 , if i ==3 then break the loop.
}

// CONTINUE
// The contuine  statement is used to skip the current iteration of the loop and move on the next iteration.
// example
for (let i = 0; i < 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log("i: ", i); //0,1,2,4
}

// 4. for-of loop
// for loop is slightly more complex having more lines of code whereas for-of loop is much simpler and easy to read.
// it allows you to accsess each value directly, without having to use an index
// example
const arr = [11, 22, 33, 44, 55];
for (let val of arr) {
  console.log(val); //11,22,33,44,55
}
// for-in loop
//for in loop uses to itreate over the porperties of an object.
// it allows you to iterate over the keys of an object and access the values asscoitaed with those keys.
// example
const person = {
  name: "John",
  age: 30,
};
for (let key in person) {
  console.log(key); //name, age
  console.log(person[key]); //John, 30
}

// for Each loop
// The forEach loop is used to iterate over the elements of an array.
// for each()is a method on arrays or object that allows you to iterate over eachc element of the aaray and perfom some action on each element.

// example
const colors = ["red", "green", "blue"];
colors.forEach((color) => {
  console.log(color); //red, green, blue
});

// difference b/w for each and for in ,for of
// for each is used to iterate over the elements of an array.
// for in is used to iterate over the properties of an object.
// for of is used to iterate over the values of an iterable object.
//stytax is different for each loop.no need to use index in for each loop.

// when to use for... of loop and when to use for... in loop?
//for..of loop is suitable when you need more control over the loop, such as uisng break satements or continue statemnet inside.
// for..in loop is suitable when you need to iterate over the properties of an object.
// forEach method iterate over each element of the array and perform some action on each element.

// examples
const funcs = [];
for (var x = 0; x < 3; x++) {
  funcs.push(function () {
    console.log(x); // 3,3,3 , here The loop uses var for the variable i, which is function-scoped. By the time the functions are called, i has already been incremented to 3. Therefore, each function logs the final value of i, which is 3
  });
}
funcs.forEach((func) => func());

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (const key in obj) {
  console.log(key, obj[key]); // a 1, b 2, c 3
}

const numbers = [1, 2, 3, 4, 5];
let y = 0;
while (y < numbers.length) {
  console.log(numbers[y]); //1,2 numbers.pop() removes the last element of the array in each iteration.when y is 2 , the array length is 3, so the last two elements are removed from the array.
  numbers.pop();
  y++;
}

let count = 0;
do {
  count++;
} while (count < 5);
console.log(count); //5 , the do-while loop runs the block of code once, even if the condition is false. In this case, the condition count < 5 is false, but the block of code is executed once before the condition is checked.

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === j) continue;
    console.log(`i=${i}, j=${j}`); // i=0, j=1, i=0, j=2, i=1, j=0, i=1, j=2, i=2, j=0, i=2, j=1
  }
}

const arr1 = [];
for (let i = 0; i < 3; i++) {
  arr1.push(function () {
    console.log(i); // 0,1,2 , The loop uses let for the variable i, which is block-scoped. Each function captures the value of i at the time it was created.
  });
}
arr1.forEach((fn) => fn());

let sum = 0;
for (let i = 1; i <= 10; i++) {
  if (i > 5) break;
  sum += i;
}
console.log(sum); //15 , The loop runs from 1 to 10. When i is greater than 5, the break statement is executed, which terminates the loop.

const items = [
  { name: "item1", quantity: 10 },
  { name: "item2", quantity: 5 },
  { name: "item3", quantity: 8 },
];
let totalQuantity = 0;
for (let i = 0; i < items.length; i++) {
  totalQuantity += items[i].quantity;
}
console.log(totalQuantity); //23 , The loop iterates over the items array and adds the quantity of each item to the totalQuantity variable.
