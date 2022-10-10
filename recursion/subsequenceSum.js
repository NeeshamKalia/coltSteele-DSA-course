// write a function to get the subsquence in an array whose sum is K

const arr = [1,2,1]
let k = 2;
let n = arr.length;
const subSum = (arr,k,n,i=0, sum=0, ds= [])=>{
            if(i>= n){
                if(sum == k) console.log(ds)
                return;
            }

            sum += arr[i]
            ds.push(arr[i])
            subSum(arr,k,n,i+1,sum,ds)
            sum -= arr[i]
            ds.pop()
            subSum(arr,k,n,i+1, sum, ds)

}


subSum(arr,k,n)
