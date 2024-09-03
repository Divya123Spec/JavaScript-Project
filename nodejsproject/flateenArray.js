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

let result = []
function falttensArr (arr){
  for(ele in arr){
    if(Array.Arrayof(arr)){
      falttensArr(ele)
    }else{
     result.push(ele)
    }
  }
}
falttensArr(array)
