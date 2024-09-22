// Write a JavaScript function that takes an array of numbers as input and returns a new
// array containing only the even numbers.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evnArr = []

for(i=0;  i <arr.length ; i++){
    if(arr[i] % 2 ==0){
        evnArr.push(arr[i])
    }
}console.log(evnArr,"evnArr")

let numbers = [1, 2, 3, 4, 5];
numbers = numbers.map((number) => number * 2);
console.log(numbers.reduce((total, num) => total + num)); //30

const fruits = ["banana", "apple", "orange", "grape", "kiwi"];
// Sort in alphabetical order (default behavior)
const alphabetical = [...fruits.sort()]
console.log(alphabetical)
// Sort in descending alphabetical order
const descending = fruits.sort((a,b) => b.localeCompare(a))
console.log(descending)

// Sort based on the length of the fruit names in ascending order

const SortbyLen = [...fruits].sort((a,b) =>a.length - b.length)
console.log(SortbyLen)

// Task 4: Sort in ascending order by the second character of each fruit name
const sortBySecondChar =  [...fruits.sort((a,b) =>a[1].localeCompare -b[1].localeCompare)]
console.log(sortBySecondChar)


// Write a function to make the following code snippet work?

function sum(...args){
    const ans = args.reduce((a,b) =>a+b ,0)
     return ans;
}

console.log(sum(4, 6, 8, 10)); //output - 28

function* generatorFunction() {
    yield 1;
    yield 2;
    return 3;
  }
  
  const generator = generatorFunction();
  
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
//   { value: 1, done: false }, { value: 2, done: false }, { value: 3, done: true }
// The first call to generator.next() will return { value: 1, done: false }, indicating that the first value yielded is 1, and the generator is not yet done.
// The second call to generator.next() will return { value: 2, done: false }, indicating that the second value yielded is 2, and the generator is not yet done.
// The third call to generator.next() will return { value: 3, done: true }, indicating that the third value yielded is 3, and the generator is done (done is true).


const obj = {
    a: 1,
    b: 2,
    c: {
      a: 3,
      b: 4,
    },
  };
  
  const {
    a,
    b,
    c: { a: nestedA },
  } = obj; 
  console.log(a, b, nestedA);



let x = 10;
function outer() {
  console.log(x);

  if (false) {
    var x = 20;
  }
}
outer();//undefined


function foo() {
    let x = 1; 
    function bar() {
      let y = 2;
      console.log(x + y);
    }
    bar();
  }
  foo(); //3


  const person = {
    name: "John",
    age: 30,
  };
  Object.freeze(person);
  person.age = 40;
  console.log(person.age); //30


  let x1 = 10;
function updateX() {
  if (true) {   
    let x1 = 20;
    console.log(x1); //20
  }
  console.log(x); // 10
}
updateX();

function calculateSum() {
    console.log(result);
    var num1 = 5;
    let num2 = 10;
    const num3 = 15;
    var result = num1 + num2 + num3;
  }
  
  calculateSum(); //undefined

console.log(typeof 42);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof [1, 2, 3]);
console.log(typeof { name: "John", age: 25 });
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof function () {});


const companies = [
    { id: "1", name: "Facebook" },
    { id: "2", name: "Apple" },
    { id: "3", name: "Google" },
  ];
  
  companies.sort((a, b) => (a.name > b.name ? -1 : 1));
  console.log(companies); // goggle,facebook,apple

const a1 = [1, 2, 3];
const b1 = a1;
b1.push(4);
console.log(a1); //[ 1, 2, 3, 4 ]
console.log(b1); //[ 1, 2, 3, 4 ]

const x2 = 10;
function foo() {
//   console.log(x2);
  const x2 = 20;
}
foo(); //refernce error

const arr1 = [1, 2, 3];
const arr2 = [...arr1]; //spread operator so t does not store on same refrence
arr2.push(4);
console.log(arr1); //[1,2,3]
console.log(arr2); //[1,2,3,4]

const obj1 = { a3: 1, b3: 2, c3: 3 };
const { a3, b3 } = obj1;
console.log(a3, b3); //1,2

let x3 = 5;
{
  let x3 = 10;
  console.log(x3);//10
}
console.log(x3);//5

function getRadonColor(){
    const hexChars = "0123456789ABCDEF"
    let color = "#"
    for (let i=0 ; i<6 ;i++){
        color+= hexChars[Math.floor(Math.random() *16)]
    }
    return color ;
}
// console.log(getRandomColor());


// Write a function in JavaScript that converts a given string to title case.

// Write a function in JavaScript that returns the sum of two numbers without using the + operator
function add(a,b){
    while(b !==0){
        let carry = a&b;
        a= a^b;
        b= carry << 1;
    }
}

// Write a function in JavaScript that finds the second highest number in an array of numbers.
let num = [1,2,3,4,5]

let latgestArr = num.sort((a,b) => b-a);
let secLar = latgestArr[1]
console.log(latgestArr,"sort")
console.log(secLar,"secLar")

// palindrome
function isPalindrome(str){
    const reversedStr = str.split("").reverse().join("")
    return str === reversedStr;
}

console.log(isPalindrome("racecar"))

// Write a function in JavaScript that takes an array of strings as input and returns a new array with the strings sorted in alphabetical order.
const strings = ["apple", "banana", "cherry", "date", "elderberry"];

sortedStr = strings.sort()
console.log(sortedStr,"sortedStr")

//  Write a function in JavaScript that takes a string as input and returns a new string with all the vowels removed.

function removeVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}

// Example usage:
const str = "This is a test string with vowels";
console.log(removeVowels(str)); // Output: Ths s  tst strng wth vwls


const obj2 ={
    x:10,
    y:function(){
        return() => this.x;
        
    }
};
console.log(obj2.y()())


setTimeout(()=>console.log(1),0)
console.log(2);