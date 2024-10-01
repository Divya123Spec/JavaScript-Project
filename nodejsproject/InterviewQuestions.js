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
// array = [1,2,3,4,5,6,7,8,9,10]
// target = 6
// write a program to find the target number in the given array

//

const removedup  =(arr) =>{
 let uniqArr =[]
 for(let i =0 ; i<=arr.length-1 ; i++){
  if(uniqArr.indexOf(arr[i]) == -1){
    uniqArr.push(arr[i])
  }
 }
 return uniqArr;
}
removedup([1, 2, 1, 3, 4, 2, 2, 1, 5, 6])


function evenArr(arr){
  const result =[]

  for(i=0 ;i<=arr.length ;i++){
    if(arr[i] %2 === 0){
      result.push(arr[i])
    }
    return result

  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8,-8,19, 9, 10];
console.log("Even numbers:", evenArr(numbers));

function panlidrome(str){
  const len = str.length

  for(i =0; i<len/2;i++){
    if(str[i] !== str[len-i-1]){
      return ""
    }
  }
  return panlidrome
}
console.log(panlidrome("madam"))

function factorial (num){
  if(num == 0 ||  num ==1){
    return 1
  }else{
    return num*factorial(num-1);
  }
}
console.log(factorial(4));

let str = "I am learning JavaScript and solving programming challenges"
let longestWord = '';
function findLongestWord(){
  const words = str.split('')

  for(let word of words){
    if(word.length >longestWord.length){
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord(str));
function findMax(){
  let max = arr[0];
  for(i=0;i<arr.length ;i++){
    if(arr[i]> max){
      max=arr[i];
    }
  }
  return max;
}
const number = [1, 6, -33, 9, 4, 8, 2];
console.log("Maximum number is:", findMax(number));


function reversedStr(){
  let reversed = '';

  for(i =str.length-1;i>=0 ;i--){
    reversed +=str[i]
  }
  return reversed;
}
console.log(reversedStr("hello")); // Output: "olleh"
console.log(reversedStr("JavaScript")); // Output: "tpircSavaJ"
console.log(reversedStr("12345")); // Output: "54321"


function findSmallestWord() {
  const sentence = "Find the smallest word"; // The sentence to search
  const words = sentence.split(' '); // Split the sentence into words
  let smallestWord = words[0]; // Initialize smallestWord to the first word

  // Loop through the words starting from the second word
  for (let i = 1; i < words.length; i++) {
    // If the current word is shorter than the smallestWord, update smallestWord
    if (words[i].length < smallestWord.length) {
      smallestWord = words[i];
    }
  }

  console.log(smallestWord); // Output the smallest word
}

//  Call the function
findSmallestWord(); // Output: "the"

function fibonacci(n) {
  let fibSeries = [0, 1]; // Initial two Fibonacci numbers

  for (let i = 2; i < n; i++) {
    fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2]; // Calculate next Fibonacci number
  }

  return fibSeries;
}

// Test case
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
