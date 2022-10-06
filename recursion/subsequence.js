//print all subsquences of an array or string using recursion



const arr = [3,1,2]



function subs(arr,i=0, res= []) {
    if(i>= arr.length){
        console.log(res)
        return;
    }
    res.push(arr[i])
    subs(arr, i+1, res)
    res.pop()
    subs(arr,i+1,res)
}

subs(arr)
