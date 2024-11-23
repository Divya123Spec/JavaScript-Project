let arr = [1, 2, 3, 4, 5, 8, 7, 8];

// Remove duplicates and sort the array in descending order
let uniqueArr = [...new Set(arr)].sort((a, b) => b - a);

let secondLargests = uniqueArr[1]; // The second element in the sorted array
console.log(secondLargests);



let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    // Update second largest before updating the largest
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest && arr[i] < largest) {
    // Update second largest if the current element is between largest and second largest
    secondLargest = arr[i];
  }
}

console.log(secondLargest); // Output: 7

