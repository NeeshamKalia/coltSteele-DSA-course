// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities: Time: O(N)

function sameFrequency(a,b){
    a = a.toString();
    b = b.toString();
    if(a.length != b.length){ return false; }
    const obj = {};
    for(let i of a){
        obj[i] = obj[i] + 1 || 1;
    }
    for(let dig of b){
        if(!(obj[dig])){return false;}
        obj[dig] -= 1;
    }
    return true;
}










console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
