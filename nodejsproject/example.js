// const { slice } = require("lodash");

const { findLastIndex, reverse } = require("lodash");
const { array } = require("yargs");

// // reduce
// let numbers = [2, 4, 6, 8, 10];

// // function to return the square of a number
// function square(number) {
//   return number * number;
// }

// // apply square() function to each item of the numbers list
// let square_numbers = numbers.map(square);
// console.log(square_numbers);

// // Output: [ 4, 16, 36, 64, 100 ]

// // Splice
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]

// // slice
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// // sort
// const month = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(month);
// // expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// // expected output: Array [1, 100000, 21, 30, 4]

// // Split
// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);
// // expected output: "fox"

// const chars = str.split('');
// console.log(chars[8]);
// // expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // expected output: Array ["The quick brown fox jumps over the lazy dog."]


// fibonaci 


// const number = parseInt(prompt('Enter the number of terms: '));
// let number1 = 0, number2 = 1, lastnum;
// let number =32;
// for (let i = 1; i <= number; i++) {
//     console.log(number1);
//     nextTerm = number1 + number2;
//     number1 = number2;
//     number2 = lastnum;
// }


// function fibonacci(num) {
//   if(num < 2) {
//       return num;
//   }
//   else {
//       return fibonacci(num-1) + fibonacci(num - 2);
//   }
// }

// const nTerms =5

// if(nTerms <=0) {
// }
// else {
//   for(let i = 0; i < nTerms; i++) {
//       console.log(fibonacci(i));
//   }
// }


// let text1 = "Hello";
// let text2 = "world!";
// let text3 = "Have a nice day!";
// let result = text1.concat(" ", text2, " ", text3);
// console.log('result',result);


// palndrome

// const checkPalindrome = (string) => {
//   // convert string to an array
// let arrayValues = string.split('');
// console.log('arrayValues',arrayValues)

    // reverse the array values
// let arrayReverse = arrayValues.reverse();
// console.log('arrayReverse',arrayReverse)

 // convert array to string
//  const reverseString = arrayReverse.join('');
//  console.log('reverseString',reverseString)
// if(string == reverseString) {
//   console.log('It is a palindrome');
// }
// else {
//   console.log('It is not a palindrome');
// }
// }


// const string = 'dad';

// checkPalindrome(string);

// const example = ({ a, b, c }) => {
//   console.log(a, b, c);
//  };
//  example(0, 1, 2);

//Array Destructuring
// let fruits = ["Apple", "Banana"];
// let [a, b] = fruits; // Array destructuring assignment
// console.log(a, b);

//Object Destructuring
// let person = {name: "Peter", age: 28};
// let {name, age} = person; // Object destructuring assignment
// console.log(name, age);





// let emp = { 'name': 'Pramod',address :{ 'city':'Delhi',
// 'state':'abc'

// } }

// let emp1 = {...emp};

// emp1.address['city'] ='xzy'

// console.log(emp);
// console.log(emp1);

// ['t', 'a', 'm', 'b']

// const stringCheck =(str) =>{
// let arr1 = ['t', 'a', 'm', 'b'];

// let arr2 = [];
// arr2 =
// console.log(arr2)

// }


// stringCheck('cat');

















// let = arr = ['abc','xyz','pqy','nmq'] 
// //  removeItem = pqy

// arr = delete arr['pqy']
// // arr = arr.splice(1,2)
// console.log('abc',arr)

// const a = [1, 2, 3]; const b = [1, 2, 4, 5, 6];

// let c = [...a, ...b]

// let finalArray = [...new Set(c)]

// console.log(finalArray);





// const palindrome = (val) =>{

// }



// palindrome('dad');

// const [data, setData] =useState([]);
// let url =''
// let query = 10

// const palindrome =() =>{
//     fetch(url)
//     .then(response =>{
//         response.json();
//     })
//     .then(data =>{
//        setData(data) 
//     })
// }


// useeffect =() =>{
//     palindrome();
// }



// Input: nums = [2,7,11,15]
//  target = 18
// Output: [1,2]
// nums[0] + nums[1] == 9

// palindrome
// function isPalindrome(str) { 
//     return str === str.split("").reverse().join(""); 
//   }

// console.log('palindrome',isPalindrome('madam'))

// let string1 = 'madam';
// console.log('string2',string1.split("").reverse().join(""))



// let palindrome = 'teet';
// let palindrome2 = palindrome.split("").reverse().join('');
// console.log('palindrome2',palindrome2)

// function onlyEvenNumbers(num){
// return num.filter(num => num%2 == 0)
// }
// console.log('onlyEvenNumbers',onlyEvenNumbers([1,2,3,4,5,6,7]));

// factorial
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// Example usage:
// var number = 5;
// var result = factorial(number);
// console.log("Factorial of " + number + " is: " + result);

// // prime
// function prime(num){
//     if(num<=0){
//       return false;
//     }
//     for(i=1;i<=Math.sqrt(num);i++){
//       if(num % i ===0){
//       return false
//       }else{
//         return true
//       }
//     }
//   }
  
//   let num = 19;
//   if (prime(num)) {
//     console.log(num + " is a prime number.");
//   } else {
//     console.log(num + " is not a prime number.");
//   }

// // fibonacci
//   function fibonacci(n){
//     var fibonacciSeries = [0, 1];
//     for(var i=2;i<n;i++){
//         var nextNumber = fibonacciSeries[i-1] + fibonacciSeries[i-2]
//         fibonacciSeries.push(nextNumber)
//     }
//     return fibonacciSeries;
//   }

//   let count =10;
//   var fib = fibonacci(count);
//   console.log("fib",fib);



//   const obj = null

//   console.log("obj" ,typeof(obj));

//   (function(){
//     setTimeout(()=> console.log(1),2000);
//     console.log(2);
//     setTimeout(()=> console.log(3),0);
//     console.log(4);
//    })();


// //    Even though a is defined in the outer function, due to closure, inner functions have access to it.
//    (function(a){
//     return (function(){
//       console.log(a);
//       a = 6;
//     })()
//    })(21);



//    function solve(arr, rotations){
//     if(rotations == 0) return arr;
//     for(let i = 0; i < rotations; i++){
//       let element = arr.pop();
//       arr.unshift(element);
//     }
//     console.log('arr',arr)
//     return arr;
//    }
//    solve([44, 1, 22, 111], 7);

 
// prototype chain
Object.getPrototypeOf(Object)


// call method invokes the function with the given this value and arguments provided one by one
var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?

// apply method invokes the function with given this value and arugmnets provided as an array
let arrayApply=["Hello", "How are you?"]
invite.apply(employee1, arrayApply); 


// returns a new function, allowing you to pass any number of arguments
var inviteEmployee1 = invite.bind(employee1);
inviteEmployee1("Hello", "How are you?"); 

// Slice : selects from 1st element and  without including the last element
let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(2,4);  
console.log('arrayIntegers1',arrayIntegers1)

// Splice: this method adds/remove items to/from an array and then retruns removed item.
// first arugments indicates index of an ele, and which is optional, how many ele need to be removed.
console.log('arrayIntegers1',arrayIntegers.splice())

// pure function
// A Pure function is a function where the return value is only determined by its arguments without any
//  side effects. i.e, If you call a function with the same arguments 'n' number of times and 
//  'n' number of places in the application then it will always return the same value.

//Impure
let numberArray = [];
const impureAddNumber = (number) => numberArray.push(number);
//Pure
const pureAddNumber = (number) => (argNumberArray) =>
  argNumberArray.concat([number]);

//Display the results
console.log(impureAddNumber(6)); // returns 1
console.log(numberArray); // returns [6]
console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
console.log(numberArray); // returns [6]


let counter = 30;
if (counter === 30) {
  let counter = 31;
  console.log(counter); // 31
}
console.log(counter); //   
   
// console.log(message); //output : undefined
// var message = "The variable Has been hoisted";


// console.log(message);
// var message;
// message = "The variable Has been hoisted";
// message("Good morning"); //Good morning

// function message(name) {
//   console.log(name);
// }
   
// closures
function Welcome(name) {
    var greetingInfo
}
//   var myFunction = Welcome("John");
//   myFunction("Welcome "); //Output: Welcome John
//   myFunction("Hello Mr."); //output: Hello Mr.John

//   function verifyAnagrams(word1, word2) {
//     return word1.split("").sort().join("") === word2.split.sort().join("")
//   }
//   console.log(verifyAnagrams("eat", "ate"));


//   function add(item, items = []) {
//     items.push(item);
//     return items;
//   }
  
//   console.log(add("Orange"));
//   console.log(add("Apple"));


  function checkType(num = 1) {
    console.log(typeof num);
  }
  
checkType();
checkType(undefined);
checkType("");
checkType(null);

const [x, ...y] = [1, 2, 3, 4];
console.log(x, y);

function foo() {
  return {
    message: "Hello World",
  };
}
console.log(foo());

console.log(
  "%cThis is a red text with bigger font",
  "color:red; font-size:20px"
);
console.log("%cThis is a red text", "color:red");

await promise.catch((e) => void e);


// higer order function
const firstOrderFunc = () =>
  console.log("Hello, I am a First order function");
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);