// Approach 1: Using a for loop
function reverseString(str) {
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
//   Approach 2: Using split(), reduce()

function reverseString(str) {
    return str.split('').reduce((rev, chars) => char + rev, '');
  }

//   Approach 3: Recursion
function reverseString(str) {
    if (str === "") return "";
    return reverseString(str.slice(1)) + str[0];
  }
  