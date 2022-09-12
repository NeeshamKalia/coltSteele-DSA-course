//Function to find the maximum occurring character in a string.
function getMaxOccuringChar(str)
{

    str = str.split('');  //for maximum occuring string use the .split(' ')
    str = str.sort()
    let freq = new Map()
    for(let i =0; i<str.length; i++){
        if(freq.get(str[i]) == undefined){
            freq.set(str[i],1)
        }
        else {
            freq.set(str[i], freq.get(str[i]) + 1)
        }
    }
    let max = 0, ele;
    for(let pair of freq){
        if(pair[1] > max){
            max = pair[1]
            ele = pair[0]
        }
    }return ele;
}

console.log(getMaxOccuringChar("timespaacesin"))
