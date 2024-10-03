// The event loop continuously checks the call stack and the callback queue.
// If the call stack is empty, it takes the first function from the callback queue and pushes it onto the call stack for execution.


/* let height = 0;
 console.log(height || 100); // (0 || 100) 
 
 console.log(height ?? 100); // (0 ?? 100 ) 
 
 
 displayConsole();
function displayConsole(){ 
  console.log(" Hello world! ");
} 



 */
/*  const user = {
   name: "John",
   age: 30
 };
 const [name,age] = {...user}
 
 console.log("name",name);
 console.log("age",age) */
 
 /* let user = {};
 console.log(user.address.street) 
 console.log(user?.address?.street) */
/*  
 const arr =[{a:1},{b:1}]
 const obj = [c:2]
 arr = 
 arr = [...{obj}]
 
 console.log("arr",arr) */
 
 
 
 
 
 const test = [{ name: 'name1', isStudent: true}, { name: 'name2', isStudent: false}, { name: 'name3', isStudent: true}];
 
 
/* Print list of names with isStudent: true. */

const filteredArr = test.filter((item) =>(
item.isStudent == true
))

let name  = []

filteredArr.map((item) =>{
 name.push(item.name)
   console.log(name)
})

 
 
// The event loop is an important part of the runtime that handles asynchronous code execution in a single-threaded environment.

// It works by always looping over two main components:

// the call stack, and
// the task queue
// The call stack is a data structure that tracks the execution of function calls. 
// When a function is called, it is added to the top of the call stack, 
// and when it finishes executing, it is removed from the stack.

// (The task queue is a data structure that tracks events that have completed, 
// but have not yet been added to the call stack).

// These events are typically asynchronous in nature, such as user input or network requests, 
// and so when an asynchronous event occurs, it is added to the task queue.
 
 
 
 