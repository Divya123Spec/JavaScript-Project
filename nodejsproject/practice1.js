/* const promise = new Promise((reslove,reject) =>{
const success = true;
if(success){
reslove("promise is resloved")
}else{
reject("promise is rejected")
}
}) */

/* myPromise 
.then((messgae) =>{
console.log("message")
})
.catch((message) =>{
console.log("error")
}) */

/* function multiply(a){
return function(b){
 return a*b
}
}

const triple = multiply(3)
console.log(triple(5)) */


/* 
const obj ={
name:"divs",
place:"bang"
}

const {name,place} = obj
console.log("name",name)


arr = [1,2,3,4]
let splied =arr.slice(0,2)
console.log(splied)

let a = "divu"
let c = a.split(" ")
console.log(c)


let stringi = JSON.stringify(obj)
console.log(stringi)
console.log(JSON.parse(stringi))

let array = [1,2,3,2,3,5,23,4212,1,1,23]
let removedupliacte = [...new Set(array)] 
console.log(removedupliacte); */


let obj1 ={}
let str2 = "Divya is Divs and place is place"

for(let x of str2){
if(obj1[x]){
obj1[x]= obj1[x] +1
}else{
obj1[x] = 1
}
}
console.log(obj1)

