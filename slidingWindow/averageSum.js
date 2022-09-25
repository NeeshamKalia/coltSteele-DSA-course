//Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
//Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

function  averageSumB (arr,K){

    const result = [];
    for(let i =0; i<=arr.length - K; i++){
        let sum = 0;
        for(let j = 0; j<=K-1; j++){
            sum += arr[i+j]
        }
        result.push(sum/K)
    }return result;
}

const a = [1, 3, 2, 6, -1, 4, 1, 8, 2], K = 5;


let result = [], sum1 = 0
for (let i = 0; i < K; i++) {
    sum1 += a[i];


}
//console.log(sum1)
result.push(sum1/K)
for (let i = 1; i <= a.length-K; i++) {
    sum1 = sum1 + a[i+K-1] - a[i-1]
    console.log(sum1)
    result.push(sum1/K)
}
console.log(result)




console.log(averageSumB([1,3,4,5,6,7,4,2,6],3))
