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

// what are events? how are events tirgered in js?
// Events are actions that happen in the browser, such as click,mouse movment or keyboard input.
<button id="myButton">Click me</button>;
var button = docment.getElementById("myButton");
button.addEventlistener("cilck", handleClick);

// here click is event, and handleClick is event handler
function handleClick() {
  console.log("Button was clicked");
}

// What are types of events ?
// Click event, Mouse event, Keyboard event,Keyup,Keydown,Focus,Blur event,Chnage event, load event,Submit event, resize event etc

//What is event Object in js?
function handleClick(event) {
  console.log(event.target);
}
const { add } = require("lodash");
// Whenever any event trigger in the browser, the browser automatically creates an event object and passes it as arugment to the event handler function.
// The event object contains information about the event that has occured, such as the type of event, the target element, and any additional data related to the event.

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

// What is Event bubbling in js?(from child to parent)
// Event bubbling is a phase in event propagation where the event moves from the target element to the root element.
// Event triggered is the process in javascript where event triggered on the child element propagates up the DOm tree,
// triggering the event handler of the parent element.

<div id="outer">
  <div id="inner">
    <button id="myButton">Click me</button>;
  </div>
</div>;
// get the refrence Id elements
var outer = docment.getElementById("outer");
var inner = docment.getElementById("inner");
var button1 = docment.getElementById("myButton");
// attach event listener to the elements
outer.addEventlistener("click", handleBubbling);
inner.addEventlistener("click", handleBubbling);
button1.addEventlistener("click", handleBubbling);

function handleBubbling(e) {
  console.log("Event target", e.target.id); // myButton, inner, outer
}

// How to stop event propagation or event bubbling in js?
// event.stopPropagation() method is used to stop event propagation in js
function handleBubbling(e) {
  console.log("Event target", e.target.id); // myButton
  event.stopPropagation();
  // if you can event.stop propagation() method it won't call the parent elementevent handler
}

// What is event capturing in js?(from parent to child)
// Event capturing is the process in js where an event triggered starting from the highest level element and moves down to the target element.
// Event capturing is the first phase of event propagation in js.
// how to make diffrecene between event bubbling and event capturing from coding is its like same as bubbling but in
// addEventlistener method we have to pass the third argument as true to enable event capturing
outer, addEventListener("click", handleCapturing, true);
inner, addEventListener("click", handleCapturing, true);
button1, addEventListener("click", handleCapturing, true);
function handleCapturing(e) {
  console.log("Event target", e.target.id); // outer, inner, myButton
}

// what is the purpose of event.preventDefault() method in js?
// event.preventDefault() method is used to stop the default behavior of an element.
// example
<a href="https://www.google.com" id="myLink">
  Google
</a>;
var link = docment.getElementById("myLink");
link.addEventlistener("click", handleClick);

function handleClick(e) {
  e.preventDefault(); // here it will stop the default behavior of the link
  console.log("Link was clicked"); // but here console will print
}
// what is the use of this keyword in the context of event handlers in js?
// this keyword in the context of event handlers refers to the element that triggered the event.
// example
<button id="myButton">Click me</button>;
var button = docment.getElementById("myButton");
button.addEventlistener("click", handleClick);
function handleClick() {
  console.log(this.id); // myButton
} // here this keyword refers to the button element that triggered the event

// how to remove event handler from an element in js?
// removeEventlistener() method is used to remove an event handler from an element in js.
// example
<button id="myButton">Click me</button>;
var button = docment.getElementById("myButton");
// attach event handler to the button
button.addEventListener("click", handleClick);
function handleClick() {
  console.log("Button was clicked");
}
// remove event handler from the button
button.removeEventlistener("click", handleClick);
