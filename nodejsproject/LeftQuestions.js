// Explain the concept of debouncing in JavaScript. How is it implemented in JavaScript?
// Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often,
// making it so that they are only fired at a certain rate.
// This can be particularly useful when you have a piece of code that gets fired multiple times, such as a scroll event or a resize event.
// Debouncing can be implemented in JavaScript by using the setTimeout() function.
// Here is an example of how you can implement debouncing in JavaScript:
function debounce(func, wait) {
  let timeout;

  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}
const debounceSayHello = debounce(sayJello, 3000);
// call the debounce function multiple times
debounceSayHello();
debounceSayHello();
debounceSayHello();
// here, the debounce function takes two arguments: func and wait.
// The func argument is the function that you want to debounce, and the wait argument is the time in milliseconds that you want to wait before the function is executed.

// Throttling
// Throttling ensures that a function is executed at most once in a specified interval, regardless of how many times the event is triggered.
// This is useful for scenarios where you want to ensure a function is called at regular intervals, no matter how frequently the event occurs.
// Useful for scenarios like window resize or scroll events where you want to limit the number of times a function is called to improve performance.

// What is the purpose of the 'localStorage' and 'sessionStorage' objects in JavaScript?
// Localstorage
// The localStorage object is used to store data with no expiration date.
// The data will not be deleted when the browser is closed, and will be available the next day, week, or year.
// The localStorage property is read-only.
// When you clear the browser data, the data stored in localStorage is not deleted.
// example
sessionStorage.bestColor = "Green";
sessionStorage["bestColor"] = "Green";
sessionStorage.setItem("bestColor", "Green"); // this way is better because it can store any type of data
const name = localStorage.getItem("bestColor"); // to get the value
localStorage.removeItem("bestColor"); // to remove the item

// sessionStorage
// The sessionStorage object is used to store data for one session.
// The data is deleted when the user closes the specific browser tab.
// The sessionStorage property is read-only.
// example
localStorage.setItem("bestColor", "Green");
localStorage.getItem("bestColor"); // to get the value from session s
localStorage.removeItem("bestColor"); // to remove the item from session

// Explain the differences between cookies and local storage.
// Cookies
// Cookies are small pieces of data stored in the user's browser.
// They are sent to the server with each request, which can slow down the website.
// setting a cookie using docment.cookie
document.cookie =
  "name=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
//   To read cookies, you can access the document.cookie property,
//   which returns all cookies in a single string. You may need to parse this string to find a specific cookie.
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length == 2) return parts.pop().split(";").shift();
  return null;
}
const nam = getCookie("name");
console.log(name);

// To delete a cookie, set its expiration date to a past date.
document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// Explain the concept of CORS (Cross-Origin Resource Sharing).
// Cross-Origin Resource Sharing (CORS) is a security feature implemented by browsers that restricts

// how to make requests from one domain to another domain.
// using cors we can make requests from one domain to another domain
// First from domain1  a preflight request is sent to domain2 to check if the request is allowed or not
// If the request is allowed, the actual request is sent.
// If the request is not allowed, the browser will block the request.

// Additional http headers are added to the request to enable CORS from domain 2 to domain1.
// access -control-allow-origin: * // to allow all domains

// Describe the differences between 'GET' and 'POST' requests.
// GET
// GET requests are used to request data from a specified resource.
// GET requests can be cached and remain in the browser history.
// GET requests can be bookmarked.
// GET requests should never be used when dealing with sensitive data.
// GET requests have length restrictions.
// Get requests are idempotent, meaning that making the same request multiple times will produce the same result.

// POST
// POST requests are used to submit data to be processed to a specified resource.
// POST requests are never cached.
// POST requests do not remain in the browser history.
// POST requests cannot be bookmarked.
// POST requests have no restrictions on data length.
// POST requests are not idempotent, meaning that making the same request multiple times can produce different results.
// To modify the data on the server, you should use a POST request.

// Explain the concept of memoization in JavaScript.
// Memoization is an optimization technique used to speed up the performance of functions by caching the results of expensive function calls.
// When a function is called with a specific set of arguments, the result is stored in a cache.
// If the function is called again with the same arguments, the result is retrieved from the cache instead of recalculating it.
// This can help reduce the number of function calls and improve the overall performance of the application.
// Here is an example of how you can implement memoization in JavaScript:
// example

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(40)); // Much faster than non-memoized version

// Explain the concept of the 'Strict Mode' in JavaScript.
// Strict mode is a feature in JavaScript that allows you to place a program or a function in a "strict" operating context.
// This means that the code will be executed in a more secure and optimized mode.
// Strict mode helps to catch common coding errors and prevent certain types of bugs.
// Strict mode is enabled by adding the "use strict" directive at the beginning of a script or a function.
// example
("use strict");
function strictFunction() {
  x = 3.14; // This will cause an error BEACUSE x is not defined
}

// What are generators and iterators in JavaScript?
// Generators
// Generators are functions that can be paused and resumed.
// example
function* generator() {
  // here * is used to define generator function
  let i = 0;
  var ar = ["BMW", "Audi", "Benz", "Toyota"];
  while (i < ar.length) {
    yield ar[i++]; // yeled is used to pause the function and return the value
  }
}
let gen = generator();
console.log(gen.next());

function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generatorFunction();
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }

// Iterators
// Iterators are objects that allow you to traverse a sequence of data.
var arr = [1, 2, 3, 4, 5];
for (let i of arr) {
  console.log(i);
}
function cars() {
  let index = 0;
  const car = ["bmw", "audi", "benz"];
  return {
    next: function () {
      // next is a method that returns an object with two properties: value and done.
      return index < car.length
        ? { value: car[index++], done: false }
        : { done: true };
    },
  };
}

var arr = ["bmw", "audi", "benz"];
var carIter = cars(arr);
console.log(carIter.next());
console.log(carIter.next());
console.log(carIter.next());
console.log(carIter.next());

// Explain the concept of 'Hoisting' in JavaScript.
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution.
// This means that you can use a variable or a function before it has been declared.
// example
console.log(x); // undefined
var x = 5;
// This is because the variable declaration is hoisted to the top of the scope, but the assignment is not.
// The code above is equivalent to:
var x;
console.log(x); // undefined
x = 5;

// Explain the module pattern in JavaScript.
// The module pattern is a design pattern used to create encapsulated and reusable code.
// It allows you to define private and public methods and variables within a module.
// This helps to prevent naming conflicts and provides a clean and organized way to structure your code.
// example
var module = (function () {
  var privateVar = "I am private"; // private variable
  function privateFunction() {
    console.log("I am private function"); // private function
  }
  return {
    publicVar: "I am public", // public variable
    publicFunction: function () {
      console.log("I am public function"); //   public function
    },
  };
})();
console.log(module.publicVar); // I am public
module.publicFunction(); // I am public function
console.log(module.privateVar); // undefined
module.privateFunction(); // TypeError: module.privateFunction is not a function
// In the example above, the privateVar and privateFunction are private to the module,
// while the publicVar and publicFunction are public and accessible from outside the module.

// What are Web Workers in JavaScript?
// Web Workers are a feature in JavaScript that allows you to run scripts in the background without blocking the main thread.
// This can help improve the performance of web applications by offloading CPU-intensive tasks to separate threads.
// Web Workers run in a separate thread from the main thread and communicate with the main thread using message passing.
// Web Workers are useful for tasks such as image processing, data processing, and other CPU-intensive operations.
// example
// main.js
const worker = new Worker("worker.js");
worker.postMessage("Hello from main thread");
worker.onmessage = function (e) {
  console.log("Message from worker:", e.data);
};
// worker.js
self.onmessage = function (e) {
  console.log("Message from main thread:", e.data);
  self.postMessage("Hello from worker thread");
};
// In the example above, the main.js script creates a new Web Worker using the Worker constructor and
// passes a message to the worker using the postMessage method.
