// What is error handling in JavaScript?

// Error handling is a process of handling errors in a program.
// It is a way to deal with errors that might occur in a program.
// In JavaScript, error handling is done using try...catch statement.
// The try...catch statement allows you to catch errors that occur in a block of code and handle them gracefully.
// The try block contains the code that might throw an error.
// The catch block contains the code that handles the error.
// The finally block contains the code that is executed after the try block, regardless of whether an error occurred or not.
// Example:
try {
  const result = someUndefinedVariable + 10; // This will throw an error.
  console.log(result);
} catch (error) {
  console.log("An error occurred: " + error.message); // This will catch the error and log the error message.
} finally {
  console.log("This block always gets executed."); // This will always get executed.
}
// without Expection
try {
  console.log("Hello World");
} catch (error) {
  console.log("An error occurred: " + error.message);
} finally {
  console.log("This block always gets executed.");
}
// Output:
// An error occurred: someUndefinedVariable is not defined
// This block always gets executed.
// Hello World

// with exception
try {
  throw new Error("This is an error message.");
} catch (error) {
  console.log("An error occurred: " + error.message);
} finally {
  console.log("This block always gets executed.");
}
// Output:
// An error occurred: This is an error message.
// This block always gets executed.

// finally block always gets executed, regardless of whether an error occurred or not.
// Error handling is important in JavaScript to prevent the program from crashing when an error occurs.

// What is purpose of the trow statement in js?
// Throw statement stops the excution of the current function nad passes the error to the catch block of caling function.
// Example:
function UserData() {
  // this is caller function
  try {
    validateUserAge(10);
    validateUserAge("invalid");
    validateUserAge(20);
  } catch (error) {
    console.log(error);
  }
}

function validateUserAge(age) {
  // calling function
  if (typeof age !== "number") {
    throw new Error("Invalid age"); // here we are throwing an error if the age is not a number.
  }
  console.log("Valid age: " + age);
}
UserData();

// What is error Propagation in JavaScript?
// Error propagation is the process of passing errors from one function to another function.
// By using throw statement, we can propagate errors from one function to another function.
// Example:
function UserData() {
  try {
    validateUserAge(10);
    validateUserAge("invalid");
    validateUserAge(20);
  } catch (error) {
    console.log(error);
  }
}
function validateUserAge(age) {
  if (typeof age !== "number") {
    throw new Error("Invalid age"); // error propgation is done here.
  }
  console.log("Valid age: " + age);
}
UserData();

// What are the best practices for error handling in JavaScript?
// Use try...catch statement to handle errors gracefully.
// Always include a catch block to handle errors.
// Use throw statement to throw custom errors.
// Use finally block to execute cleanup code.
// Use Descriptive error messages.
// Log errors to the console or a log file.

// What are different types of errors in JavaScript?
// There are four types of errors in JavaScript:
// SyntaxError: This error occurs when there is a syntax error in the code.
// example:
console.log("Hello World"); // SyntaxError: Unexpected token ';'

// referenceError: This error occurs when trying to access a variable that is not defined.
// example:
console.log(someUndefinedVariable); // ReferenceError: someUndefinedVariable is not defined

// TypeError: This error occurs when a value is not of the expected type.
// example:
const result = someUndefinedVariable + 10; // TypeError: Cannot read property 'someUndefinedVariable' of undefined

// RangeError: This error occurs when a value is not within the expected range.
// example:
const arr = new Array(-1); // RangeError: Invalid array length
