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



const a = [1, 3, 2, 6, -1, 4, 1, 8, 2], K = 5;
let result = [], sum1 = 0
for (let i = 0; i < K; i++) {
    sum1 += a[i];


}
console.log(sum1)
result.push(sum1/K)
for (let i = 1; i <= a.length-K; i++) {
    sum1 = sum1 + a[i+K-1] - a[i-1]
    console.log(sum1)
    result.push(sum1/K)
}
console.log(result)
