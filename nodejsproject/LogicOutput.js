var a = {n:1}
var b=a;
a.x = a = {n:2}
console.log(a.x)
console.log(b.x)
console.log(a.n)
console.log(b.n)


const numbers = [1,2,3,4,5]
let sum = 0;
let index =0;while(index<numbers.length){
if(numbers[index]%2 !==0){
sum+= numbers[index]
}
index++;
}

console.log(sum);