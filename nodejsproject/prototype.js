// Prototype
// Javascript is prototype based langugae.
//  It means that objects can inherit properties from other objects.
//  In JavaScript, each object has a private property which holds a link to another object called its prototype.

let user = {
  name: "John",
};
// not only array or functions,or objects can have properties, but also strings and numbers can have properties
// all hidden properties are called prototypes
// The prototype is also an object.
// whenever you create any object in javascript. javascript engine will automatically
// adds lots of properties to the object. These properties are called prototypes.
// that attach to your object and you can access them using __proto__ property.
// __proto__ is a reference to the object's prototype.

console.log(user.__proto__); // {}
console.log(user.__proto === Object.prototype); // true
console.log(Object.prototype); // {}
console.log(Object.prototype.__proto__); // null


// Prototypal inheritance is a mechanism where an object can inherit properties and methods 
// from another prototype object. This means that every object has a prototype, 
// which is an object that serves as a template for the new object…

// Let me clear this up with an example.

// Parent object
const animal = {
  type: 'unknown',
  eat() {
    console.log('The $(this.type} is eating.');
  },
};

// child object
const dog = Object.create(animal);
dog.type = 'dog';
dog.eat(); // Output: 'The dog is eating.'