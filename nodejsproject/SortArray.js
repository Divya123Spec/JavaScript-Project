const fruits = ["banana", "apple", "orange", "grape", "kiwi"];

// Task 1: Sort the array of fruits in alphabetical order (default behavior)
// Task 2: Sort the array of fruits in descending alphabetical order
// Task 3: Sort the array of fruits based on the length of the fruit names in ascending order
// Task 4: Sort the array of fruits in ascending order by the second character of each fruit name

let fruits1 = fruits.sort();
console.log(fruits1)

let fruits2 = fruits.sort((a,b) => b.localeCompare(a));
console.log(fruits2)

let fruits3 = fruits.sort((a,b) => a.length-b.length)
console.log(fruits3)

let fruits4 = fruits.sort((a,b) =>a[1].localeCompare(b[1]))
console.log(fruits4);