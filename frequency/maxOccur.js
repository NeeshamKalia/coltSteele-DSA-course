//find the max occurence of the element in an array;


const arr = [1,8,8,6,1,2,5,5,1,9,1,8,6,9,0,0,1,9,2,9,9];
function maxOccur(arr) {


let freq = new Map();
    for (let i = 0; i < arr.length; i++) {
        if(freq.get(arr[i])== undefined){
            freq.set(arr[i],1);
        }
        else{
            freq.set(arr[i], freq.get(arr[i]) + 1);
        }
    }
    let max = 0,element;
    for(let pair of freq){
        if(pair[1] > max){
            max = pair[1];
            element = pair[0];
        }
    }
    return element;

}
console.log(maxOccur(arr));
