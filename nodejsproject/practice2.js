/* let arr = [1, 2, 3, 4];

let remove = arr.splice(1,2,8)
console.log(remove)
console.log(arr) */

/* let lastArr = arr[arr.length-1]
console.log(lastArr)

let firstArr = arr[0]
console.log(firstArr)

arr.push(5)
console.log(arr)
arr.pop(5);
console.log(5)
console.log(arr) */

/* let indlues = arr.includes(4)

console.log(indlues) */


/* let arr = [1,2,3,4,5,6,7,8,9,1,2,3,]

function flattenArr(arr){
let result =[];
for(let ele of arr){
if(Array.isArray(ele)){
result = result.concat(flattenArr(ele))
}else{
result.push(ele)
}
}
return result;
}
console.log(flattenArr(arr))

let x = { b: 1, c: 2 };
let y = Object.values(x);
console.log(y); */


/* let x = '{ "b": 1, "c": 2 }';
let y = JSON.parse(x);
console.log(typeof y); */

/* let x = 0.1 + 0.2;
let y = 0.3;
console.log(x == y); */
/* let x = 1 > 2 > 3; // 
console.log(x); */

/* console.log(0 * [])



console.log(2 + '2' - 1);
console.log([] == ![]); */

/* console.log(typeof "number"); */


/* console.log([] + [] + 'foo'.split('')); */


/* var x = 0;
console.log(x++); // 0 , x=1
console.log(++x); // 2
console.log(!!null); //
console.log(!!undefined);
console.log(false == '0');
console.log(false === '0'); */

/* 

var a = { b: 1 };
var c = a;
a.b = 2;
console.log(c.b);
 */
 
/*  
 let arr = [1,4,6,2]
 let c = arr;
 let sorted  =arr.sort();
 console.log(c) */
/* 
console.log([] == ![]); 
console.log(!![]);
Array.prototype.sum = function() {
    return this.reduce((acc, curr) => acc + curr, 0);
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.sum()); */


/* const nestedObj = {
  name: "John",
  address: {
    city: "New York",
    zip: "10001",
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  }
};

const obj1 = Object.assign(nestedObj,{});
console.log("obj1",obj1)
obj1.address.city = "san Fransico";
obj1.name ='penny'
console.log(nestedObj)

const obj2 = JSON.parse(JSON.stringify(nestedObj))

obj2.address.city = 'bangalore';
obj2.name = "divya"
console.log(obj2);
console.log(nestedObj) */


/* 
let person = {

name: 'John',

age: 30,

greet: function() {

console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');

}

};

let greetFunc = person.greet;

greetFunc();  */


/* let person = {

name: 'John',

age: 30

} */
/* 
console.log(person.toString());  */
let person = {

    name: 'John',
    
    age: 30,
    toString :'qq'
    
    };
    
    console.log(person.hasOwnProperty('toString')); 
    
    console.log(Object.prototype.hasOwnProperty('toString')); 
    
    
    
    