//write a function to return the number of subsquences with sum K

function subSum(arr,k,n,index=0,count= 0, sum=0){
    if(index>= n){
        if(sum ==k){

            return 1;
        }
        else {return 0; }
    }
    //ds.push(arr[index])
    sum += arr[index]
   let l = subSum(arr,k,n,index+1, count, sum)
    //console.log(l,"l ")
    //ds.pop()
    sum -= arr[index]
   let r = subSum(arr,k,n,index+1, count,sum)
   //console.log(r)
   return l+ r;
}


const arr = [1,2,1]
let k = 2;
let n = arr.length;
console.log(subSum(arr,k,n))
