var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };
console.log(a.x);
console.log(b.x);
console.log(a.n);
console.log(b.n);

//
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
let index = 0;
while (index < numbers.length) {
  if (numbers[index] % 2 !== 0) {
    sum += numbers[index];
  }
  index++;
}
console.log(sum);

//
var b = 4;
function outer() {
  var b = 5;
  function inner() {
    b++;
    var b = 6;
    console.log(b);
  }

  inner();
}
outer();

//
const a = { value: 1 };
Object.defineProperty(a, "value", { writable: false });
a.value = 2;
console.log(a.value);

//
let array = [5].push(6);
console.log(array.push(7));

//
console.log([] == false);


console.log('bar:', bar); 
bar = 15; 
var foo = 1;
console.log(foo, bar);
var bar;

//console.log(("one" < 8));  // false
 
//
var foo = 5
console.log( foo)
var foo;
var bar = 10;
var bar;
console.log( bar)
var baz = 10
var baz = 12
console.log( baz)

//
var x = 10;
function testNum() {
 console.log(x);
 if (true) {
 var x = 20;
 }
 console.log(x);
}
testNum();

