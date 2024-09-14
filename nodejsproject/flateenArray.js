function flattenArray(arr) {
  let result = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item)); // Recursively flatten
    } else {
      result.push(item);
    }
  });

  return result;
}

let array = [10, 20, 46, [26, 47, [94, 37]], 27, [14, 93]];
let flattenedArray = flattenArray(array);

console.log(flattenedArray);


function falttensArr (arr){
  let result = []
  console.log(arr)
  for(let ele in arr){
    if(Array.isArray(ele)){
      falttensArr(ele)
    }else{
     result.push(ele)
    }
  }
  return result
}
console.log("falttensArr",falttensArr(array))


  
function flattenArr(arr) { 
  let result = [];
  for (let ele of arr) {
    if (Array.isArray(ele)) {
      result = result.concat(flattenArr(ele)); 
    } else {
      result.push(ele);
    }
  }
  return result;
}

let arr = [1, 2, 3, 4, [5, 6, 7], 8, 9, [6, 4]];
console.log(flattenArr(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 4]