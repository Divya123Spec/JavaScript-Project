var i = 3;
function x() {
  setTimeout(function () {
    console.log(i);
  }, 1000);
  console.log("java");
}
// x(); // it will give fist java consloe then wait then give i , js doest not wait for anything

const { reject, uniq } = require("lodash");
const { array } = require("yargs");

// function x() {
//   for (let q = 1; q <= 5; q++) {
//     setTimeout(function () {
//       console.log(q);
//     }, q*1000);
//   }
//   console.log("java");
// }
// x();

// function x() {
//   for (var q = 1; q <= 5; q++) {
//     function close() {
//       setTimeout(function () {
//         console.log(q);
//       }, q * 1000);
//     }
//     close(i);
//   }
//   console.log("java");
// }
// x();

// let b = true;
//  setTimeout(() =>{
//    b = false;
//  },2000)

//  while(b){
//    console.log('hello')
//  }


 let arrayofarrys =[1,2,3,[4,5,6],[7,8,9]]
 flatarry = arrayofarrys.flat(3);
 console.log(flatarry);
 var d = "a ab abcd aaaaabcd abcdddef";
 new Set(d);
 console.log(d);


 var x = "sk ab rwtasaas ratwuysssweeaq tehsgetsstgggs"
x = x.split(",")
// x = Array.from(new Set(x.split(',')));
console.log(x); //

// function findLongestWord(str) {
//   var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
//   console.log(longestWord[0])
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");


// function longest(str){
//   str = str.split(' ');
//   console.log(str)
//   console.log( str.sort((a, b) => b.length - a.length)[0]);
//   }
//   longest("sk ab rwtasaas ratwuysssweeaq tehsgetsstgggs")

// function removeDuplicateCharacters(string) {
//   return string
//     .split('')
//     .filter(function(item, pos, self) {
//       return self.indexOf(item) == pos;
//     })
//     .join('');
// }
// console.log(removeDuplicateCharacters('sk ab rwtasaas ratwuysssweeaq tehsgetsstgggs'));



// var a = "sk ab rwtasaas ratwuysssweeaq tehsgetsstgggs";
// var x1 = a.split(" ");
// var x2 = [];
// x1.forEach((e) => {
//   var x3 = new Set(e);
//   x2.push(Array.from(x3).join(""))
//   console.log(x2);
// });
// console.log(x2);

// function longest(str){
//   console.log( str.sort((a, b) => b.length - a.length)[0]);
//   }
//   longest(x2) // here we have to pass x2



//higher order component
// function add (a, b) {  
//   return a + b  
// }  
// function higherOrder(a, addReference) {  
//   return addReference(a, 20)  
// }  
// //Function call  
// higherOrder(30, add) // 50 


// async
// const getData = async() => {
//     var data = "Hello World";
//     return data;
// }
  
// getData().then(data => console.log(data));


// await
// const getData = async() => {
//     var y = await "Hello World";
//     console.log(y);
// }
  
// console.log(1);
// getData();
// console.log(2);


// copy1 ={
//     name :'divya',
//     lastanme: 'dudduunta'
// }
//  copy2 =JSON.parse(JSON.stringify(copy1))
//  console.log(copy2)





// interveiw questions
var  x = 5;
console.log(x === 5)


let abc ={
    passenger:{
        name:'divya',
        age:24
    }
}

let xyz = {...abc}
xyz.passenger.name ="duddukunta"
console.log(abc.passenger.name)



// call apply bind 
// var employee1 = {firstName: 'John', lastName: 'Rodson'};
// var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

// function invite(greeting1, greeting2) {
//     console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
// }

// // The call() method invokes a function with a given this value and arguments provided one by one
// invite.call(employee1, 'Hello', 'How are you?'); // Hello John Rodson, How are you?
// invite.call(employee2, 'Hello', 'How are you?'); // Hello Jimmy Baily, How are you?

// // apply Invokes the function with a given this value and allows you to pass in arguments as an array
// invite.apply(employee1, ['Hello', 'How are you?']); // Hello John Rodson, How are you?
// invite.apply(employee2, ['Hello', 'How are you?']); // Hello Jimmy Baily, How are you?


// // bind  returns a new function, allowing you to pass any number of arguments
// var inviteEmployee1 = invite.bind(employee1);
// var inviteEmployee2 = invite.bind(employee2);
// inviteEmployee1('Hello', 'How are you?'); // Hello John Rodson, How are you?
// inviteEmployee2('Hello', 'How are you?'); // Hello Jimmy Baily, How are you?


//memoization
// const memoizAddition = () => {
//     let cache = {};
//    return (value) => {
//     if (value in cache) {
//      console.log('Fetching from cache');
//      return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
//     }
//     else {
//      console.log('Calculating result');
//      let result = value + 20;
//      cache[value] = result;
//      return result;
//     }
//    }
//   }
  // returned function from memoizAddition
//   const addition = memoizAddition();
//   console.log(addition(20)); //output: 40 calculated
//   console.log(addition(20)); //output: 40 cached


//   current date
// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;
// document.write(today);





// let zero = new Number(0);

//  console.log(zero)
// if (zero) {
//   console.log("If");
// } else {
//   console.log("Else");
// }

// Split

// let  string = 'Divya  is good girl';
//  let abc =string.split(' ')
// console.log(abc[3]);


// let str = 'The quick brown fox jumps over the lazy dog.';
// let words = str.split(' ');
// console.log(words[3]);


// for(var i=0; i<5; i++){
//     abc(i); 
//    }
   
//     function abc(i){
//      setTimeout(function() {
//        console.log(i);
//      }, 1000); 
//    }

  //  promises

  // let p = new Promise ((resolve,reject) =>{
  // let a =1+1 
  // if(a==2){
  //   resolve("Success")
  // }else{
  //   reject('failed')
  // }
  // })   

  // p.then((message) =>{
  //   console.log('this is in the then ' + message)
  // }).catch((message) =>{
  //   console.log('this is in the catch' +message)
  // })

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3 * 100);
// });
// p.then((result) => {
//     console.log(result); // 10
//     return result * 2;
// }).then((result) => {
//     console.log(result); // 20
//     return result * 3;
// }).then((result) => {
//     console.log(result); // 60
//     return result * 4;
// });

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('The first promise has resolved');
//     resolve(10);
//   }, 1 * 1000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('The second promise has resolved');
//     resolve(20);
//   }, 2 * 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('The third promise has resolved');
//     resolve(30);
//   }, 3 * 1000);
// });

// Promise.all([p1, p2, p3]).then((results) => {
//   const total = results.reduce((p, c) => p + c);

//   console.log(`Results: ${results}`);
//   console.log(`Total: ${total}`);
// });


// Array featres

const example = ({ a, b, c }) => {
  console.log(a, b, c);
 };
 example(0, 1, 2);


 function sum(a) {
  return (b) => {
      return (c) => {
          return a + b + c
      }
  }
}
console.log(sum(1)(2)(3)) // 6


function prime(num){
  if(num<=0){
    return false;
  }
  for(i=1;i<=Math.sqrt(num);i++){
    if(num % i ===0){
    return false
    }else{
      return true
    }
  }
}

let num = 17;
if (prime(num)) {
  console.log(num + " is a prime number.");
} else {
  console.log(num + " is not a prime number.");
}




// function longeststr(tsr) {
//     let lon = tsr.split('')
//   console.log("longest",lon.sort((a,b) =>b.length-a.length)[0])
//   // console.log( str.sort((a, b) => b.length - a.length)[0]);
// }

// longeststr("sk ab rwtasaas ratwuysssweeaq tehsgetsstgggs")


function removeDuplicates(inputString){
  const charArray = inputString.split('');
  const uniqchar = [...new Set(charArray)]
 
  const finalchar = uniqchar.join('')
  console.log(finalchar)
}


removeDuplicates("wertuioporeertuioiuyretyuio")

function* foo() {
  yield 'a';
  yield 'b';
  yield 'c';
}
const foogee = foo();
console.log('getting the first value');
console.log(foogee.next());
console.log('getting the next value');
console.log(foogee.next());
console.log('getting the next value');
console.log(foogee.next());
console.log('getting the next value');
console.log(foogee.next());