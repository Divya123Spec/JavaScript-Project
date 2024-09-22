// Write a code to display which character is coming how many times in a given string ?

const { result } = require("lodash");

const Countoccurance = (str) => {
  let exists = {};
  for (i = 0; i < str.length; i++) {
    if (exists[str[i]]) {
      exists[str[i]] += 1;
    } else {
      exists[str[i]] = 1;
    }
  }
  for (let item in exists) {
    console.log("ooccurance of  " + item + " is :" + exists[item]);
  }
};
Countoccurance("malayalam");

// Write a function to check whether a string is a palindrome or not with time complexity of the code ?

function palindrome(str) {
  var flag;
  for (i = 0, j = str.length - 1; i < str.length / 2 && j > 0; i++, j--) {
    {
      if (str[i] != str[j]) {
        flag = 1;
      }
    }
    if (flag == 1) {
      console.log("string " + str + " is not a palindrome");
    } else {
      console.log("string " + str + " is a palindrome");
    }
  }
}
palindrome("malayalam"); //string malayalam is a palindrome

function isPalindrome(str) {
  var cleanedstr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  var reversedstr = cleanedstr.split("").reverse().join("");

  console.log(cleanedstr == reversedstr);
  return cleanedstr == reversedstr;
}

isPalindrome("racecar");

// input = "ReactJS JavaScript & Redux"
// output = "Redux & JavaScript ReactJS" */

let str = "ReactJS JavaScript & Redux";

let splitstr = str.split("");
let rever = splitstr.reverse();
let joi = rever.join("");

function reverseWords(input) {
  // Split the string into an array of words
  let wordsArray = input.split(" ");

  // Reverse the array of words
  let reversedArray = wordsArray.reverse();

  // Join the reversed array back into a string
  let output = reversedArray.join(" ");

  return output;
}

let input = "ReactJS JavaScript & Redux";
let output = reverseWords(input);
console.log(output, "rever"); // Output: "Redux & JavaScript ReactJS"


// Array to Object
let array = [1,2,3,4,5]
let obj = {}

array.forEach((value,index)=>{
  obj[index] = value
})
console.log(obj)

const obj3 = Object.assign({},array)
console.log(obj3)

console.log(5 > '15' <5) 
// 5 > 15  => flase
// 0 <5 => ture

console.log(7 < '85' <7) 
// 7 < 15 => ture
// ture < 7 => 1<7 => ture
console.log(7<'85' > 5)
// 7 < 85 => ture
//  true > 5 => flase


for(var i=0; i<4 ; i++){
  (function(i){
    setTimeout(function(){
      console.log(i);
    },14000)
  })(i)
}

console.log(3 > 4 > 5)
// 3 > 4 => false
// 0 > 5 => false


console.log(3 < 4 < 5)
// false = 0
// 0 <5 = true 
console.log(3> 4 > -1)
// false =0
// 0 > -1 = true 


var x =10 ;
function get () {
  console.log(x); //undefined
  var x =20;
}
get(); 
const a =[1,2,3]
a.push(4)
Object.freeze(a)
a[0] =10;
console.log(a);

// map function

let arr =[ 1,2,3,4,5]

function multiplyBy2(arr){
  let resultArr =[]

  for(i =0 ;i<arr.length; i++){
    resultArr.push(arr[i] *2)
  }
  return resultArr
}
console.log(multiplyBy2(arr))



 let obj1 = {a: 1, b: 2, c: 3, d: 10, e: 12, f: 6} ;
let obj2 = {a: 5, b: 7, e: 12, d: 10};
// Find out the identical key value pairs from two different objects: 
function findIdenticalPairs(obj1,obj2){
  const indeticalPairs ={};
  for(const key in obj1){
    if(obj2.hasOwnProperty(key) && obj1[key] === obj2[key]){
      indeticalPairs[key] = obj1[key]
    }
  }
return findIdenticalPairs
}

findIdenticalPairs(obj1,obj2)


// function z(){
//   for(var i = 1; i<= 5;i++){
//     function close(x){
//       setTimeout(function(){
//         console.log(x)
//       }, i*1000)
//     }
//     close(i);
//   }
//   console.log("hi Divya")
// }
// z();

function y(){
  for (var i =1; i<=5; i++){  
     setTimeout(function(){
       console.log(i);
     },i * 1000);
  }
 }
 y() // 66666 to get 55555 need to use i<5 not equal

// to get 12345 using var  create a closure that captures the current value 
function z(){
  for( var i =1; i<=5;i++){
  (function (x){
    setTimeout(function(){
      console.log(x);
    },x*1000)
  })(i)
}
}
z();


let example = "I love my India";

// Split the string into an array of words
let words = example.split(' ');

// Sort the words by length in descending order and pick the first one
let maxLengthWord = words.sort((a, b) => b.length - a.length)[0];

// Output the result
console.log("The word with the maximum length is:", maxLengthWord);


  let arr2 = [1, 10, 2, 6, 5, 10];

// Remove duplicates by converting the array to a Set, then back to an array
let uniqueArr = [...new Set(arr2)];

// Sort the array in descending order
uniqueArr.sort((a, b) => b - a);

// Find the first two maximum numbers and multiply them
let result = uniqueArr[0] * uniqueArr[1];

// Output the result
console.log("The product of the two maximum numbers is:", result);

function foo() {
  console.log(1);
}

foo();
var foo = function() {
  console.log(2);
};

foo();