function bubble(arr){
    let swap = false;
    for(let i =0; i<arr.length; i++){
            for(let j =0; j<arr.length-1; j++){
                    if(arr[j] > arr[j+1] ){
                        // swap
                        arr[j] = arr[j] + arr[j+1]
                        arr[j+1] = arr[j] - arr[j+1]
                        arr[j] = arr[j] - arr[j-1]
                        swap = true;
                                        }
       }
                if(swap == false) break;
}
return arr;
                }
const arr = [5,5,6,1]
console.log(bubble(arr))
