// What is operator precedence in JS?
// As per operator precedence , operators with higer precedence ARE EVLUATED FIRST.
// we have BODMAS rule in mathematics. where B stands for Brackets, O stands for Orders, D stands for Division, M stands for Multiplication, A stands for Addition, S stands for Subtraction.

const { difference, unary, some } = require("lodash");

// (brackets,order,divison,multiplication,addition,subtraction)
let a = 6;
let b = 3;
let c = 2;
let reslut = a + b * c + (a - b);
console.log(reslut); // 6+3*2+(6-3)=6+6+ 3=15

// what is difference between unary,binary and ternary operators?
// Unary operators are operators that work on a single operand.
// Binary operators are operators that work on two operands.
// Ternary operators are operators that work on three operands.

// examples
let d = 2;
let e = -d;
console.log(e); // -2
console.log(e++); // -2

let x = 10;
let y = 20;
let z = x + y;
console.log(z); // 30

let resluts = condition ? "yes" : "no";
console.log(resluts); //

// what is Short circuiting in JS?
// Short circuiting evalution stops the excution as soon as the resluts can be determined without evlauting the remaning sub expersions
// In JS, logical operators are short circuited.
// && and || are short circuited operators.
// examples
let reslut1 = false && someFunction();
console.log(reslut1); // false

let reslut2 = true || someFunction();
console.log(reslut2); // true

//What are types of conditions statements in JS?
// if/esle statement, switch statement, ternary operator
// examples
let x1 = 10;
if (x1 > 20) {
  console.log("1");
} else if (x < 20) {
  console.log("2");
} else {
  console.log("3");
} // 2

let y2 = 20;
let z2 = y2 > 20 ? "yes" : "no";
console.log(z2); // no

let a3 = 5;
switch (a3) {
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  case 3:
    console.log("3");
    break;
  default:
    console.log("default");
} // default

// What is the difference between == and === operators?
// == is the equality operator and === is the strict equality operator.
// == is used to compare the values of the variables.
// === is used to compare the values and the types of the variables.
// example
let num1 = 10;
let num2 = "10";
console.log(num1 == num2); //true, here values are same.
console.log(num1 === num2); //false, here values are same but types are different.

console.log(1 == "1"); //true, here values are same.
console.log(ture == 1); //true, here values are same.
console.log(false == 0); //true, here values are same.

// what is the difference between spread and rest operators?
//  The Spread operator(...) is used to exapnd or spread elements from an array or string or objects into inividual elements.
// Uses od Spread Operator:
// 1. Copying an array
// 2. Concatenating arrays/ merging arrays
// passing multiple arguments to a function

// example
let arr = [1, 2, 3];
let arr2 = [...arr];
console.log(arr2); // [1,2,3] copying of an array

const arr3 = [1, 2, 3];
const arra4 = [4, 5, 6];
const arr5 = [...arr3, ...arra4]; // [1,2,3,4,5,6] mergign two arrays

const num = [1, 2, 3, 4, 5];
sum(...num); // 15 passing multiple arguments to a function
function sum(a, b, c, d, e) {
  console.log(a + b + c + d + e);
}
const arr4 = [1, 2, 3, [4, 5]];
const newArr = [...arr4, ...arr4[3]];
console.log(newArr); // [1,2,3,[4,5],4,5] beacuse here we are spreading the array and then spreading the array element.

const arr6 = [1, [2, [3, 4]]];
const newArr1 = [...arr6.flat(2)];
console.log(newArr1); // [1,2,3,4] here we are spreading the array and then using flat method to flatten the array,
// here we are using 2 as an argument to flat method to flatten the array upto 2 levels.

function multiply(multiplier, ...numbers) {
  return numbers.map((number) => number * multiplier);
}
console.log(multiply(2, 1, 2, 3, 4)); //[2,4,6,8]

// Rest Operator
// The Rest operator(...) is used in function parameters to collect all the remaining arguments into an array.
// Uses of Rest Operator:
// 1. Function parameters
// 2. Destructuring
// example
function sum1(...args) {
  return args.reduce((acc, curr) => acc + curr);
}
sum1(1, 2, 3, 4, 5); // 15

const [a1, b1, ...rest] = [1, 2, 3, 4, 5];
console.log(a1); // 1
console.log(b1); // 2
console.log(rest); // [3,4,5]

// examples
function concatenate(separator, ...strings) {
  return strings.join(separator);
}
console.log(concatenate("-", "2024", "07", "31")); // 2024-07-31
