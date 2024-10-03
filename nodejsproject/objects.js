// what are objects in Javascript?
// An object is a data type that allows you to store key value pairs.
// object of key/value can be string/number/boolean/undefined/function/object/array
// object can be nested inside another object

const { array } = require("yargs");

// example
const person = {
  firstName: "Divya",
  lastName: "D",
  hobbies: ["reading", "coding"],
  address: {
    city: "Bangalore",
    state: "Karnataka",
  },
  action: function () {
    console.log("Iam", this.firstName);
  },
};
console.log(person.hobbies[1]);
// dot notation to access the object properties
console.log(person.address.city);
console.log(person.action());
// bracket notation to access the object properties
console.log(person["address"]["city"]);

// How many ways you can create objects
// 1. object literal
const firstMethod = {
  name: "Divya",
  age: 24,
};
console.log(firstMethod);
// object constructor or using new keyword
var secondMethod = new Object();
secondMethod.name = "Divya";
secondMethod.age = 24;
console.log(secondMethod);
// Using Object.create() method
const thirdMethod = {
  name: "",
  age: "",
};
const newCreatedObj = Object.create(thirdMethod);
console.log(newCreatedObj);

// Diffrence between array and object?

// object destructuring
const { firstName, lastName } = person;
console.log(firstName, lastName);

// // How do you check if a property exists in an object?
console.log("firstName" in person);

console.log(Object.keys(person));
console.log(Object.values(person));
// Object.entries() method returns an array of a given object's own key values paris into an array
console.log(Object.entries(person)); // [ [ 'firstName', 'Divya' ], [ 'lastName', 'D' ], [ 'hobbies', [ 'reading', 'coding' ] ], [ 'address', { city: 'Bangalore', state: 'Karnataka' } ], [ 'action', [Function: action] ] ]

// object prototype
// All JavaScript objects inherit properties and methods from a prototype.
// Date objects inherit from Date.prototype. Array objects inherit from Array.prototype.
const animal = {
  type: "mammal",
};

const dog = Object.create(animal);
dog.breed = "Labrador";

console.log(dog.type); // mammal
console.log(dog.breed); // Labrador
// why its false means, it is not its own property, it is inherited from its prototype
console.log(dog.hasOwnProperty("type")); //false
console.log(dog.hasOwnProperty("breed")); //true

// Object.assign
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = Object.assign(obj1, obj2);
console.log("obj3", obj3); // { a: 1, b: 3, c: 4 }

// obj1 is modified why means obj1 is passed as first argument to Object.assign but
// obj2 is not modifed why means obj2 is passed as second argument to Object.assign
console.log("obj1", obj1); // { a: 1, b: 3, c: 4 }
console.log("obj2", obj2); // { b: 3, c: 4 }

const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };

const result = Object.assign(target, source1, source2);
console.log(result); // { a: 1, b: 2, c: 3 }
console.log(target); // { a: 1, b: 2, c: 3 }
console.log(source1); // { b: 2 }
console.log(source2); // {c:2}

// Object.freeze
// The Object.freeze() method freezes an object. A frozen object can no longer be changed.
const objec = { age: "24" };
const newObj = Object.freeze(objec);
newObj.age = "25";
console.log(newObj.age); // 24, here beacuse we did the object.freeze, so we can;t modified the object.

// Object.seal
// The Object.seal() method seals an object, its properties can't be added or removed, but existing properties can be changed.
const obj4 = { name: "Divya" };
const newObj4 = Object.seal(obj4);
newObj4.name = "Divya D";
console.log(newObj4.name); // Divya D here existing properties values we can modify
newObj4.age = "24";
console.log(newObj4.age); //undefined. here we can't add new properties to the sealed object.

// Deleting Object Properties
const obj5 = { name: "Divya", age: 24 };
delete obj5.age;
console.log(obj5); // { name: 'Divya' }

// output examples
const obj = {
  a: 1,
  b: { c: 2 },
  d: 3,
};
console.log(obj.b.c); //2
console.log(obj["b"]["c"]); //2
console.log(obj["b"].c); // 2

const data = {
  x: 10,
  y: 20,
};

data.z = 30;
delete data.x;

console.log(data); // {y:20,z:30}

// spread syntax
const obj6 = { a: 1, b: 2 };
const obj7 = { b: 3, c: 4 };
const merged = { ...obj6, ...obj7 };
console.log(merged); //{a:1,b:3,c:4}
console.log(obj6); //{a:1,b:2}
console.log(obj7); //{b:3,c:4}

// Symbols as Object Keys
const sym = Symbol("key");
const obj8 = {
  [sym]: "value",
};

console.log(obj8[sym]); //value
console.log(Object.getOwnPropertySymbols(obj8)); //[ Symbol(key) ] here we can get symbol key value

// Object.fromEntries()
const entries = [
  ["name", "Alice"],
  ["age", 25],
];
const obj9 = Object.fromEntries(entries);
console.log(obj9); // { name: 'Alice', age: 25 } here we can convert array to object using Object.fromEntries()

// what is diffrenece b/w array and object?
//Arrayd are collection of values, objects are collection of key value pairs.
// Array are denoted by square brackets[], objects are denoted byt the culry braces{}.
// Array elements are accessed by index, objects are accessed by key.
// Array elements are ordered, objects are unordered.

// example
const array1 = [1, 2, 3];
const object1 = { a: 1, b: 2, c: 3 };

// What are some common methods to iterate over objects?
// for ...in loop
const person1 = {
  name: "Div",
  age: 24,
};
for (let prop in person1) {
  console.log(prop, person1[prop]);
}

// Object.keys() & forEach
const iteration = Object.keys(person1).forEach((key) => {
  console.log(key, person1[key]);
});

// Object.values() & forEach
const iteration1 = Object.values(person1).forEach((values) => {
  console.log(values, person1[values]);
});

// how do you check if a property exists in an object?
// using in operator
console.log("name" in person1); // true
console.log(person1.hasOwnProperty("name")); // true
console.log(person1 !== undefined); // true

// how do you clone an object?
// using .... ,spread operator, Object.assign() method, JSON.parse() and JSON.stringify() method
const originalObject = { a: 1, b: 2 };
const cloneObject = { ...originalObject };
console.log("cloneObject", cloneObject);
const cloneObject1 = Object.assign(originalObject);
console.log("cloneObject1", cloneObject1);
const cloneObject2 = JSON.parse(JSON.stringify(originalObject));
console.log("cloneObject2", cloneObject2);

// what is difference b/w deep copy and shallow copy?
// Shallow copy in nested objects case will modify the parent propert valu,if cloned object property value is changed.
// but deep copy will not modify the parent property value, if cloned object property value is changed.
const person3 = {
  name: "Divya",
  address: {
    city: "Bangalore",
    state: "Karnataka",
  },
};
const shallowCopy = Object.assign(person3);
shallowCopy.address.city = "Mysore";
console.log("shallowCopy", shallowCopy);
console.log("person3", person3);
const deepCopy = JSON.parse(JSON.stringify(person3));
deepCopy.address.city = "Pune";
console.log("deepCopy", deepCopy);
console.log("person3", person3);

// What is set Object
// Set Object is collection of unique values, it can be any type
// Set Provides methods to add, delete, and check if a value exists in a set.
// create a Set to store unique numbers
const uniqueNumbers = new Set();
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(3);
uniqueNumbers.add(1);
console.log(uniqueNumbers); // {1,2,3}  here 1 is not added again, because set allows only unique values.
console.log(uniqueNumbers.has(1)); // true
console.log(uniqueNumbers.size); // 3
consolelog(uniqueNumbers.delete(1)); // true
console.log(uniqueNumbers); // {2,3}

// What is Map Object
// Map Object is collection of value value pairs, it can be any type, and each value also can be any type
const personDetails = new Map();
personDetails.set("name", "Divya");
personDetails.set("age", 24);
console.log(personDetails.get("name")); // Divya
console.log(personDetails.size); // 2
console.log(personDetails.has("name")); // true
console.log(personDetails.delete("name"));
console.log(personDetails); // {age:24}

// What is the difference between Map and javascript Object?
//1. Map Object allows any data type as key, but object allows only string and symbol as key.
//2. Map Object maintains the order of insertion, but object does not maintain the order of insertion.
//3. Map Object has size property, but object does not have size property.

// What is the difference between Map and Set?
//1. Map Object is collection of key value pairs, but Set Object is collection of unique values.
//2. Map Object allows any data type as key, but Set Object allows only one data type.
//3. Map Object has size property, but Set Object has size property.

// comapre two objects
// To Compare two objects in js,you need to check if the objects have same properties and values.
// there are 2 different levels of  comparison, shallow comparison and deep comparison.

// shallow comparison
// Shallow equality checks if two objects reference the same location in memory:
const obj10 = { a: 1, b: 2 };
const obj11 = { a: 1, b: 2 };
const obj12 = obj10;
console.log(obj10 === obj11); // false // here obj10 and obj11 are different objects, so it is false.
console.log(obj10 === obj12); // true // here obj12 is pointing to obj10, so it is true.
console.log(JSON.stringify(obj10) === JSON.stringify(obj11)); // true

// deep comparison
// Deep equality checks if two objects have the same properties and values:
const obj13 = { a: 1, b: 2, c: { d: 3 } };
const obj14 = { a: 1, b: 2, c: { d: 3 } };
const obj15 = { a: 1, b: 2, c: { d: 4 } };
function deepEqual(obj1, obj2) {
  if (obj13 === obj14) return true; // if both objects are same, return true

  if (typeof obj13 !== "object" || typeof obj14 !== "object") return false; // if both objects are not objects, return false

  const keys1 = Object.keys(obj13);
  const keys2 = Object.keys(obj14);

  if (keys1.length !== keys2.length) return false; // if both objects keys length is not same, return false

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj13[key], obj14[key]))
      return false; // if both objects keys are not same or values are not same, return false
  }
  return true; // if both objects keys and values are same, return true
}

console.log(deepEqual(obj13, obj14)); // true
console.log(deepEqual(obj13, obj15)); // false

// Using lodash library
const _ = require("lodash");
console.log(_.isEqual(obj13, obj14)); // true
console.log(_.isEqual(obj13, obj15)); // false


// Shallow and Deep
//Original object
// const original = {
//   name: "John", 
//   age: 30, 
//   hobbies: ["reading", "cooking"],
//   address: {
//     city: "New York", 
//     state: "NY"
// };
// Shallow copy
// const shallowCopy = Object.assign({}, original);

// // Deep copy
// const deepCopy = JSON.parse(JSON.stringify(original));

// // Modifying a nested object
// shallowCopy.address.city = "San Francisco";
// deepCopy.address.city = "Los Angeles";

// console.log(original.address city); // Output: "San Francisco" 
// console.log(shallowCopy.address.city); // Output: "San Francisco" 
// console.log(deepCopy.address.city); // Output: "Los Angeles"
