// What is Javscript? what is the role of js in web development?
//  Jqavascript is a programming langugae that is used for converting static web pages into the interactive webpages and dyanamic webpages.
// Javascript engine is a program
// that executes javascript code in a web browser. It is a part of a web browser. It is responsible for executing the javascript code.
// Javascript engine is also called as interpreter. It reads the code line by line and executes it.
// in index.html file we have included the script tag and inside the script tag we have written the javascript code.
// example
//  <!DOCTYPE html>
// <html>
//     <head>
//         <title>javascript basics</title>
//     </head>
//     <body>
//         <h1>javascript basics</h1>
//         <script src ="index.js">
//              {/* we can include the external javascript file in the script tag. */}
//             alert("Hello World");
//         </script>
//     </body>
// </html>

// What are client side and server side languages?
// A clinet is a device, application, or software component that requests and consumes services or resources from aserver.
// A server is device,computer,or software application that provides a service, resources,or functions to clinet.

// What is Scope in JS?
// Scope determines where variables are defined and where they can be acessed.
let globalVariable = "global";

function greet() {
  let functionalVariable = "local";
  if (true) {
    let blockVariable = "block";
    console.log("blockVariable", blockVariable);
    console.log("functionalVariable", functionalVariable);
    console.log("globalVariable", globalVariable);
  }
  //   console.log("blockVariable", blockVariable);
  console.log("functionalVariable", functionalVariable);
  console.log("globalVariable", globalVariable);
}
console.log("globalVariable", globalVariable);
greet();

// Examples of Scope
function outerFunction() {
  var outerVar = "I am outside!";

  function innerFunction() {
    var innerVar = "I am inside!";
    console.log(outerVar);
    console.log(innerVar);
  }

  innerFunction();
  //   console.log(innerVar); // ReferenceError: innerVar is not defined
}
outerFunction();

var a = 1;
function testScope() {
  var a = 2;
  if (true) {
    var a = 3;
    console.log(a);
  }
  console.log(a); //3 beacuse var is function scoped and here a is redeclared.
}

testScope();
console.log(a);

// what is type of variable in js,when it is declared without using var,let,const?
// var is the implicit tye of variable in js.
// when we declare a variable without using var,let,const then it is considered as global variable.
if (true) {
  variable = 10;
}
console.log("variable", variable); //10 beacuse implicittype of varaibale is var

// What is hoisting in JS?
// Hoisting is the mechanism where variables and function declarations are moved to the top of their scope before code execution.
// In js, hoisting is applicable only for var and function declarations.
// variable declarations are hoisted but not the initializations.
//example
myfunction();
function myfunction() {
  console.log("Hello World"); // Hello World, beacuse function declaration is hoisted.
}

x = 10;
console.log(x); //10, beacuse variable declaration is hoisted.
var x;

// y = 20;
// console.log(20); //ReferenceError: Cannot access 'y' before initialization beause variable decalred using let keyword
// let y;

console.log(foo()); //2, beacuse function declaration is hoisted.
function foo() {
  return 2;
}

// console.log(bar()); //TypeError: bar is not a function, beacuse variable declaration is hoisted but not the initialization.
// var bar = function () {
//   return 3;
// };

function test() {
  //  console.log(x); //undefined, beacuse variable declaration is hoisted but not the initialization.
  var x = 1;
  console.log(x);
}
test();

// What is JSON?
// JSON stands for JavaScript Object Notation.it is light weight data interchnange format
// JSON consists of key value pairs.
// JSON is language independent.
// example
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// What is the difference between var,let,const?
// var is function scoped,let,const are block scoped.
// var is hoisted,let,const are not hoisted.
// var can be redeclared,let,const cannot be redeclared.
// var can be reassigned,let,const cannot be reassigned.
// const should be initialized at the time of declaration.
// let,const are not hoisted.

// var creates a function scoped variable.
function example() {
  if (true) {
    var x = 10;
    console.log(x); //10
  }
  console.log(x); //10 here x is accessible because var is function scoped.
}

function example1() {
  if (true) {
    let y = 20; //let is block scoped varaible so it is not accessible outside the block.
    console.log(y); //20
  }
  // console.log(y); //ReferenceError: y is not defined, here y is block scoped.
}
// const can be assigned only once and its value cannot be changed
const z = 10;
z = 20;
console.log(z); //TypeError: Assignment to constant variable, const cannot be reassigned.

// What are data types in JS?
// It determines the type of data that can be stored in a variable.
let age = 30; //number
let name = "John"; //string
let isMarried = false; //boolean
let city = null; //null
let per = undefined; //undefined
let person1 = {
  name: "John",
  age: 30,
}; //object

// Types of data types
// Primitive data types and Non-primitive data types
// Primitive data types: number,string,boolean,null,undefined
// Non-primitive data types: object,array,function,Date ,regularexpression
// Primitive data types are immutable and Non-primitive data types are mutable.
// Primitive data tpes hold only a single value and Non-primitive data types hold multiple values and methods also.
// When ever you try to modify the value of primitive data type, it creates a new memory location.
// Primitive data types are simple data types and Non-primitive data types are complex data types.

// what is diff b/w the null and undefined?
// Undefined means a varaible is declared without a value
// When a variable is declared but has not been assign to value, it is automatcally intialszed with undefined.
// Udefined can be used when you don't have any value right now, but you getit after some logic or operation.

// Null means a varaible is declared with null value.
// Null varables are intenatiolly assigned null value.
// Null can be used , when you are sure you don't have any value.
// example
let undefinedVraible;
console.log(undefinedVraible); //undefined

let nullVariable = null;
console.log(nullVariable); //null

// What is typeof operator in JS?
// typeof operator is used to find the type of the variable.
// IT is used to validate the data received from the external sources.
// let num = 10;
let str = "Hello";
let bool = true;
let obj = {
  name: "John",
  age: 30,
};
let arr = [1, 2, 3];
let func = function () {};
console.log(typeof num); //number
console.log(typeof str); //string
console.log(typeof bool); //boolean
console.log(typeof obj); //object
console.log(typeof arr); //array

//What is type coercion in JS?
// Type coercion is the process of converting one data type to another data type.
// Type coercion is the automatic conversion of value from one data type to another data type during certain operations and comaparions.
let string = "10";
let number = 20;
let boolean = true;
let nullVariabl = null;

console.log(string + number); //1020, here number is converted to string and then concatenated.
console.log(number + boolean); //21, here boolean is converted to number and then added.
console.log(string * number); //200, here string is converted to number and then multiplied.
console.log(boolean + nullVariabl); //1, here null is converted to 0 and then added.

// what is webpack? and it use in react
// Webpack is a module bundler that takes the modules with dependencies and
// generates static assets representing those modules.
// Webpack is a static module bundler for modern JavaScript applications.
// Webpack is used to bundle all the javascript files into a single file.
// Webpack is used to bundle all the css files into a single file.
// Webpack is used to bundle all the images into a single file.
// Webpack is used to bundle all the fonts into a single file.
// Webpack is used to bundle all the html files into a single file.
// Webpack is used to bundle all the json files into a single file.

// what are key features of webpack
// Webpack is a static module bundler for modern JavaScript applications.
// code splitting: Webpack allows you to split your code into multiple bundles which can then be loaded on demand or in parallel.
// Loaders: Webpack enables you to preprocess files as you import or “load” them.
// Plugins: Webpack has a rich plugin interface. Most of the features within Webpack itself use this plugin interface.
// dev server: Webpack comes with a built-in development server which can be used to  live reloading your web app.

// what is Temporal dead zone in JS?
// it is a specific time period in execution of javacript code where the variable  declared
// with let and const exists but cannot be accessed until the value is assigned.
console.log(3 - "3"); //
//  when you - both operands will convert into numbers
// when you  + both opernads will convert into strings

// when you create a array or object with const , can you modify that?
//  yes, you cannot reassign the const but you can modify
const numbers = [1, 2, 3, 4, 5];

numbers[0] = 10; // Modify an element in the array
numbers.push(6); // Add a new element to the array

console.log(numbers); // Output: [10, 2, 3, 4, 5, 6]

numbers = [7, 8, 9]; // TypeError: Assignment to constant variable
