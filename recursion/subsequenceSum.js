// write a function to get the subsquence in an array whose sum is K

const arr = [1,2,1]
let k = 2;
let n = arr.length;


function subSum(arr,k,n,index=0, sum=0,res= []){
    if(index>= n){
        if(sum === k) console.log(res)
        return;
        }
    res.push(arr[index])
    sum += arr[index]
    subSum(arr,k,n, index+1, sum, res)
    res.pop()
    sum -= arr[index]
    subSum(arr,k,n,index+1,sum, res)
}
subSum(arr,k,n)
