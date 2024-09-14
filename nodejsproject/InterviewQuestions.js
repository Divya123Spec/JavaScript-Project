// Q1. Difference between let, var and const.
// Q2. // Get output 1,2 without using let.
// for(var i=0; i<=2; i++){
//     setTimeout(function(){console.log(i)}, 1000);
// }
// Answer::
// function print(i){
//     setTimeout(function(){console.log(i)}, 1000)
// }

const { repeat } = require("lodash");

// for(var i=0; i<=2; i++){print(i)}

// Q3. Types of copy (Shallow vs Deep)
// Q4. map vs filter
// Q5. Prototype and how it works?
// Q6. Arrow function and advantages of arrow function
// - Don't have this scope. Closer parent will have access. If no then target to global. No argument objects, use rest operator, Arrow functions are not hoisted.
// Q7. When we use bind VS call apply and bind
// Q8. Difference between spread and rest operator.
// Q9. //Get second last element from array.

// let arr = ["a", "b", "c", "d", "e", "f"];
// output = "e"

// console.log(arr[arr.length-2]);

// Q10. Output?
// console.log(3+"3")
// console.log(3-"3")

// Q11 NodeJS Middleware?

// Q12 React Element vs Component

// Q13 What are pure components?

// Q14 What are refs in React?

// Q15 forwardRefs in React?

// Q16 React Virtual DOM

// Q17 Intereceptor :: Intercept request and response before going to backend. Eg, Strictly check API before going to backend. Part of middleware. Depends upon status responses we can do some navigation

// Q18 React fibre?

// Q19. React lifecycles?

// Q20 In which case you will use HOC? ::

// Q21 Lazy loading ?

// Q22 How to manage nested routes in terms of role based routing?

// Q23 Ask to interview :: What are roles, project etc.

for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

setTimeout(() => {
  console.log(1);
}, 0);

Promise.resolve(1).then(() => {
  console.log(2);
});

console.log(3);

let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flatArray = nestedArray.flat(Infinity);
console.log(flatArray);

let result1 = [];
function flatten(arr) {
  for (arr in ele) {
    if (Array.isArray(ele)) {
      flatten(ele);
    } else {
      result1.push(ele);
    }
  }
}
flatten(nestedArray);
// how to convert string to number without using pasreInt()

// regex for validations
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^.{1,50}$/;

const user = {
  name: "John",
  age: 30,
};

const { name, age } = user;

let num = 0;
console.log(num || 100); // 100 here first operator is trithy then it will return otherwise it will return sec
console.log(num ?? 100); // 0 here if first opertort is null or undefined then only first opertor will display

let user2 = {};
console.log(user2.address.street); // here it will throw an error and undefined
console.log(user2?.address?.street); //here it won't throw an error and undefined

const arr = [{ a: 1 }, { b: 1 }];
const obj = [{ c: 2 }];
arr.push(...obj);

const test = [
  { name: "name1", isStudent: true },
  { name: "name2", isStudent: false },
  { name: "name3", isStudent: true },
];

const newArr = test
  .filter((item) => item.isStudent)
  .map((item) => ({ item: item.name }));

// non repeat ele in string

function firstNonRepeatingCharacter(s) {
  // Convert string to an array of characters
  const chars = s.split("");

  // Step 1: Count the frequency of each character
  const charCount = chars.reduce((count, char) => {
    count[char] = (count[char] || 0) + 1;
    return count;
  }, {});

  // Step 2: Find the first non-repeating character
  const result = chars.find((char) => charCount[char] === 1);

  return result || null; // Return null if no non-repeating character is found
}

// Example usage
const inputString = "swiss";
const result = firstNonRepeatingCharacter(inputString);
console.log(result); // Output: 'w'

// duplicate array

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.filter(
  (item, index, self) => self.indexOf(item) === index
);

console.log(uniqueArray);

const _ = require("lodash");
const uniqueArray2 = _.uniq(array);

console.log(uniqueArray2);
