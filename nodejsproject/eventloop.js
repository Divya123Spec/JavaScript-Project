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

 
 
 
 
 
 
 