function isPalindrome(str) {
    // Base case: if the string is empty or has one character
    if (str.length <= 1) {
        return true;
    }

    // Compare the first and last characters
    if (str[0] !== str[str.length - 1]) {
        return false; // Not a palindrome
    }

    // Recursive case: check the substring excluding the first and last characters
    return isPalindrome(str.slice(1, str.length - 1));
}

// Test cases
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));    // Output: false
console.log(isPalindrome("level"));    // Output: true
console.log(isPalindrome("world"));    // Output: false



function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  }
  
  // Example usage:
  console.log(isPalindrome("racecar")); // Output: true
  console.log(isPalindrome("hello")); // Output: false