//write a function to reverse an array using recursion

function reverse (arr,res=[]){

    if(arr.length ===0) return res;
    res.push(arr[arr.length -1])
    return (reverse(arr.slice(0,arr.length-1),res) )
}


console.log(reverseArr([1,2,3,4]))

function swap(x,y){
    x = x + y;
    y = x - y;
    x = x - y;

}
function reverseArr(arr, i=0){
    if(i >= arr.length /2) return arr;
    //swapping
    arr[i] = arr[i] + arr[arr.length - 1 -i]
    arr[arr.length -1 -i] = arr[i] - arr[arr.length-i-1]
    arr[i] = arr[i] - arr[arr.length-i-1]

    return ( reverseArr(arr,i+1))
}
