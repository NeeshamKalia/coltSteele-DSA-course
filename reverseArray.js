//Reverse an array withouit using extra array

function reverse (arr){
    let i =0, j = arr.length - 1
    while(i<j){
        arr[i] = arr[i] + arr[j]
        arr[j] = arr[i] - arr[j]
        arr[i] = arr[i] - arr[j]
        i++;
        j--;
    }
return arr;
    }

    console.log(reverse([12,3,4,5,4,22,]))