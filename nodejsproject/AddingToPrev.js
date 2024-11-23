let input = [1,2,3,4,5]

function recFunc(input){
let result = [];
let sum =0 ;
for(i=0;i<input.length;i++){
sum +=input[i]
result.push(sum)
}
return result
}

console.log(recFunc(input))