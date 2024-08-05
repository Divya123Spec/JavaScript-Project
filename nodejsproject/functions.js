const { functions, difference } = require("lodash");

// 1.What are functions? What are the types of functions in JavaScript?
// Functions are a block of code that can be defined once and executed multiple times.
// A function is reusable block of code that perfoms  a specific task.
function sum(a, b) {
  // sum is function name, a and b are parameters
  return a + b;
}
resluts = sum(5, 10); // arugment list 5, 10 and sum is function call.

// Types of functions in JavaScript:
// 1. Named function
// 2.Anonymous function
// 3.function expression
// 4. Arrow function
// 5. IIFE (Immediately Invoked Function Expression)
// 6.Callback function
// 7.Higher order function
// 8. Recursive function
// 9. Generator function
// 10. Async function

//1. Named function
// Name functions are defined using the function keyword followed by the function name.
// Use name function when you want to call the function multiple times.
// when you have big and complex logics.
// when you want to resue one function at multple places
function sum(a, b) {
  return a + b;
} // sum is function name

// 2.Anonymous function
// Anonymous functions are functions that are not named.And cannot be reffered  by its name.
// anaonymous funtcions for small logics.
// when you want to use function only once.
const sum = function (a, b) {
  return a + b;
}; // here sum is variable name not the function name.

// what is function expression?
// A function expression is a function that is assigned to a variable.
// A function expression  is away to define a function by assigning it to variable.

// What are arrow functions? what is it use?
// Arrow functions are a new way to write function expressions in JavaScript.
// Arrow functions are more concise way of writing function expressions.
// syntax:
// const functionName = (parameters) => {function body}
const add = (a, b) => a + b;
console.log(add(5, 10)); // 15
// Arrow functions , also known as fat arraow functions, is a simpler and shorter way for defining functions in javascript.

// What are callbacks functions? what is it use?
// A call back function is afunction that is passed as an argument to another function.
// A callback function is executed after the function it was passed to has completed.
//  example
function display(x, y, operation) {
  // here display function which is revieving callback function is higher order function
  // here operation is callback function
  var reslut = operation(x, y); //here operation is callback function
  console.log(reslut);
}
display(5, 10, add); // 15

// What are higher order functions? what is it use?
//  A higer order function is a function that takes one or more functions a s arguments(call back functions)
// or retrun a function as  result.
// example
function hof(func) {
  // here hof is higher order function which is taking function as argument
  func(); // here func is callback function
}
hof(SayHello); // passing function as argument
function SayHello() {
  // callback function
  console.log("Hello");
}

// example for retrun a function as result
function createAdder(number) {
  // higher order function
  return function (x) {
    // retruning function as result
    return x + number;
  };
}
const addFive = createAdder(5); // here addFive is function which is returned by createAdder function
console.log(addFive(10)); // 15

//
// what is difference b/w arguments and parameters?
// Parameters are the placeholders defined in the function delaration.
// Argumrnts are the actual values that are passed to the function when it is invoked or called.
// example
function add(a, b) {
  // here a and b are parameters
  console.log(a + b); // here a and b are parameters
}
add(5, 10); // here 5 and 10 are arguments

// How many ways can you pass arugments to function?
// 1. postional arguments
// 2. Named arguments
// 3.arguments Object

// 1. postional arguments
// In positional arguments, the order of the arguments passed to the function matters.
function add(a, b) {
  console.log(a + b);
}
add(5, 10); // 5 is assigned to a and 10 is assigned to b

// 2. Named arguments
// In named arguments, the order of the arguments passed to the function does not matter.
var person = {
  name: "Happy",
  age: 25,
};
function greet(person) {
  console.log(perosn.name + "" + person.age);
}
greet(person); // Happy 25 here instead of passing in order we are passing as object

// 3.arguments Object
// The arguments object is an array-like object that contains all the arguments passed to the function.
function sum() {
  console.log(arguments[0] + arguments[1]); // here we are accessing arguments using arguments object
}
sum(5, 10); // 15 here we are not passing any arguments to function but still we are able to access the arguments using arguments object.

// What is default parameters?
// Default parameters allow you to specify default values for function parameters.
// If no value is passed for the parameter, the default value is used.
// EXAMPLE
function greet(name = "Happy") {
  console.log("Hello" + name); // here name is defulated to Happy but when you pass any value it will take that value , defulat value is superseeded by the value passed.
}
greet(); // Hello Happy
greet("John"); // Hello John

// what is the use of event handling in JavaScript?
// Event handling is a way of responding to user actions on a web page.
// Event handling is used to create interactive web pages.
//  The add event listener() method is used to attach an event handler to an element.
// EXAMPLE
document.getElementById("btn").addEventListener("click", function () {
  console.log("Button clicked");
});

// What is first class function?
//  A programming language is said to have First-class functions id functions in that language are treated like other variables

//  Functions treated like variables

//  Functions can be assigned to variables
//  Functions can be passed as arguments to other functions
//  Functions can be returned from other functions

// example
const add = function (a, b) {
  return a + b;
};
const result = add(5, 10);
console.log(result); // 15 here add is variable which is assigned to function

function double(number) {
  return number * 2;
}
function perfomOperation(double, number) {
  return double(number);
}
console.log(performOperation(double, 5)); // 10 here double is function which is passed as argument to performOperation function.

function createSimpleFunction() {
  return function () {
    console.log("Simple function"); // here we are returning function as result
  };
}
const simpleFunction = createSimpleFunction();
simpleFunction(); // Simple function here we are returning function as result

// What are Pure and Impure functions?
// A pure function is a function that always produces the same output for the same input.
// A pure function does not produce any side effects.
// cannot modify the state of the application.
// example for pure function
function add(a, b) {
  return a + b;
}
console.log(add(5, 10)); // 15

// An impure function,can produce different outputs for same imput
// An impure function can produce side effects.
// can modify the state of the application.
// example for impure function
let counter = 0; // here counter is global variable and it is modifying the state of the application
function increment() {
  counter++; // every time we are incrementing the counter
}
console.log(increment()); // 1
console.log(increment()); // 2 // here we are getting different output for same input

// What is function currying?
// Currying in javascript transforms a function with multiple arguments into a nested series of functions, each taling a single argumnent.
// Advantages of currying : 1. Code reusability 2. Partial application, For big complex functions we can break down into smaller functions.
// EXAMPLE
function multiply(a, b) {
  return a * b;
}
console.log(multiply(5, 10)); // 50
// using currying
function curriedMultiply(a) {
  return function (b) {
    return a * b;
  };
}
const double = curriedMultiply(2);
console.log(double(5)); // 10
const triple = curriedMultiply(3);
console.log(triple(5)); // 15

// What are call , bind and apply methods in JavaScript?

// 1. call method
// The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument (parameter).
// example
const person = {
  name: "Happy",
  age: 25,
};
function greet() {
  console.log("Hello" + this.name);
}
greet.call(person); // Hello Happy here we are calling greet function with person object as argument using call method.

// 2. apply method
// The apply() method is similar to the call() method.
// The difference is that the call() method takes arguments separately, while the apply() method takes arguments as an array.
// example

greet.apply(person, ["hello"]); // Hello Happy , here we are passing arguments as array using apply method.

// 3. bind method
// The bind() method is used to create a new function that, when called,
//  has its this keyword set to the provided value.
// bind method does not call the function, it only returns the function with the this value set.
// example
const greetPerson = greet.bind(person);
greetPerson("greeting"); // Hello Happy here we are binding person object to greet function.
