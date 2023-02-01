//selection sort;
const arr = [5,5,6,10,9,-1,67,0,90,3,5,4,-90,-900]
console.log(selection(arr))



function selection(arr){
    for(let i = 0; i < arr.length-1; i++){
        let min = arr[i], minIndex = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < min){
                min = arr[j];
                minIndex = j;
            }
        }
    if(min<arr[i]){
        [arr[minIndex], arr[i]] = [arr[i],arr[minIndex]]
    }
    }
return arr;
}
