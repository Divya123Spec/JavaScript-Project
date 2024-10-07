// What is string?
// A string is a datatype is used to store and manipulate the data.
// Strings are immutable in JavaScript.
// Strings can be created using single quotes, double quotes, or backticks.
//  example
var srt1 = "Hello";

// What is template literals and string interpolation?
// A template literal, also know as template string,introduce in ECMAscript 2015, for string interpolation.
// and multiline strings in javascript.
// example
var myName = "Happy";
var greeting = `Hello ${myName}`; //here we are using template literals and string interpolation and the dynamic value is template string and ${myName} is dynamic value.
console.log(greeting); // Hello Happy

var multilineStr = `This is a multiline string`;
console.log(multilineStr);

//what is difference between single quotes, double quotes and backticks in JavaScript?
// Single quotes and double quotes are used to create strings in JavaScript.
// Backticks are used to create template literals  ans multiline strings in JavaScript.
// example
var singleQuote = "Hello";
var doubleQuote = "Hello";
var backticks = `Hello`;
var example = ` hy $(backticks)`;
console.log(example);

// What are string operations in JavaScript?
// String methods in javascript
// substr(), substring(), slice(), indexOf(), lastIndexOf(), charAt(), charCodeAt(),
// concat(), split(), toLowerCase(), toUpperCase(), trim(), replace(), includes(), startsWith(),
// endsWith(), repeat(), match(), search(), localeCompare(), localeCompare(), toString(), valueOf(), length(),
// trimStart(), trimEnd(), padStart(), padEnd(), matchAll(), codePointAt(), normalize

// What are some important string operations in js?
// add multiple string
var str1 = "Hello";
var str2 = "World";
let reslut = str1 + " " + str2;
console.log(reslut); // Hello World

// using concat() method
var reslut1 = st1.concat(" ", str2);
console.log(reslut1); // Hello World

// extract apart of string
let substring = result.substring(6, 10);
console.log(substring); // World

// length of string
let length = result.length;
console.log(length); // 11

// convert upper case to lowser case and vice versa
console.log(reslut.toUpperCase()); // HELLO WORLD
console.log(reslut.toLowerCase()); // hello world

// Split a string into an array of substrings
let split = reslut.split(" ");
console.log(split); // ["Hello", "World"] // using split method you can convert from string to array.

// Replace method in string
// it will replace the first parameter with the second parameter
console.log(reslut.replace("world", "Universe")); // Hello Universe

//remove leading and trailing whitespace
let str = "   Hello World   ";
console.log(str.trim()); // Hello Worlds

// What is the difference between substr(), substring(), and slice() methods in JavaScript?
// substr() method is used to extract a part of a string and returns the extracted part in a new string.
// substring() method is used to extract a part of a string and returns the extracted part in a new string.
// slice() method is used to extract a part of a string and returns the extracted part in a new string.

// What is the difference between indexOf() and lastIndexOf() methods in JavaScript?
// indexOf() method returns the index of the first occurrence of a specified value in a string.
// lastIndexOf() method returns the index of the last occurrence of a specified value in a string.

// What is the difference between charAt() and charCodeAt() methods in JavaScript?
// charAt() method returns the character at a specified index in a string.
// charCodeAt() method returns the Unicode of the character at a specified index in a string.

// What is the difference between concat() and split() methods in JavaScript?
// concat() method is used to join two or more strings and returns a new string.
// split() method is used to split a string into an array of substrings and returns the array.

// What is string immutability in JavaScript?
// Strings are immutable in JavaScript, which means that once a string is created, it cannot be changed.
// Any operation that modifies a string actually creates a new string.
// when you try to modify the string, it will create a new memory location and store the new value
// example
var str1 = "Hello";
str1 = str1 + "world";
console.log(str1); // Hello World

// how many ways you can concatenate strings in JavaScript?
//  + operator
//  concat() method
//  template literals
//  join() method

// + operator
let s1 = "Hello";
let s2 = "World";

let r1 = s1 + " " + s2;
console.log(r1); // Hello World

// concat() method
let r2 = s1.concat(" ", s2);
console.log(r2); // Hello World

// template literals
let r3 = `${s1} ${s2}`;
console.log(r3); // Hello World

// join() method
let r4 = [s1, s2].join(" ");



// Can you write a function in JavaScript to reverse the order of words in a given string?

let arraWords = ["apple", "banana", "carrot", "kiwi"]
let reverse = arraWords.reverse();
let str1 = 'divya';
let reverse1 =str1.split('').reverse().join('')
console.log(reverse1)
console.log(reverse)


//Can you write a function in JavaScript to remove duplicate elements from an array?

let arr = [1,2,3,4,1,2,3,4];
let method1 = [...new Set(arr)];
console.log(method1)

function method2(arr){
let result =[];
for(i=0; i< arr.length; i++){
if(!result.includes(arr[i])){
result.push(arr[i])
}
}
return result;
}
console.log(method2(arr))


//Can you write a function in JavaScript to merge two objects without overwriting existing properties?  
let obj1 = {
    name : "Divya",
    age :"24"
    }
    let obj2 ={
    city :" bangalore",
    hobby :"coding"
    }
    let obj3 = {...obj1,...obj2}
    console.log(obj3);

    // second method
    function mergedObjects (target,source) {
        for(let key in source){
         if (!target.hasOwnProperty(key)){
         target[key] = source[key];
         }
        }
        return target;
        }
        
        let obj11 = { a: 1, b: 2 };
        let obj12 = { b: 3, c: 4 };
        
        let mergedObj = mergeWithoutOverwriting(obj11, obj12);
        console.log(mergedObj); 

// Can you write a function in JavaScript to get the current date in the format “YYYY-MM-DD”?
const currentDate = new Date().toISOString().split('T')[0];
console.log(currentDate);

//Can you write a function in JavaScript to calculate the cumulative sum of an array?
const cumulativeSum  = arr => arr.reduce((acc, num) =>
[...acc, acc.length ? acc[acc.length -1]+num :num],[])
console.log(cumulativeSum (arr));

//Can you write a function in JavaScript to split an array into chunks of a specified size?

function chunkArray(arr, size){
    const result =[];
    for(i=0 ; i<arr.length; i+= size){
    result.push(arr.slice(i,i+size))
    }
    return result;
    }
    
    let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
    
    let chunkedArr = chunkArray(arr3, 3);
    console.log(chunkedArr);


//Can you write a one-liner in JavaScript to find the longest consecutive sequence of a specific element in an array?
const longestSequence = (arr, element) => Math.max(...arr.join('').split(new RegExp(`[^${element}]`)).map(seq => seq.length));

//Can you write a function in JavaScript to transpose a 2D matrix?
const transposeMatrix = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));

// : Can you write a function in JavaScript to convert a string containing hyphens and underscores to camel case?
const toCamelCase = str => str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());

