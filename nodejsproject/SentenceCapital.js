/* hello my name is shashank */

function formatString(inputString){
    const countVowels =(str) =>{
    const vowels =['a', 'e','i','o','u'];
    let count = 0;
    
    for(let char of str.toLowerCase()){
    if(vowels.includes(char)){
    count++;
    }
    }
    return count;
    };
    
    const capitalzedWord = inputString.split(' ')
    .map(word=>word.charAt(0).toUpperCase()+
    word.slice(1).toLowerCase()).join(' ');
    
    const vowelCount = countVowels(inputString);
    
    return {
    capitalzedWord:capitalzedWord,
    vowelCount:vowelCount
    }
    
    }
    
    const inputString = "hello my name is shashank";
    const result = formatString(inputString);
    console.log("vowelCount",result.vowelCount);
    console.log("sentence",result.capitalzedWord)
    
    
    