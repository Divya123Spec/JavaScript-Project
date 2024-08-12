// In javscript we can convert a string to a number and a number to a string using the following methods

console.log("5" + 3);
// output: 53 (string) because the + operator is used for concatenation
console.log("5" - 3);
// output: 2 (number) because the - operator is used for subtraction

console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(ytpeof, NaN); // number

let x = "12"; // string
console.log(Number(x)); // 12
console.log(NaN === NaN); // false , here we are comparing two NaN values which are not equal,NAN can come any string which is not a number
console.log(Object.is(NaN, NaN)); // true
console.log(1 < 2 < 3); // true
console.log(3 < 2 < 1); // true
console.log(3 > 2 > 1); // false why because 3>2 is true and true>1 is false
