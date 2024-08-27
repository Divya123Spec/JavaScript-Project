// Write a code to display which character is coming how many times in a given string ?

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
