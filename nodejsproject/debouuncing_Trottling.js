// Debounce and throttling are the two important concepts in javascript.
// Both are used to optimize the performance of the web application.
// Debounce is the tequnique to limit the number of funtion is called in particular time
// Trottling is atechnique to limit the number of functions is called in a particular time

const { example } = require("yargs");

// example of debounce
// when you have search functionality on every key press you are making an api call
// now you use debounce to limit the then number of api calls
// take diff b/w tow key press and if it is greater than 300ms then only make an api call

// when you want to track the user resize window event, how many times user resize the window
// you can use debounce to limit the number of times the function is called
// you can use debounce function if the call resize is greater than 300ms then only call the function

// example of throttling => after every interval of time call the function
// difference between two functional calls should be greater than 300ms
// When you want to track the user resize window event, how many times user resize the window

// you can use throttling to limit the number of times the function is called
// you can use trottling function by every 100ms call the function

// example of debounce  on button click(shooting game)
// when user clicks again again on the button,
// diffrence b.w tow clicks is greater than 300ms then only call the function again make a function call
// if the difference is greater than 300ms then do not call the function

// example of throttling on button click(shooting game)
// when user clicks again again on the button,
// call the function after every 300ms and do not call the function before 300ms
// in this example throttling is used to limit the number of function calls better than debounce

// I think to put it together, in cases where user waits after action we use debouncing
// and in cases where user wants result during action, we implement throttling.
