function rotationArray(arr,rotations){
    const length = arr.length;
     rotations = rotations % length;
    
    for(let i=0; i<rotations; i++){
    const lastElement = arr.pop();
    arr.unshift(lastElement);
    console.log(`After each rotation ${i+1}:`, arr);
    }
    return arr;
    }
    
    const result = rotationArray(arr,n);
    
    console.log("result",result)



    let arr = ["india", "france","itly","finland","srilanka"]

const groupCountry = arr.reduce((acc,country) =>{
const firstLetter =  country[0].toUpperCase();
if(!acc[firstLetter]){
acc[firstLetter] =[];
}
acc[firstLetter].push(country); 
return acc;
},{})

console.log(groupCountry)