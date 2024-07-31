//explain difference null and undefined in js

// Null is an assignment value. It can be assigned to a variable as a representation of no value.
// example
let a = null;
console.log("a", a); //null
console.log("a", typeof a); //object

// Undefined is a type of variable that does not have a value yet and has not been assigned a value.
// in functions also same function which is not returning anything will return undefined
// example
let b;
console.log("b", b); //undefined
console.log("b", typeof b); //undefined

// examples
function divide(a, b) {
  if (b === 0) {
    return null;
  } else {
    return a / b;
  }
}
console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: null

let arr = [1, 2, null, 4, undefined];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); //1,2,null,4,undefined
}

console.log(null == undefined); //true,here js comapres null and undefined and both are donest have any value(type coercion)
console.log(null === undefined); //false , here null is object and undefined is undefined
var bar = null;
console.log(typeof bar === "object"); //true

(function () {
  var a = (b = 3);
})();
console.log("a defined? " + (typeof a !== "undefined"));
console.log("b defined? " + (typeof b !== "undefined"));

console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 == 0.3); //false
