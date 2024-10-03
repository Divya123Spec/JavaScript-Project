let arr = [1,2,3,4,1,3,5,6,7,8,4,5,6]
let removeDup = [...new Set(arr)];
console.log(removeDup)

function removeDuplicate(arr){
let result = [];
for(i=0; i<arr.length; i++){
if(!result.includes(arr[i])){
result.push(arr[i])
}
}
return result;
}

console.log(removeDuplicate(arr))


const removeDupliactes = arr.fliter((value, index,self) =>(
self.indexOf(value) === index))
