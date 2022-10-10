

function subSum(arr,k,n,index=0,ds = [], sum=0){
    if(index>= n){
        if(sum ==k){
            console.log(ds)
            return true;
        }
        return false;
    }
    ds.push(arr[index])
    sum += arr[index]
    if(subSum(arr,k,n,index+1, ds, sum) == true) return true;
    ds.pop()
    sum -= arr[index]
    if(subSum(arr,k,n,index+1, ds,sum)==true) return true;
    return false;
}
const arr = [1,2,1]
let k = 2;
let n = arr.length;
subSum(arr,k,n)
