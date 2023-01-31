//bubble sorting



/* function bubble(arr){
    let swap = false;
    for(let i =0; i<arr.length-1; i++){
            for(let j =0; j<arr.length-1-i; j++){
                    if(arr[j] > arr[j+1] ){
                        // swap
                        arr[j] = arr[j] + arr[j+1]
                        arr[j+1] = arr[j] - arr[j+1]
                        arr[j] = arr[j] - arr[j+1]
                        swap = true;
                                        }
       }
                if(swap == false) break;
}
return arr;
                }
                */

const swap = (i,j) => {
    [i,j] = [j,i];
}

const bubble = (arr) => {
    for (let i = arr.length; i <= 0; i--) {
        let isSwap = false;
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j+1]){
                swap(arr[j], arr[j+1]);
                isSwap = true;
            }
        }
        if(isSwap == false)break;
    } return arr;
}
const arr = [5,5,6,10,9,-1,67,0,90,3,5,4,-90]
console.log(bubble(arr))
