//

// Event delegation in javascript
// event delegation is a technique to add event listener to multiple elements with a single event listener
// event delegation in js is a technique where you attach a single event handler to a parent element to handle events on its child elements

const { example } = require("yargs");

// example
{
  /* <ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>; */
}

// var parentList = document.getElementById("myList");
// parentList.addEventListener("click", handleClickevent());

// function handleClickevent(e) {
//   if (e.target.tagName === "LI") {
//     console.log(e.target.innerHTML);
//   }
// }

// How does prototypal inheritance work in JavaScript?
// defination
// prototypal inheritance is a type of inheritance in which an object inherits from another object
let arr = ["Divya", "Chinni"];
let object = {
  name: "Divya",
  city: "bangalore",
  getIntro: function () {
    console.log(this.name + " from " + this.city);
  },
};
function fun() {}
console.log(arr.__proto__); // Array.prototype
console.log(object.__proto__); // Object.prototype
console.log(arr.__proto__.proto__); // Object.prototype
console.log(arr.__proto__.__proto__.__proto__); // null
console.log(object.__proto__.__proto__); // null
console.log(fun.__proto__); // Function.prototype
console.log(fun.__proto__.__proto__); // Object.prototype
let object2 = {
  name: "Chinni",
};
// never do this
object2.__proto__ = object;
console.log("yyy", object2.__proto__); // object

// example
// here we are setting up the mybind func to the prototype of the function
Function.prototype.mybind = function () {
  console.log("jkjadjkhas");
};

// here we can able toaccess the mybind function from the fun function
// like wise once we set the mybind function to the prototype of the function we can access that function from any function
function fun() {}
function fun2() {}
console.log(fun.mybind());
console.log(fun2.mybind());

// What is the 'this' keyword in JavaScript?
// defination
// this always refres to global function in javascript, this always refers to the object that is executing the current function
const person = {
  name: "Divya",
  greet: function () {
    console.log("hello", this.name);
  },
};
person.greet(); // hello Divya, here this refers to the person object

function sayHello() {
  console.log("Hello, " + this.name);
}
const person1 = { name: "Bob" };
const person2 = { name: "Charlie" };
sayHello.call(person1);
sayHello.call(person2);
