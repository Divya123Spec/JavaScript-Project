/* Input: digits = [1,2,3]
Output: [1,2,4] */

let digits =[9,9]

function incrementDigit(digits){
for(let i = digits.length-1; 1>=0; i--){
if(digits[i] <9){
digits[i]++;
return digits;
}else{
digits[i] =0;
}
}
digits.unshift(1);
return digits;

}

const result = incrementDigit(digits);
console.log(result);

