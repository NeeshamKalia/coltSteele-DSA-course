
function bubble(arr){
    for (let i = 0; i < arr.length; i++) {
        let swap = false;
        for(let j = 0; j < arr.length-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                swapped = true;


                    }        }
    if(swapped==false)break;
}
return arr;
}
const arr = [5,5,6,10,9,-1,67,0,90,3,5,4,-90,-900]
console.log(bubble(arr))
