// Method 1: Using Set (The One-Liner Magic)
let arr = [1, 2, 3, 4, 1, 3, 5, 6, 7, 8, 4, 5, 6];  
let removeDup = [...new Set(arr)];  
console.log(removeDup);

// Method 2: Using a Loop (The Classic Approach)

function removeDuplicate(arr) {  
    let result = [];  
    for (let i = 0; i < arr.length; i++) {  
      if (!result.includes(arr[i])) {  
        result.push(arr[i]);  
      }  
    }  
    return result;  
  }  
  console.log(removeDuplicate(arr));

//  sMethod 3: Using filter() (The Elegant Approach)
const removeDuplicates = arr.filter((value, index, self) => self.indexOf(value) === index);
console.log(removeDuplicates);


