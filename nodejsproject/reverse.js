

let arr = [1,2,3,4,5]
// reverse array without methods
function reverseArr () {
    let start =0 ;
    let end = arr.length-1;
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end]
        arr[end] = temp;

    start++;
    end--;
    }
    return arr;
}
console.log("1",reverseArr(arr));

// reverse array with methods
let reverseArr2 = arr.reverse();
console.log('2',reverseArr2);

// reverse the string 
let name ="Divya"
let revserStr = name.split("").reverse().join("");
console.log(revserStr,"revserStr");

// reverse the sentence
let str = "my name is Divya"
let reverseStr = str.split("").reverse().join("")
console.log("reverseStr",reverseStr)

let palindrome = "madam";
let output = palindrome.split("").reverse().join("");
console.log("output",output)

// reverse or palindrome without methods
let str2 ="leel"
function reverseString(str){
    let start = 0;
    let reversedstr  = '';
    let end = str2.length -1;
    while(end >= start){
       reversedstr +=str[end]
        end --;
    }

    return reversedstr;
}

function palindrome3(str){
    let reversedstr2 = reverseString(str2)
return str === reversedstr2
}
console.log(reverseString(str2));
console.log(palindrome3(str2))