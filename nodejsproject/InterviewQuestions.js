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
  for (let ele of arr) {
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
// console.log(user2.address.street); // here it will throw an error and undefined
// console.log(user2?.address?.street); //here it won't throw an error and undefined

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
// array = [1,2,3,4,5,6,7,8,9,10]
// target = 6
// write a program to find the target number in the given array

//
let emp = [
  {
    name: "divya",
    age: 25,
  },
  {
    name: "chinni",
    age: 26,
  },
  {
    name: "penny",
    age: 20,
  },
  {
    name: "rani",
    age: 20,
  },
];

// filter the below 26 value, and return the name nad age
let filteredEmp = emp
  .filter((item) => item.age < 26)
  .map((item) => ({ name: item.name, age: item.age }));

console.log(filteredEmp);

{
  /* <div>
  {filteredEmp.map((item) => {
    return (
      <div>
        {item.name} {item.age}
      </div>
    );
  })}
</div>; */
}
// document.getElementById("filterData").innerHTML = filteredEmp.map((item) => {
//   return `<div>${item.name} ${item.age}</div>`;
// });

// const BtnClick = () => {
//   console.log("Welcome Divya");
// };
{
  /* <div onclick={BtnClick}>Welcome Divya</div>;

const divSelect = document.getElementById("app");
divSelect.addEventListener("click", (e) => {
  console.log(e.target.innerHTML);
}); */
}
const promise1 = new Promise((reslove, reject) => {
  const num = 2;
  if (num > 4) {
    reslove("promise is resloved");
  } else {
    reject("promise is rejected");
  }
});

promise1
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

function EmployeeNames() {}

EmployeeNames.prototype = {
  names: [],
  showNames: function () {
    return this.names;
  },
};
var el = new EmployeeNames();
el.names.push("Divya");
console.log(el.showNames());

var el2 = new EmployeeNames();
el2.names.push("Chinni");
console.log(el2.showNames());

const person = {
  name: "Divya",
  age: 26,
};

// output:{["name", "Divya"], ["age", 26]}

// 1 st way
const entires = Object.entires(person);
console.log(entires);

// 2nd way
const getObjectentires = (obj) => {
  const objKeys = Object.keys(obj);
  console.log(objKeys);
  const result = objKeys.map((key) => {
    const value = obj[key];
    return [key, value];
  });
  return result;
};
getObjectentires(person);

let a = {};

let b = { a: 1 };
let c = { b: 2 };
a[b] = 123;
a[c] = 456;
console.log(a[b]); // 456 here object key will be converted to string
// when you use an object as key in another object, it will be converted to string, the conversion resluts in [object Object] for both objects,
// so the second assignment will overwrite the first one
