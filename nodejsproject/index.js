// variables
// isEven = (ele) => {
//   if(ele % 2 === 0){
//    return true;
//   }
//   return false;
//   return ele % 2 === 0;
// };
// console.log(isEven(2))

//  var result =[2,4,6,8].every(isEven);
//  console.log(result);
// cll back
// var result = [2, 4, 6, 8].every((e) => {
//   return e % 2 === 0;
// });
// console.log(result);

// const command = require("nodemon/lib/config/command");

// const { reject, values } = require("lodash");

// Promise
// const uno = () => {
//   return "iam one";
// };
// // set Timeout
// let message =() =>{
//     console.log('greetings from setTimeout')
// }
// setTimeout(message,5000)

// const dos = () => {
//  return new Promise((resolve,reject) =>{
//   setTimeout(() =>{
//       resolve( "iam two");
//   },3000);
//  })
// };
// dos();

// const tres =() =>{
//     return "iam three"
// }

//  const callMe = async() =>{
//      let valOne = uno();
//      console.log(valOne);

//      let valtwo =await  dos();
//      console.log(valtwo);

//      let valthree = tres();
//      console.log(valthree);
//  };

//  callMe();

// var x;
// console.log(x); //undefined
// x=23;

// y=30
// console.log(y); // 30
// var y;

// var x =3;
// var y =4;
// if(x){
//     console.log(x);
// }
// if (y){
//     console.log(y);
// }

// for (let i=0; i<10;i++){
//     setTimeout(function(){
//         console.log("the number" +i)
//     });
// }

// const a = { x: 1, y: 2 };
// const b = a;
// b.x = 3;
// console.log(a);
// console.log(b);

// // var promise = new Promise(function(resolve, reject) {
// //     const x = "geeksforgeeks";
// //     const y = "geeksforgeeks"
// //     if(x === y) {
// //       resolve();
// //     } else {
// //       reject();
// //     }
// //   });

// //   promise.
// //       then(function () {
// //           console.log('Success, You are a GEEK');
// //       }).
// //       catch(function () {
// //           console.log('Some error has occurred');
// //       });

// var promise = new Promise(function (reslove, reject) {
//   const x = "Tom";
//   const y = "Tom";
//   if (x == y) {
//     reslove();
//   } else {
//     reject();
//   }
// });

// promise.then(function(){
// console.log('Sucess');
// }).catch(function(){
//     console.log('Error')
// })

// var promise = new  Promise(function(reslove,reject){
//     var a = 1;
//     var b= 2;
//     if(a==b){
//         reslove()
//     }else{
//         reject()
//     }
// })

// promise.then(function(){
//     console.log("yes its equal");
// }).catch(function(){
//     console.log("Not equal")
// })

//destructing to get third element in new variable
// const vehicles = ['mustang', 'f-150', 'expedition'];
// const [...suv] = vehicles;
// console.log(vehicles)

// // spread operator two combine two arrays
// const arrayOne = ['a', 'b', 'c'];
// const arrayTwo = [1, 2, 3];
// const arraysCombined = [...arrayOne, ...arrayTwo];
// console.log(arraysCombined)

// function myFn() {
//   var x = 10;
//   console.log(x); //prints 10
// }
// console.log(x); // ReferenceError: x is not defined
// myFn();

// creates a non-extensible object
// it wont update one the object is frezzed
// var obj = {
//   // assigns 10 to value
//   value: 10,
// };

// Object.freeze(obj);
// the value gets updated to 10
// obj.value = 60;
// console.log(obj.value);

// adding and deleting  property to obj
// let obj2 = {
//   name: "Krunal",
//   age: 27,
//   education: "Engineer",
// };

// console.log(obj2)
// obj2.college = 'VVP';
// obj2.surname ='Duddukunta'
// delete obj2.surname;
// console.log('After adding a property using dot syntax');
// console.log(obj2);

// using ... operator we can delete key from object
// let myObject = {
//   "ircEvent": "PRIVMSG",
//   "method": "newURI",
//   "regex": "^http://.*"
// };
// const {regex, ...newObj} = myObject;
// console.log(newObj);   // has no 'regex' key
// console.log(myObject); // remains unchanged

// Spread operator
// const arr = ["Joy", "Wangari", "Warugu"];
// const newArr = ["divya",...arr,"joykare"];
// console.log(newArr);

// function add(a, b, c) {
//   return a + b + c ;
// }
// const args = [1, 2, 3];
// add(...args);

// rest opertor
// function add(...args) {
//   let result = 0;
//   for (let arg of args) result += arg;
//   return result
// }
// add(1) // returns 1
// add(1,2) // returns 3
// add(1, 2, 3, 4, 5) // returns 15

// //spread
// abc = [1,2,3]
// xyz = [...abc,5,6,7]
// console.log(xyz)

// rest
// function  sum (a,...b){
//   console.log(a)
//   console.log(b)
// sum = a+b;
// console.log(sum)
// }
// sum(1,2,3);

// function fun(...input){
//   let sum = 0;
//   for(let i of input){
//       sum+=i;
//   }
//   return sum;
// }
// console.log(fun(1,2)); //3
// console.log(fun(1,2,3)); //6
// console.log(fun(1,2,3,4,5)); //1

// LET KEYWORD
// can't redcelared
// let divya ="female";
// let divya ="asd"; // gives can't delared same name

// can't declare before use
// console.log(hello);
//  let hello =[3,5,6,]

// variables declare can't acessed outside of the block
// {
//   let chinni= 99
// }
// console.log(chinni); // variable not defined

// VAR KEYWORD
// var keyword can't have the block scope
// {
//   var chinni= 99
// }
// console.log(chinni);  // 99
// // delcring with var it impose problms
// var d = 10;
// {
//   var d = 11;
// }
// console.log(d) // it tooks from the latest declartion

// declaring with same variable name it wont come
// var apple ="red"
// var apple ="white"
// console.log(apple)// gives latest declare

// CONST
//  we can't delcare wih same varibale and we can't change value of variable once its declared
// const tea = 1;
// tea =2;
// console.log(tea)

//we can't acess out of the function any of the three keywords
// keyword= () =>{
// var power = "2u"
// let energy = "3u";
// const ampere = "7k"
// console.log(power);
// console.log(energy);
// console.log(ampere);
// }
// console.log(power);
// console.log(energy);
// console.log(ampere);
// keyword();

//  hoisting with var
// q = 80;
// var q;
// console.log(q) // it gives 80 because hoisting mechansim works here with var,
// //  we can ddelcrae variable before intiliase with varible
// console.log(t);
// t = 50;
// var t; // undefined, because we can't consloe before declare

//  hoisting with  let and const
// // s = 80;
// // let  s;
//  console.log(s);// here can't acess before intailzation error will come

//  console.log(e);
// e = 66;
// let  e; // here also same like above
// //  same for CONST hoisting will work only with var

// closure
// var addTo = () => {
//   var inner = 4;
//  function printName() {
//     console.log(inner);
//   };
//   return printName;
// };
// addTo();

// closure
// const myName = "divs";
// function printName(){
//   var inner =4;
//   console.log(inner)
// }
// printName();
// The function scope is created for a function call, not for the function itself
// Every function call creates a new scope

// closure
// function buildName(name) {
//   var greeting = "Hello, " + name + "!";
//   var sayName = function() {
//       var welcome = greeting + " Welcome!";
//       console.log(greeting);
//   };
//   return sayName;
// }

// var sayMyName = buildName("John");
// sayMyName();  // Hello, John. Welcome!
// sayMyName();  // Hello, John. Welcome!
// sayMyName();  // Hello, John. Welcome!
// // A closure is a function which has access to the variable from another function’s scope.
// // This is accomplished by creating a function inside a function. Of course, the outer function does not have access to the inner scope.
// divya = () =>{

// }

// function init() {
//     var name = 'Mozilla'; // name is a local variable created by init
//     function displayName() { // displayName() is the inner function, a closure
//       alert(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();

//   var today = new Date();
//

// var date = today.getFullYear()+'_'+(today.getMonth()+1)+'-'+today.getDate();
// var time = today.toTimeString().split(" ")[0];
// console.log(time)

// deep clone
// var employee ={
//   name : "Divya",
//   tech :"develper"
// }
// var NewEmplyee = (JSON.parse(JSON.stringify(employee)));
// console.log(NewEmplyee);
// const numbers = [1, [2], [3, [4]], 5];
// // Using JavaScript
//  console.log(JSON.parse(JSON.stringify(numbers)));
// // Using Lodash
// // _.cloneDeep(numbers);

// // call

// var object1 ={
//   name :'divya'
// }
// var surname = function(a,b,c){
//   return this.name + "" +a+b+c
// }

// // apply
// array =[1,2,3,4]
// console.log(surname.call(object1,1,2,3));
// console.log(surname.apply(object1,array))

// // bind
// let dummy = surname.bind(object1,1,2,3);
// console.dir(dummy);

// function sum (){
//   var = 'name'
// }

// for loop with settime out
//  printFunc =() => {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//      console.log(i)
//     },i*1000);
//   }
// }
// printFunc();

// const string = `this is
//  queen`
// console.log(string)

// for (let i = 1; i <= 5; i++) {
//      setTimeout(function() { console.log(i) }, i*1000);
//  }

// map
// let arr = [1, 6, 7, 9];
// let result = arr.map(x => x * 2);
// console.log(result);

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(item => item * 2);
// console.log(doubled); // [2, 4, 6, 8]

// filter ==> it filiters the whatevr condition we have given aon ecah elemnet and returns the new aary
// const arr = [1,2,3,4,5,6]
// const newarr = arr.filter(a => a%2 ===0)
// console.log(newarr);

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(item => item * 2);
// console.log(doubled); //

// // map ==> it maps each element in an array and do whateven condtion you provided
// const arrmap = [1,2,3,4,5,6]
// const newarrmap = arrmap.map(a => a*a)
// console.log(newarrmap);

// // reduce its accpets 2 paramaters and one is 2 variables and one is intial value and sums up the aary and return value
// const arrreduce = [1,2,3,4,5,6]
// const newarrreduce = arrreduce.reduce((num1, num2) =>{
//      return num1+num2;
// })
// console.log(newarrreduce)

// Splice
// const arr = [1,2,3,4,5,6]
// const newarr = arr.splice(0.2)
// console.log(newarr);

// const points = [40, 20,120];
// console.log(points.sort(function(a, b){return a -b }));

// Sai interview question
// const a = [1,2,3].filter(b => {
//   b = b +3;
//   return b;
//   //4,5,6
// })
// const a = [1,2,3].filter(b => {
//   console.log(b-1)
//   // return b - 1; 0,1,2
// });

// const a = [1,2,3].filter(b => {
//   b = b +3;
//   return b; // 4,5,6
// }).forEach(c => c + 1)
// console.log(c) // 5,6,7

// Slice
// arr = ["apple", "orange", "guava", "banana", "strawberry", "spota"];
// newArr = arr.slice(2, 5);
// console.log(newArr);

// // Splice ==>to remove elements
// splicearr = [1, 2, 3, 4, 5, 6];
// newSplice = splicearr.splice(3, 5);
// console.log(newSplice); // [4,5,6]

// splice ==> to add elements
// spliceaddarr = [1, 2, 3, 4, 5, 6];
//  spliceaddarr.splice(6,1,  7, 8, 9);
// console.log(spliceaddarr);

// let bread = ["loaf1", "loaf2", "loaf3", "loaf4", "loaf5", "loaf6"];
// bread.splice(3, 0, "newLoaf1", "newLoaf2");
// console.log(bread);

// splice to add and remove
// addremove = [1,2,3,4,5,6]
//  addremove.splice(0,2,11,12)
// console.log(addremove)

// let bread1 = ['loaf1','loaf2','loaf3','loaf4','loaf5','loaf6'];
// bread1.splice(1, 3, 1, 2);
// console.log(bread1);

// splice
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// //inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
//  // expected output: Array ["Jan", "Feb", "March", "April", "May"]

// hoisting

// console.log(message);
//  var message = 'The variable Has been hoisted';

// closure

// function Welcome(name){
//   var greetingInfo = function(message){
//     console.log(message+' '+name);
//    }
//  return greetingInfo;
//  }
//  var myFunction = Welcome('John');
//  myFunction('Welcome '); //Output: Welcome John
//  myFunction('Hello Mr.'); //output: Hello Mr.John

//  promise

//  const promise = new Promise(reslove =>{
//           console.log(1)
//          reslove('iam a good girl')
//          console.log(2)

//  },
//  reject ={

//  });
//  promise.then(value =>console.log(value));

// strict mode

// "use strict";
// x = 3.14; // This will cause an error because x is not declared
// // and if you declare inside a function, it has local scope

// x = 3.14;       // This will not cause an error.
// myFunction();

// function myFunction() {
//   "use strict";
//   y = 3.14;   // This will cause an error
// }

// set time out and set time intervel
// setTimeout(function (){
//     console.log('gm')
// },2000)

// setInterval(function() {
//     console.log('gm')
// }, 2000);

// check object is frezze or not
// const object = {
//     property: 'Welcome JS world'
//  };
//  Object.freeze(object);
//  console.log(Object.isFrozen(object));
//  console.log(10 + '10');
// console.log(10 - '10');
// console.log(NaN === NaN);

// const sym1 = Symbol('one');
// const sym2 = Symbol('one');

// const sym3 = Symbol.for('two');
// const sym4 = Symbol.for('two');

// console.log(sym1 === sym2, sym3 === sym4);

// console.log(typeof typeof typeof true);

// itemname = 'Dosa'
// timestring = '17:00-21:00,7:00-10:00,10:45-12:00'

// let CurrentTime = getTime();

// console.log(CurrentTime)
// function IsItemAvailable(itemname,timestring){
// if(CurrentTime === timestring){

//   return console.log('Dosa available')
// }else{
//     return console.log('Dosa  not available')
// }

// }

// IsItemAvailable();

// const d = new Date();
// console.log(d)

// splice example
// array1 = [1,2,3,4]
// array1.splice(1,2);
// console.log(array1);

// const a = {};
// console.log(a)
// const b = { key: 'b' };
// const c = { key: 'c' };
// a[b] = 123;
// console.log(a)
// a[c] = 456;
// console.log(a[b]);
// console.log(a)

// for(var i = 0; i < 3; i++) setTimeout(()=>console.log(i),1);
// for(let i = 0; i < 3; i++) setTimeout(()=>console.log(i),1);

//  link =0.2 + 0.1 === 0.3
//  console.log(link)

// tur = true =='ture'
// console.log(tur)

// add = 1+2+ '3'
// console.log(add)

// const command = process.argv[2];
// console.log(process.argv);

// // console.log("greensmf");
// if (command == "add") {
//   console.log("adding note!");
// } else if (command == "remove") {
//   console.log("removing note!");
// }

// const yargs = require("yargs");

// yargs.version("1.1.0");

// // create add command

// yargs.command({
//   command: "add",
//   describe: "adding a new",
//   builder:{
//     title:{
//       describe:'note title',
//       demandOption:true,
//       type:'string'
//     }
//   },
//   handler: function () {
//     console.log("adding notes");
//   },
// });

// // create remove command
// yargs.command({
//   command: "remove",
//   describe: "removing a new",
//   handler: function () {
//     console.log("removing notes");
//   },
// });
// console.log(yargs.argv)



//   let input =[{id:1, value: 20},{id: 2, value: 25},{id:3, value: 2},{id: 1, value: 4},{id: 2, value: 6}];
// // Output: [{id:1, value: 24},{id: 2, value: 31},{id:3, value: 2}];

// let newinput = input.includes(obj,0)
// console.log(newinput);

// var arry = [];
// if(arry){
//    console.log(typeof(arry)) 
// }else{

// }

// console.log(true && 'hi')
// console.log(true && 'hi' && 1)
// console.log(true &&  "" &&0)

// console.log(eval('1+2'));
// console.log(typeof(NaN))

// Array.prototype.reduceAlbums = function(callback, initialValue) {
//    var accumulator = initialValue === undefined ? undefined : initialValue
 
//    for (var i = 0; i < this.length; i++) {
//      if (accumulator !== undefined) {
//        accumulator = callback.call(undefined, accumulator, this[i], i, this)
//      } else {
//        accumulator = this[i]
//      }
//    }
//    return accumulator
//  } // our polyfill for reduce
 
//  var logicAlbums = [
//    'Bobby Tarantino',
//    'The Incredible True Story',
//    'Supermarket',
//    'Under Pressure',
//  ]
 
//  var combineAlbums = logicAlbums.reduceAlbums(function(a, b) {
//    return a + ' , ' + b
//  }, 'Young Sinatra') // Initial Value is Young Sinatra
 
//  console.log(combineAlbums)
//  // Young Sinatra , Bobby Tarantino , The Incredible True Story , Supermarket , Under Pressure



// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number) {
//    console.log(number);
// });

// polyfill for bind
// let name ={
//    firstname:'Divya',
//    lastname:'D'
// }

// let printName =function(){
//    console.log(this.firstname+ "" +this.lastname)
// }

// let printmyName =printName.bind(name,'aaa')

// Function.prototype.mybind = function(...args){
//    let obj = this,
//    params = args.slice(1)
//    return function (...args2){
//    obj.call(args[0], [...params,...args2])
//    }
// }

// let printmyName2 =printName.mybind(name,"aaaa");
// printmyName2();

// // ployfill for call apply bind


// const test ={
//    a:123,
//    b:456,
// }

// Function.prototype.myCall =function(scope, ...args){
// scope._this = this;
// return scope._this(...args)
// }

// console.log(testers.myCall(test,90))




// const obj = {
//    a: 1,
//    b: 2,
//    c: 3,
//    d: 4,
//    e: 5
//  };
//  const {
//    b,
//    d
//  } = obj;
//  console.log(b); // 2
//  console.log(d); // 4
//  console.log(obj); // { a: 1, c: 3, e: 5 }


//  let numbers = [2, 4, 6, 8, 10];
 // function to return the square of a number
//  function square(number) {
//    return number * number;
//  }
 
 // apply square() function to each item of the numbers list
//  let square_numbers = numbers.map(square);
//  console.log(square_numbers);
 
 // Output: [ 4, 16, 36, 64, 100 ]

 const obj={
    x: function () {
    console.log(this)
    const y=() =>{
    setTimeout(() => console.log(this),0);
    }
    y();
    }
    }
    obj.x();

var sub ="Artificial Intelligence"
console.log(sub.slice(6,2));
//  in your example, the start index (6) is greater than the end index (2),
//  which is not the correct order. The start index should be less than the end index.

const array1 = [1, 4, 9, 16];

// Pass a function to map
// const map1 = array1.map((x) => x * 2);
const map1 = array1.map((x) => x*2)


console.log(map1);
// Expected output: Array [2, 8, 18, 32]
    





