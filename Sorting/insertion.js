//Insertion sort O(n^2)

const arr = [5,5,6,10,9,-1,67,0,90,3,5,4,-90,-900]
console.log(insertion(arr))


function insertion(arr) {
    for (let i = 0; i < arr.length; i++) {
        let x = arr[i], j = i-1;
        while( j > -1 && arr[j] > x){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = x;
    }

    return arr;


}
