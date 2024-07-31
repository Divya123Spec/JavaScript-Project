// Closures
// A clousure is a function having access to the parent scope, even after the parent function has closed.
// A clousure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// In other words, a clousure gives you access to an outer function's scope from an inner function.
// examples of closures
function outerFunction(name) {
  function innerfunction() {
    console.log("innerfunction", name);
  }
  innerfunction();
}
outerFunction("Divya");

function createCounter() {
  let counter = 0;
  function increment() {
    counter++;
    console.log("counter", counter);
  }
  increment();
}
createCounter();

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 + i);
}
// output: 3 3 3 and to get op as 0 1 2 we need to use let instead of var

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

function createBase(base) {
  return function (num) {
    console.log(base + num);
  };
}
console.log("addSix", addSix);

function x() {
  for (var i = 1; i <= 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}
x();
// output is 10 times 11 will print but when you change var to let then it will print 1 to 10
// use let instead of var because let has block scope. So for each and every loop iteration, i will be new variable every time. New copy of i will be in memory every time.
// When setTimeout() runs , callback function will have new copy of i with it.

// What if var declaration is moved to Line 5, will the code work?
function outer() {
  function inner() {
    console.log(a);
  }
  var a = 10;
  return inner;
}
var close = outer(); // this will give you outer function
close(); // this will give you inner function and equivalent

// What if var is replaced by let in Line 5. What will happen?
function outer() {
  function inner() {
    console.log(a);
  }
  let a = 10;
  return inner;
}
// What if outer() function is nested into another function? Will inner() function h
// ave access to outer() function’s environment as well?
function outest() {
  var c = 12;
  function outer(b) {
    function inner() {
      console.log(a, b, c); // try printing b and c  here
    }
    let a = 10; // let instead of var
    return inner;
  }
  return outer;
}
// when having incrementing value of a
function numberGenerator() {
  // Local “free” variable that ends up within the closure
  var num = 1;
  function checkNumber() {
    console.log("fghj", num);
  }
  num++;
  return checkNumber;
}

var number = numberGenerator();
number(); // 2
// Passing argument here
var close = outest()("Hi Closures"); // this will give you outer function
close(); // this will give you inner function and equivalent
// Advantages of Closures
// Data Hiding, Encapsulation, and Module Pattern, Partial Application, Currying, Function Factories, Memoization,
// and maintaining state in asynchronous programming.
// when you retruning inner function ansd to get console fom inner function call the outerfunction as ()() like this
