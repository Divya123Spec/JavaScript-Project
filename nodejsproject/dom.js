// what is DOM? difference b/w html and DOM?
// DOM stands for Document Object Model. It is a programming interface for web documents.
// DOM represents the tree-like structure that allows javascript  to interact dynmically access and maniplute
// the content and structure of the webpage.

// HTML is a markup language that is used to create the structure of a webpage. It is a static representation of the webpage.
// The DOM is a dynamic representation of the webpage. It is created by the browser when the HTML document is loaded.

// How do you select,modify,create and remove DOM elements?
// Selecting DOM elements:
// document.getElementById() - Selects an element by its id attribute.
// document.getElementsByClassName() - Selects elements by their class attribute.
// document.getElementsByTagName() - Selects elements by their tag name.
// document.querySelector() - Selects the first element that matches a CSS selector.
// document.querySelectorAll() - Selects all elements that match a CSS selector.
// document.getElementsByName() - Selects elements by their name attribute.

// Modifying DOM elements:
// element.innerHTML - Sets or returns the HTML content of an element.
// element.textContent - Sets or returns the text content of an element.
// element.setAttribute() - Sets or returns the value of an attribute.
// element.style.property - Sets or returns the value of a CSS property.

// Creating DOM elements:
// document.createElement() - Creates a new element.
// document.appendChild() - Appends a new child element to an existing element.
// cloneNode() - Clones an element.

// Removing DOM elements:
// element.remove() - Removes an element from the DOM.
// element.removeChild() - Removes a child element from an existing element.

// Adding and removing classes:
// element.classList.add() - Adds a class to an element.
// addeventListener() - Adds an event listener to an element.
// removeEventListener() - Removes an event listener from an element.

// What are selectors in Js?
// Selectors are used to select and manipulate elements on a webpage.
// Selectors in js helps to get sepecific elements from DOM, based on ids,names,tags,classes,attributes etc.
// There are different types of selectors in js:
// document.getElementById() - Selects an element by its id attribute.
// document.getElementsByClassName() - Selects elements by their class attribute.
// document.getElementsByTagName() - Selects elements by their tag name.
// document.querySelector() - Selects the first element that matches a CSS selector.
// document.querySelectorAll() - Selects all elements that match a CSS selector.
// document.getElementsByName() - Selects elements by their name attribute.
// example:
// <div> id ="myDiv">Hello World</div>
const elementbyId = document.getElementById("myDiv");
console.log(elementbyId.innerHTML); // <div id="myDiv">Hello World</div>

// What is difference b/w getElementBYId,getElementsByClassName,getElementsByName,getElementsByTagName?
// getElementById() - Selects an element by its id attribute. It returns the element with the specified id.
// getElementsByClassName() - Selects elements by their class attribute. It returns a collection of elements with the specified class name.
// getElementsByName() - Selects elements by their name attribute. It returns a collection of elements with the specified name.
// getElementsByTagName() - Selects elements by their tag name. It returns a collection of elements with the specified tag name.
// example:
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Document</title>
// </head>
// <body>
//     <div id="myDiv">Hello World</div>
//     <div class="myClass">Hello World</div>
//     <div name="myName">Hello World</div>
//     <div> Hello World</div>
// </html>

// const elementbyId = document.getElementById("myDiv"); // here we are selecting element by id
// const elementbyClass = document.getElementsByClassName("myClass"); // here we are selecting element by class
// const elementbyName = document.getElementsByName("myName"); // here we are selecting element by name
// const elementbyTag = document.getElementsByTagName("div"); // here we are selecting element by tag name

// What is differece b/w querySelector and querySelectorAll?
// querySelector() - Selects the first element that matches a CSS selector. It returns the first element that matches the specified selector.
// querySelectorAll() - Selects all elements that match a CSS selector. It returns a collection of elements that match the specified selector.
// example:
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Document</title>
// </head>
// <body>
//     <div id="myDiv">Hello World</div>
//     <div class="myClass">Hello World</div>
//     <div name="myName">Hello World</div>
//     <div> Hello World</div>
// </html>

var elementbyQuerySelector = document.querySelector(".myClass"); // here we are selecting element by class
console.log(elementbyQuerySelector.innerHTML); // <div class="myClass">Hello World</div>

// What are the methods to kodify elements properties and attaributes?
// element.innerHTML - Sets or returns the HTML content of an element.
// element.textContent - Sets or returns the text content of an element.
// element.setAttribute() - Sets or returns the value of an attribute.
// element.style.property - Sets or returns the value of a CSS property.
// removeAttribute() - Removes an attribute from an element.
// classList.add() - Adds a class to an element.
// classList.remove() - Removes a class from an element.

// What is the difference between innerHTML and textContent?
// innerHTML - Sets or returns the HTML content of an element. It returns the HTML content of an element as a string.
// textContent - Sets or returns the text content of an element. It returns the text content of an element as a string.
// example:
// <div id="myDiv">Hello <strong>World</strong></div>
// const elementbyId = document.getElementById("myDiv");
console.log(elementbyId.innerHTML); // Hello World
console.log(elementbyId.textContent); // <strong>World</strong>

// How to add add remove properties and attributes to an element?
// element.setAttribute() - Sets or returns the value of an attribute.
// element.removeAttribute() - Removes an attribute from an element.

// example
// <div id="myDiv">Hello World</div>
// const elementbyId = document.getElementById("myDiv");
elementbyId.setAttribute("class", "myClass"); // here we are setting class attribute to the element
elementbyId.removeAttribute("id"); // here we are removing id attribute from the element

// How to add and remove style from html element?
// element.style.property - Sets or returns the value of a CSS property.
// example:
// <div id="myDiv">Hello World</div>
// const elementbyId = document.getElementById("myDiv");
elementbyId.style.color = "red"; // here we are setting color property to the element
elementbyId.style.setProperty("font-size", "24px"); // here we are setting font-size property to the element

// How to create new elements in DOM using JS? diff createElement() and cloneNode()?
// document.createElement() - Creates a new element. It creates a new element with the specified tag name.
// example
// const newElement = document.createElement("div"); // here we are creating a new div element

// cloneNode() - Clones an element. It creates a copy of an element, including its attributes and children.
// example
// const clonedElement = newElement.cloneNode(true); // here we are cloning the new element
// const clonedElement = newElement.cloneNode(false); // here we are cloning the new element without its children

// crrate TextNode
// const textNode = document.createTextNode("Hello World"); // here we are creating a text node
